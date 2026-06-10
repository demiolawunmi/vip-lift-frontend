# VIP Lift Nigeria — Codex Contact Page Redesign Brief

> Use this Markdown file as the Codex instruction brief for redesigning the VIP Lift Nigeria contact page.
>
> This task starts from a 21st.dev/shadcn contact component prompt, but the VIP Lift website uses **Chakra UI**, so Codex must **adapt the concept**, not copy the shadcn/Tailwind implementation.

---

## 1. Primary Goal

Redesign the current VIP Lift Nigeria contact page into a premium, modern, conversion-focused landing page using the existing website codebase and **Chakra UI** design system.

The finished page should feel:

- Premium and architectural
- Nigerian, but globally credible
- European-engineered and technically trustworthy
- Calm, spacious, polished, and high-end
- Built for quote requests, inspections, repairs, servicing, and maintenance inquiries
- Consistent with the upcoming VIP Lift brand kit

This is **not** a request to install shadcn, Tailwind, or replace Chakra UI.

---

## 2. Required Context Before Editing

Before making changes, Codex must read and consider:

1. `docs/VIP-Lift-Codex-UI-Upgrade-Brief.md`, if it exists.
2. The current Chakra UI theme setup.
3. The current page structure and routing system.
4. Existing contact page/component files.
5. Existing form patterns, if any.
6. Existing assets, logo usage, colors, layout primitives, and brand tokens.
7. Any newly added VIP Lift brand kit files.

If the VIP Lift brand kit has been added to the repo, it becomes the visual source of truth for:

- Logo usage
- Colors
- Typography
- Spacing
- Imagery
- Icon style
- Brand patterns
- PDF/company-profile visual language

If the brand kit has **not** been added yet, Codex should use clear TODO comments and existing theme tokens rather than inventing permanent brand rules.

Example:

```ts
// TODO: Replace with official VIP Lift brand kit token once brand kit is added.
const accent = "brand.emerald";
```

---

## 3. Important Brand Positioning

VIP Lift Nigeria should be positioned as:

> A Nigerian lift-solutions partner that supplies, installs, repairs, services, and maintains selected international lift systems for Nigerian homes, businesses, and public buildings.

Do **not** reduce the business to:

> “We sell Cibes lifts.”

The contact page should support inquiries for:

- Platform lifts
- Traction lifts
- Repairs
- Servicing
- Maintenance contracts
- Supply and installation
- Inspections
- Modernization or project consultation, only if already supported elsewhere in the site

Preferred messaging direction:

> Speak with a lift specialist about your building, project, repair, or maintenance requirement.

---

## 4. Original 21st.dev Prompt — What It Was Trying To Do

The original prompt provides a simple contact section with:

- A title
- A short description
- Phone/email/web contact details
- First name and last name inputs
- Email input
- Subject input
- Message textarea
- Submit button

That structure is useful as a starting point, but it is too generic for VIP Lift and it is written for the wrong UI stack.

---

## 5. Flaws In The Original Prompt / Component

Codex should treat these as issues to fix, not as instructions to copy directly.

### 5.1 Wrong styling system

The provided component assumes:

- shadcn/ui
- Tailwind CSS
- `className` utility styling
- `/components/ui` folder structure
- Radix dependencies used by shadcn

The VIP Lift site uses **Chakra UI**, so Tailwind classes and shadcn components should not be copied in.

Do **not** install these unless they already exist and the project explicitly uses them:

```bash
@radix-ui/react-slot
@radix-ui/react-label
class-variance-authority
shadcn/ui
```

### 5.2 Wrong folder assumptions

The prompt assumes all UI components should live in:

```txt
/components/ui
```

That may be wrong for the VIP Lift codebase. Codex must inspect the current structure first and follow the existing pattern.

Possible locations could include:

```txt
src/components/
src/components/sections/
src/features/contact/
app/contact/
pages/contact.tsx
```

Use the repo’s existing conventions.

### 5.3 Generic content

The placeholder content is not suitable:

```txt
Contact Us
We are available for questions, feedback, or collaboration opportunities.
(123) 34567890
email@example.com
shadcnblocks.com
```

Replace with VIP Lift-specific content from existing site data, environment config, CMS content, or approved placeholders.

Do not invent final phone numbers, email addresses, addresses, warranties, certifications, distributor status, or supplier relationships.

### 5.4 Weak conversion strategy

The original component treats every inquiry the same. VIP Lift needs contact flows for high-intent lift services.

The page should help users choose why they are contacting VIP Lift:

- Request a quote
- Book a site inspection
- Repair an existing lift
- Ask about maintenance/servicing
- Discuss a platform lift for a home or duplex
- Discuss a traction lift for a commercial/public building

### 5.5 No form state or validation

The original form has no:

