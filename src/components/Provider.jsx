import { ChakraProvider } from '@chakra-ui/react'
import { system } from '../theme.js'

export function Provider({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
