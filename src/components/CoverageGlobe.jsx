import { useEffect, useMemo, useRef, useState } from 'react'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import MapLibreGL from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const hub = { name: 'Lagos', lng: 3.3792, lat: 6.5244 }

const destinations = [
  { name: 'Abuja FCT', lng: 7.3986, lat: 9.0765 },
  { name: 'Toronto', lng: -79.3832, lat: 43.6532 },
]

const mapStyle = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'

function toRadians(value) {
  return (value * Math.PI) / 180
}

function toDegrees(value) {
  return (value * 180) / Math.PI
}

function lonLatToVector([longitude, latitude]) {
  const lon = toRadians(longitude)
  const lat = toRadians(latitude)
  const cosLat = Math.cos(lat)

  return [
    cosLat * Math.cos(lon),
    cosLat * Math.sin(lon),
    Math.sin(lat),
  ]
}

function vectorToLonLat([x, y, z]) {
  return [toDegrees(Math.atan2(y, x)), toDegrees(Math.atan2(z, Math.hypot(x, y)))]
}

function buildGreatCircleCoordinates(from, to, samples = 96) {
  const start = lonLatToVector(from)
  const end = lonLatToVector(to)
  const dot = Math.max(
    -1,
    Math.min(1, start[0] * end[0] + start[1] * end[1] + start[2] * end[2]),
  )
  const omega = Math.acos(dot)

  if (omega === 0) return [from, to]

  const sinOmega = Math.sin(omega)

  return Array.from({ length: samples + 1 }, (_, index) => {
    const t = index / samples
    const startScale = Math.sin((1 - t) * omega) / sinOmega
    const endScale = Math.sin(t * omega) / sinOmega

    return vectorToLonLat([
      startScale * start[0] + endScale * end[0],
      startScale * start[1] + endScale * end[1],
      startScale * start[2] + endScale * end[2],
    ])
  })
}

function createMarkerElement({ label, isHub = false }) {
  const marker = document.createElement('div')
  marker.className = isHub ? 'coverage-globe-marker is-hub' : 'coverage-globe-marker'
  marker.innerHTML = `
    <span class="coverage-globe-dot" aria-hidden="true"></span>
    <span class="coverage-globe-label">${label}</span>
  `
  return marker
}

export function CoverageGlobe() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const [status, setStatus] = useState('loading')

  const arcs = useMemo(
    () => ({
      type: 'FeatureCollection',
      features: destinations.map((destination) => ({
        type: 'Feature',
        properties: { id: destination.name },
        geometry: {
          type: 'LineString',
          coordinates: buildGreatCircleCoordinates([hub.lng, hub.lat], [
            destination.lng,
            destination.lat,
          ]),
        },
      })),
    }),
    [],
  )

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return undefined

    const map = new MapLibreGL.Map({
      container: containerRef.current,
      style: mapStyle,
      center: [hub.lng, hub.lat],
      zoom: 2.2,
      bearing: 0,
      pitch: 0,
      projection: { type: 'globe' },
      attributionControl: { compact: true },
      renderWorldCopies: false,
      interactive: true,
    })

    mapRef.current = map

    const markers = [
      new MapLibreGL.Marker({
        element: createMarkerElement({ label: hub.name, isHub: true }),
      }).setLngLat([hub.lng, hub.lat]),
      ...destinations.map((destination) =>
        new MapLibreGL.Marker({
          element: createMarkerElement({ label: destination.name }),
        }).setLngLat([destination.lng, destination.lat]),
      ),
    ]

    const onLoad = () => {
      setStatus('ready')

      if (map.setProjection) {
        map.setProjection({ type: 'globe' })
      }

      map.addSource('vip-coverage-arcs', {
        type: 'geojson',
        data: arcs,
      })

      map.addLayer({
        id: 'vip-coverage-arcs',
        type: 'line',
        source: 'vip-coverage-arcs',
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-color': '#006d40',
          'line-dasharray': [2, 2],
          'line-opacity': 0.82,
          'line-width': 2,
        },
      })

      markers.forEach((marker) => marker.addTo(map))
    }

    const onError = () => setStatus('error')

    map.on('load', onLoad)
    map.on('error', onError)

    return () => {
      map.off('load', onLoad)
      map.off('error', onError)
      markers.forEach((marker) => marker.remove())
      map.remove()
      mapRef.current = null
    }
  }, [arcs])

  const zoomIn = () => mapRef.current?.setZoom(mapRef.current.getZoom() + 0.7)
  const zoomOut = () => mapRef.current?.setZoom(mapRef.current.getZoom() - 0.7)
  const resetView = () =>
    mapRef.current?.jumpTo({
      center: [hub.lng, hub.lat],
      zoom: 2.2,
      bearing: 0,
      pitch: 0,
    })

  return (
    <div className="coverage-globe" aria-label="VIP Lift Nigeria service coverage globe">
      <div ref={containerRef} className="coverage-globe-canvas" />
      {status === 'loading' && (
        <div className="coverage-globe-loading" role="status">
          <span />
          <span />
          <span />
        </div>
      )}
      {status === 'error' && (
        <div className="coverage-globe-error">
          <p className="label-tiny">Coverage areas</p>
          <p>Lagos, Abuja FCT, Toronto. Other on request.</p>
        </div>
      )}
      <div className="coverage-globe-controls" aria-label="Map controls">
        <button type="button" aria-label="Zoom in" onClick={zoomIn}>
          <Plus size={15} strokeWidth={1.8} />
        </button>
        <button type="button" aria-label="Zoom out" onClick={zoomOut}>
          <Minus size={15} strokeWidth={1.8} />
        </button>
        <button type="button" aria-label="Reset map view" onClick={resetView}>
          <RotateCcw size={14} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  )
}