- Submit handler
- Loading state
- Success state
- Error state
- Required fields
- Validation
- Anti-spam handling
- Destination/API integration
- Accessible field errors

Codex must inspect how the current site handles forms and follow that pattern.

### 5.6 Not premium enough

The original design is a plain two-column layout with a bordered form card. That is acceptable for a generic SaaS page, but not enough for VIP Lift.

The redesigned page should feel like a premium lift-solutions landing page, with:

- Strong hero section
- High-trust copy
- Clear inquiry paths
- Premium contact card
- Form card with excellent spacing
- Subtle architectural background treatment
- Strong mobile layout
- WhatsApp/phone/email CTAs if supported

### 5.7 Accessibility and security gaps

The original code uses `target="_blank"` without `rel="noopener noreferrer"`.

The original code also does not define field errors, required states, or screen-reader-friendly feedback after submission.

Codex must fix these issues.

---

## 6. Chakra UI Implementation Rules

Use Chakra UI primitives and the existing project theme.

Codex must first inspect the installed Chakra version and existing patterns.

Depending on the project version, use the appropriate Chakra form API:

- Chakra UI v2 often uses `FormControl`, `FormLabel`, `FormErrorMessage`.
- Chakra UI v3 projects may use newer field patterns or project-specific wrappers.

Do not force one version’s API without checking the existing codebase.

Recommended Chakra primitives:

```tsx
Box
Container
Stack
HStack
VStack
SimpleGrid
Grid
GridItem
Heading
Text
Button
Input
Textarea
Select
FormControl / Field pattern depending on project version
Link
Icon
Badge
Divider
Card or Box-based custom card
```

Use responsive Chakra props instead of Tailwind classes:

```tsx
<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 14 }}>
```

Use theme tokens instead of raw one-off colors wherever possible:

```tsx
bg="brand.navy"
color="brand.ivory"
borderColor="whiteAlpha.200"
```

If final brand tokens are not present yet, add temporary TODO-safe tokens in the theme only if that matches the project’s theme structure.

---

## 7. Desired Page Structure

Redesign the contact page as a modern landing page, not just a small form block.

### 7.1 Hero section

Purpose: Immediately reassure users that VIP Lift can handle their project or service need.

Suggested content direction:

```txt
Speak with a lift specialist

Tell us about your building, lift project, repair, or maintenance requirement. VIP Lift Nigeria helps homes, businesses, and public buildings choose, install, service, and maintain reliable lift systems.
```

Suggested CTA buttons:

- Request a quote
- Book an inspection
- WhatsApp us, only if a verified WhatsApp link exists

Visual direction:

- Dark premium background or refined light architectural layout depending on existing site direction
- Subtle elevator-line motif, brushed-metal feel, glass-panel card, or brand pattern
- No fake logos
- No distorted text in images
- No random Unsplash elevator stock unless approved or already used

### 7.2 Inquiry-type cards

Add a row/grid of inquiry categories to help users self-identify.

Suggested cards:

1. **New Lift Projects**
   - Platform lifts, traction lifts, homes, apartments, offices, hotels, and public buildings.

2. **Repairs & Breakdown Support**
   - For existing lift issues, faults, callouts, or urgent servicing needs.

3. **Maintenance & Service Contracts**
   - Scheduled servicing, reliability checks, and long-term support.

4. **Consultation / Site Inspection**
   - Help choosing the right lift system for a building or retrofit.

These can be small premium cards with icons from the existing icon system or `lucide-react` only if the project already uses it or Codex confirms it is acceptable to add.

### 7.3 Main contact/form section

Use a premium two-column layout:

Left column:

- Short trust message
- Contact methods
- Service areas / inquiry notes
- Possibly “What happens next” steps

Right column:

- Form card
- Strong heading
- Clear labels
- Required fields
- Project-specific fields

### 7.4 “What happens next” section

Add a short process section below the form:

1. Share your project or issue.
2. VIP Lift reviews the building/use case.
3. A specialist follows up with the next step, quote, inspection, or service recommendation.

Keep this section short and premium.

---

## 8. Recommended Contact Form Fields

Codex should inspect the current backend/API/contact integration before changing fields.

Recommended fields:

### Required

- Full name
- Email or phone number
- Inquiry type
- Message

### Optional but useful

- Company / organization
- Building type
- Location / city
- Preferred contact method
- Existing lift installed? Yes/No

### Inquiry type options

```txt
New lift project
Platform lift / home lift
Traction lift / commercial lift
Repair or breakdown support
Maintenance / servicing
Site inspection
General enquiry
```

### Building type options

```txt
Private home / duplex
Apartment building
Office
Hotel
Mall / retail
Church / public building
Hospital / accessibility use
Other
```

Do not add fields that make the form feel too long or intimidating. For a premium service page, the form should feel guided but not bureaucratic.

---

## 9. Suggested Chakra Component Shape

Codex may use this as a conceptual target, but must adapt file paths/imports to the actual codebase.

```tsx
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export function ContactLandingPage() {
  return (
    <Box as="main">
      <Box as="section" bg="brand.navy" color="brand.ivory" py={{ base: 20, md: 28 }}>
        <Container maxW="7xl">
          <Stack spacing={6} maxW="3xl">
            <Text textTransform="uppercase" letterSpacing="wide" fontSize="sm">
              Contact VIP Lift Nigeria
            </Text>
            <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter">
              Speak with a lift specialist.
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.800">
              Tell us about your building, lift project, repair, or maintenance requirement.
              We help homes, businesses, and public buildings choose, install, service,
              and maintain reliable lift systems.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button size="lg" colorScheme="emerald">
                Request a quote
              </Button>
              <Button size="lg" variant="outline" color="brand.ivory" borderColor="whiteAlpha.400">
                Book an inspection
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box as="section" py={{ base: 16, md: 24 }} bg="brand.ivory">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 16 }} alignItems="start">
            <Stack spacing={8}>
              <Stack spacing={3}>
                <Heading as="h2" size="xl">
                  Let’s understand the right next step.
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  Whether you are planning a new lift, servicing an existing system,
                  or requesting urgent support, share the details and our team will follow up.
                </Text>
              </Stack>

              {/* Contact method cards go here */}
              {/* What happens next goes here */}
            </Stack>

            <Box rounded="2xl" borderWidth="1px" borderColor="blackAlpha.100" bg="white" p={{ base: 6, md: 8 }} shadow="xl">
              <VStack as="form" spacing={5} align="stretch">
                {/* Use project’s existing FormControl/Field pattern */}
                <Input placeholder="Full name" />
                <Input placeholder="Email or phone number" />
                <Select placeholder="Inquiry type">
                  <option>New lift project</option>
                  <option>Platform lift / home lift</option>
                  <option>Traction lift / commercial lift</option>
                  <option>Repair or breakdown support</option>
                  <option>Maintenance / servicing</option>
                  <option>Site inspection</option>
                  <option>General enquiry</option>
                </Select>
                <Textarea placeholder="Tell us about your building, project, or issue." minH="150px" />
                <Button size="lg" type="submit">
                  Send enquiry
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
```

This is not meant to be copy-pasted blindly. Codex must adapt it to:

- Existing Chakra version
- Existing theme tokens
- Existing routing
- Existing form API
- Existing contact information
- Existing component/file naming conventions

---

## 10. Visual Design Direction

The contact page should match the VIP Lift design system from the main UI upgrade brief.

### Preferred visual qualities

- Dark navy architectural hero
- Off-white or warm ivory content areas
- Subtle brushed-metal/silver borders
- Emerald accent lighting or CTA accents if present in brand kit
- Clean grid layouts
- Large premium headings
- Generous spacing
- High-quality card surfaces
- Minimal, precise iconography
- Strong mobile polish

### Avoid

- shadcn visual defaults that clash with Chakra
- Tailwind utility classes
- Random gradients
- Heavy gold/chrome effects
- Cheap construction imagery
- Generic stock photos that do not look like real lift/elevator work
- Fake supplier claims
- Placeholder contact details left in production
- An overlong form that hurts conversions

---

## 11. Content Copy Suggestions

Codex may use these as page copy placeholders if no better approved copy exists.

### Hero eyebrow

```txt
Contact VIP Lift Nigeria
```

### Hero heading

```txt
Speak with a lift specialist.
```

### Hero body

```txt
Tell us about your building, lift project, repair, or maintenance requirement. VIP Lift Nigeria helps homes, businesses, and public buildings choose, install, service, and maintain reliable lift systems.
```

### Form heading

```txt
Send an enquiry
```

### Form helper text

```txt
Share a few details and we’ll follow up with the right next step, whether that is a quote, inspection, repair, or maintenance conversation.
```

### Contact support heading

```txt
Need support for an existing lift?
```

### Contact support body

```txt
Include the building type, location, lift issue, and urgency so the team can understand the request clearly.
```

### What happens next

```txt
1. Tell us about your project or lift issue.
2. We review the building type, use case, and urgency.
3. A VIP Lift specialist follows up with the appropriate next step.
```

---

## 12. Form Handling Requirements

Codex must inspect the current form approach first.

Possible implementations:

- Existing contact API route
- Existing server action
- Existing email service integration
- Existing CMS/contact endpoint
- Temporary `mailto:` or no-op handler only if the current site has no backend yet

Do not silently create a fake backend.

The form should include:

- Required field validation
- Loading state on submit
- Success feedback
- Error feedback
- Accessible error messages
- Proper `type="submit"`
- No console-only success path

If no backend exists, Codex should implement the UI safely and leave a clear TODO at the submit handler:

```ts
// TODO: Connect this form to the approved VIP Lift contact endpoint.
```

---

## 13. Responsive Behaviour

The page must be polished on:

- Mobile
- Tablet
- Laptop
- Desktop/wide screen

Requirements:

- Hero text should not overflow.
- CTA buttons should stack cleanly on mobile.
- Form should be full-width on mobile.
- Two-column layout should collapse to one column below desktop.
- Cards should retain spacing and readable text.
- Contact details should be tappable on mobile.
- WhatsApp/phone links should use proper `href` formats if verified.

---

## 14. Accessibility Requirements

The redesigned contact page must include:

- One clear page-level `h1`
- Correct heading hierarchy
- Labels for all inputs
- Required states where applicable
- Accessible validation feedback
- Keyboard-visible focus states
- Sufficient color contrast
- `rel="noopener noreferrer"` on external links opened in new tabs
- No contact details represented only by icons

---

## 15. SEO / Metadata Requirements

If the framework supports page metadata, Codex should add or update metadata for the contact page.

Suggested metadata:

```txt
Title: Contact VIP Lift Nigeria | Lift Installation, Repairs & Maintenance
Description: Contact VIP Lift Nigeria for lift supply, installation, repairs, servicing, maintenance, inspections, and project enquiries for homes, businesses, and public buildings.
```

Do not overclaim supplier partnerships or certifications.

---

## 16. Codex Step-by-Step Instructions

Codex should follow this sequence.

### Step 1 — Inspect first

Read:

- `package.json`
- Chakra UI version and theme setup
- Routing framework
- Current contact page
- Existing components
- Existing form handling
- Existing assets/contact information
- `docs/VIP-Lift-Codex-UI-Upgrade-Brief.md`

Return a short audit before editing.

### Step 2 — Identify incompatibilities

Explicitly state that the 21st.dev component is shadcn/Tailwind-based and should be converted to Chakra UI instead of copied.

### Step 3 — Propose files to edit

Before editing, list files likely to change, such as:

```txt
app/contact/page.tsx
pages/contact.tsx
src/pages/Contact.tsx
src/components/contact/ContactLandingPage.tsx
src/components/sections/ContactSection.tsx
src/theme/index.ts
```

Only use actual files from the repo.

### Step 4 — Implement the Chakra redesign

Build the page with Chakra UI primitives, existing theme tokens, and VIP Lift-specific copy.

### Step 5 — Add form handling carefully

Use the existing project’s form submission pattern.

If no backend exists, build the UI and add a clear TODO instead of pretending messages are being sent.

### Step 6 — Verify

Run available checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Only run scripts that exist in `package.json`.

### Step 7 — Manual QA notes

After implementation, report:

- What changed
- What files were edited
- Whether form submission is fully connected or still TODO
- Any brand kit placeholders left
- Mobile/responsive considerations
- Any remaining issues

---

## 17. Final Codex Prompt To Use

Paste this into Codex after adding this file to the repo:

```txt
Read docs/VIP-Lift-Codex-Contact-Page-Redesign.md and docs/VIP-Lift-Codex-UI-Upgrade-Brief.md completely.

The 21st.dev prompt I provided is shadcn/Tailwind-based, but this project uses Chakra UI. Do not install shadcn, Tailwind, Radix, or class-variance-authority unless they already exist and are already part of the project. Convert the contact page concept into a Chakra UI implementation that matches the current VIP Lift design system.

First inspect the codebase, especially package.json, Chakra theme setup, routing, current contact page, existing components, assets, and form handling.

Before editing, return:
1. The flaws in the original 21st.dev component for this project.
2. The files you plan to edit.
3. The Chakra UI structure you will use.
4. How you will preserve the VIP Lift brand direction and upcoming brand kit compatibility.
5. How form submission will work or what TODO is needed if no backend exists.

After that, implement the contact page as a premium modern landing page for VIP Lift Nigeria with:
- Hero section
- Inquiry category cards
- Main contact/form section
- Contact method cards
- What happens next section
- Responsive Chakra layout
- Accessible labels and validation states
- VIP Lift-specific messaging for lift supply, installation, repairs, servicing, and maintenance

Run only the validation scripts that exist in package.json and summarize the result.
```

---

## 18. Definition of Done

The contact page is done when:

- It uses Chakra UI, not shadcn/Tailwind.
- It follows the current repo’s file structure.
- It reflects the VIP Lift brand direction.
- It does not use generic `email@example.com` or fake phone numbers in production UI.
- It supports real VIP Lift inquiry types.
- It works on mobile and desktop.
- It has accessible form labels and feedback.
- It has a clear form integration path.
- It does not overclaim supplier partnerships.
- It visually feels like a premium lift-solutions landing page, not a generic contact form block.
