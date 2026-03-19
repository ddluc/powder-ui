# Powder UI — Component API Reference

All components are imported from `powder-ui`. Wrap your app in a styled-components `ThemeProvider` with `DEFAULT_THEME` or `ALT_THEME` from `powder-ui`.

```tsx
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from 'powder-ui';

<ThemeProvider theme={DEFAULT_THEME}>
  <App />
</ThemeProvider>
```

---

## BaseCSSProperties

Block, Flex, Card, Scroll, Scale, Grid, Cell, and Fit all extend `BaseCSSProperties`. These props are available on all of those components.

```tsx
// Dimensions
height?: string               // CSS height value e.g. '100px', '100%'
width?: string                // CSS width value

// Spacing — use array [top, right, bottom, left] or shorthand string
padding?: [string, string, string, string]
margin?: [string, string, string, string]
p?: string                    // shorthand padding e.g. '10px 20px'
m?: string                    // shorthand margin

// Positioning
position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'
top?: string
right?: string
bottom?: string
left?: string
zIndex?: number

// Display & overflow
display?: 'block' | 'inline-block' | 'flex' | 'grid' | 'none'
overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'

// Appearance
border?: string               // full CSS border string e.g. 'solid 1px red'
radius?: string               // border-radius override
opacity?: number
blur?: number                 // px blur amount applied via filter
background?: {
  color?: string
  position?: string
  image?: 'url' | 'none' | 'initial' | 'inherit'
  repeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit'
  size?: 'auto' | 'length' | 'cover' | 'contain' | 'initial' | 'inherit'
}
outline?: string
textAlign?: 'right' | 'center' | 'left'
boxSizing?: 'border-box' | 'content-box' | 'inherit' | 'initial'
float?: 'left' | 'right' | 'none'

// Flex item properties (when component is a child of a Flex parent)
flex?: string
grow?: number | 'auto' | 'initial' | 'inherit'
shrink?: number | 'auto' | 'initial' | 'inherit'
basis?: string | number | 'auto' | 'initial' | 'inherit'
order?: number
alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
```

---

## TextProperties

Shared by all Typography sub-components (Body, Text, H1–H6, Mono, Link).

```tsx
// Font size in pixels; defaults vary by element
size?: number

// Font weight
weight?: 'light' | 'normal' | 'semibold' | 'bold'

// Line height in pixels; defaults to ~1.5x size
lineHeight?: number

// Makes text italic
italic?: boolean

// Clips text with ellipsis on overflow
ellipsis?: boolean

// Text decoration
decoration?: 'overline' | 'underline' | 'line-through'

// Text alignment
align?: 'right' | 'left' | 'center'

// Color override; defaults to theme foreground
color?: string

// Top margin in pixels (theme spacing units)
top?: number

// Bottom margin in pixels (theme spacing units)
bottom?: number

// Suppresses default bottom margin used in body text rhythm
condensed?: boolean
```

---

## Block

Generic `div` wrapper with full `BaseCSSProperties` support. The foundational layout primitive.

```tsx
import { Block } from 'powder-ui';

children?: ReactNode

// All BaseCSSProperties are available — see above
```

---

## Flex

`div` with `display: flex` and full flexbox control. Extends `BaseCSSProperties`.

```tsx
import { Flex } from 'powder-ui';

// Sets flex-direction to row (default behavior, included for readability)
row?: boolean

// Sets flex-direction to column
column?: boolean

// Reverses the flex direction (row-reverse or column-reverse)
reverse?: boolean

// Flex-wrap value
wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'

// Shorthand for flex-flow
flow?: string

// Shorthand that sets both justifyContent and alignItems to center
center?: boolean

justifyContent?:
  | 'flex-start' | 'flex-end' | 'center'
  | 'space-between' | 'space-around' | 'space-evenly'
  | 'start' | 'end' | 'left' | 'right'

alignItems?:
  | 'stretch' | 'flex-start' | 'flex-end' | 'center'
  | 'baseline' | 'first baseline' | 'last baseline'
  | 'start' | 'end' | 'self-start' | 'self-end'

alignContent?:
  | 'flex-start' | 'flex-end' | 'center'
  | 'space-between' | 'space-around' | 'space-evenly'
  | 'stretch' | 'start' | 'end' | 'baseline'
  | 'first baseline' | 'last baseline'

// CSS gap value e.g. '8px', '8px 16px' (row col)
gap?: string

// All BaseCSSProperties are available — see above
```

---

## Grid

`div` with `display: grid`. Extends `BaseCSSProperties`.

```tsx
import { Grid } from 'powder-ui';

// grid-template-columns value e.g. '1fr 1fr 1fr', 'repeat(3, 1fr)'
columns?: string

// grid-template-rows value
rows?: string

// Named areas — each string is a row of named cells
// e.g. ['header header', 'sidebar content']
areas?: string[]

// Gap between rows
rowGap?: string

// Gap between columns
columnGap?: string

justifyContent?: // same options as Flex
alignItems?:     // same options as Flex
alignContent?:   // same options as Flex

// All BaseCSSProperties are available — see above
```

### Grid.Cell

Child component for Grid. Extends `BaseCSSProperties`.

```tsx
import { Cell } from 'powder-ui';

// Column span — start and end grid line numbers or named lines
column?: { start: number | string; end: number | string }

// Row span — start and end grid line numbers or named lines
row?: { start: number | string; end: number | string }

justify?: 'start' | 'end' | 'center' | 'stretch'
align?: 'start' | 'end' | 'center' | 'stretch'
```

### Grid.Area

Named grid area child. Extends `BaseCSSProperties`.

```tsx
import { Area } from 'powder-ui';

// Must match a name defined in parent Grid's areas array
area: string

justify?: 'start' | 'end' | 'center' | 'stretch'
align?: 'start' | 'end' | 'center' | 'stretch'
```

---

## Card

Styled `div` with border, border-radius, and optional elevation shadow. Extends `BaseCSSProperties`.

```tsx
import { Card } from 'powder-ui';

// Material-style shadow depth. 0 = no shadow.
// Valid levels: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16
elevation?: ElevationLevel

// Full CSS border string override e.g. 'solid 2px red'
// Defaults to theme border using neutral palette
border?: string

// Glassmorphism effect — applies gradient + backdrop blur
gloss?: {
  color: string   // base color for gradient
  blur: number    // backdrop blur in px
}

children?: ReactNode

// All BaseCSSProperties are available — see above
// Note: padding defaults to '10px' if p/padding not provided
```

---

## Scale

Responsive width wrapper — renders a `div` that changes width at each breakpoint. Extends `BaseCSSProperties`.

```tsx
import { Scale } from 'powder-ui';

// Width at each breakpoint (all required)
// xl = default (largest screens), xs = smallest screens
xl: string   // e.g. '1200px' or '100%'
lg: string
md: string
sm: string
xs: string
```

---

## Scroll

Block wrapper with overflow scroll in one axis. Extends `BaseCSSProperties`.

```tsx
import { Scroll } from 'powder-ui';

// Which axis to scroll — required
direction: 'x' | 'y'

// All BaseCSSProperties are available — see above
// Typically set height for direction='y' or width for direction='x'
```

---

## Fit

Container that applies object-fit and object-position to its direct child (typically an `img`). Extends `BaseCSSProperties`.

```tsx
import { Fit } from 'powder-ui';

// CSS object-fit value applied to the child element
fit: 'fill' | 'contain' | 'cover' | 'scale' | 'none'

// CSS object-position value e.g. '50% 50%', 'top left'
align: string
```

---

## Spacer

Vertical whitespace block using the theme's spacing scale (index 1–16).

```tsx
import { Spacer } from 'powder-ui';

// Theme spacing index — maps to theme.spacing[spacing - 1]
// e.g. spacing={4} gives the 4th spacing value (~16px depending on theme)
spacing: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16

// Override the height with a raw CSS value instead of the spacing scale
height?: string

// Renders with a visible background and dashed border for layout debugging
debug?: boolean
```

---

## Divider

Styled `hr` element for horizontal or vertical visual separation.

```tsx
import { Divider } from 'powder-ui';

// 'horizontal' is the default rule across the full width;
// 'vertical' renders a tall left-border line
type?: 'horizontal' | 'vertical'

// Renders a solid border (default)
solid?: boolean

// Renders a dashed border instead of solid
dashed?: boolean

// Border thickness in pixels (1–5)
size?: 1 | 2 | 3 | 4 | 5

// Color override; defaults to theme neutral[3]
color?: string

// Width of the horizontal rule e.g. '80%', '200px'
width?: string

// Height of a vertical divider e.g. '100px', '100%'
height?: string

// Horizontal alignment for a horizontal rule
alignment?: 'right' | 'center' | 'left'

// Outer spacing on each side
spacing?: {
  top?: string
  bottom?: string
  right?: string
  left?: string
}
```

---

## Typography

Namespace of text components — all share `TextProperties` (see above).

```tsx
import { Typography } from 'powder-ui';

// Paragraph text — renders <p>
<Typography.Body />

// Small UI label or caption — renders <span>
<Typography.Text />

// Monospaced paragraph — renders <p> in mono font family
<Typography.Mono />

// Headings — render <h1>–<h6> with theme font sizes and weights
<Typography.H1 />   // display font, title size, semibold
<Typography.H2 />   // display font, subtitle size, bold
<Typography.H3 />   // display font, large size, normal
<Typography.H4 />   // display font, normal size, light
<Typography.H5 />   // body font, small size, bold
<Typography.H6 />   // display font, xsmall size, light

// Anchor tag
<Typography.Link
  visited?: boolean        // styles as a visited link
  active?: boolean         // underlines to indicate current page
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word'
  // All TextProperties and standard <a> HTML attributes
/>

// List components
<Typography.List.Ordered />    // <ol>
<Typography.List.Unordered />  // <ul>
<Typography.List.Item />       // <li>

// Loading skeleton for text — box type
<Typography.Skeleton
  width: number
  height: number
  fluid?: boolean
  animation?: 'wave' | 'pulse' | 'shimmer' | 'none'
/>
```

---

## Button

Primary interactive button. Extends `React.ButtonHTMLAttributes` so all standard button props (onClick, onFocus, onBlur, etc.) pass through.

```tsx
import { Button } from 'powder-ui';

// Visual style of the button
variation?: 'default' | 'secondary' | 'minimal'

// Applies a semantic color (fills default, tints secondary, colors icon on minimal)
intent?: 'success' | 'danger' | 'warning' | 'none'

// HTML button type
type?: 'button' | 'submit'

// Height preset — sm=34px (default), lg=42px matches TextInput height
size?: 'sm' | 'lg'

// Button label text
text?: string

// Icon element — pass bare <Icon /> with no size; size is injected automatically
// Icon-only buttons (no text) auto-center and should receive aria-label
icon?: ReactNode

// Which side the icon appears on
iconPosition?: 'right' | 'left'

// Icon size preset — sm=16px, lg=24px
iconSize?: 'sm' | 'lg'

// Horizontal alignment of button content
align?: 'center' | 'left'

// Stretches button to 100% of container width
fluid?: boolean

// Raw px width override
width?: number

// Raw px height override — takes precedence over size
height?: number

// Prevents the button from shrinking below its content size in a flex container
fixed?: boolean

disabled?: boolean

// Background color override (bypasses intent/variation)
color?: string

// Text color override
textColor?: string

// Font size in px override
textSize?: number

// Border override e.g. 'solid 1px red'
border?: string

// Border-radius override
radius?: string

// Skeleton state — requires width and height
skeleton?: boolean
// (skeleton) width: number
// (skeleton) height: number
```

---

## Badge

Small label or pill. Renders as `div` by default; renders as `button` when `onClick` is provided.

```tsx
import { Badge } from 'powder-ui';

// Display text
text?: string

// Icon element placed inside the badge
icon?: ReactNode

// Which side the icon appears on
iconPosition?: 'right' | 'left'

// Color scheme — maps to theme palette
type?: 'primary' | 'accent' | 'success' | 'danger' | 'warning'
     | 'foreground' | 'background' | 'neutral'

// Fully custom color overrides — use instead of type
colors?: { background: string; text: string; border: string }

disabled?: boolean

// Makes the badge interactive — renders as <button>
onClick?: (e: MouseEvent) => void

// Skeleton state — requires width
skeleton?: boolean
// (skeleton) width: number
```

---

## Checkbox

Styled checkbox input with label, error state, and help text.

```tsx
import { Checkbox } from 'powder-ui';

// Current checked state
checked: boolean

// Submitted value for the checkbox input
value: string

// Visible label — can be a string or ReactNode
label: string | ReactNode

// Input name attribute for form submission
name?: string

// Shows error styling when both error and touched are set
error?: string

touched?: boolean

// Help text shown below the checkbox when no error
help?: string

disabled?: boolean

// Prevents user interaction but does not apply disabled styling
readOnly?: boolean

// When true, suppresses FormMessage (use inside a CheckboxGroup)
asGroup?: boolean

// Required when label is a ReactNode — used as the aria-label fallback
a11yLabel?: string

// Skeleton state
skeleton?: boolean

// All standard input HTML attributes pass through
```

---

## Radio

Styled radio button with label and error state.

```tsx
import { Radio } from 'powder-ui';

// The value this radio represents
value: string

// Visible label — can be a string or ReactNode
label: string | ReactNode

// Radio group name — must match across options in the same group
name?: string

// Whether this radio is selected
enabled?: boolean

// Shows error styling when both error and touched are set
error?: string

touched?: boolean

disabled?: boolean

// 'card' wraps the radio in a card-style container
display?: 'normal' | 'card'

// Required when label is a ReactNode — used as the aria-label fallback
a11yLabel?: string

// Skeleton state
skeleton?: boolean

// All standard input HTML attributes pass through
```

---

## TextInput

Text input with animated or static label, error state, and help text. Forwards ref to the underlying input.

```tsx
import { TextInput } from 'powder-ui';

// Input name attribute — also used as the element id
name: string

// Label text displayed above or animated inside the input
label: string

// Controlled value
value: string

// HTML input type
type?: 'number' | 'text' | 'email' | 'tel' | 'password'

// Placeholder text (hidden when animated=true)
placeholder?: string

// Animates the label from inside to above on focus/fill
animated?: boolean

// Hides the label visually
hideLabel?: boolean

// Shows error styling; requires touched=true to display the error message
error?: string

touched?: boolean

// Help text shown below the input when no error is active
help?: string

disabled?: boolean

// Suppresses the FormMessage spacer below the input (use in tight layouts)
condensed?: boolean

// Number input step size
step?: string

onChange?: (e: ChangeEvent<HTMLInputElement>) => void
onFocus?: (e: FocusEvent<HTMLInputElement>) => void
onBlur?: (e: FocusEvent<HTMLInputElement>) => void

// Skeleton state
skeleton?: boolean

// All standard input HTML attributes pass through
```

---

## Select

Styled native select input with animated or static label, error state, and help text. Forwards ref to the underlying select.

```tsx
import { Select } from 'powder-ui';

// Select name attribute — also used as the element id
name: string

// Label text displayed above or animated inside the select
label: string

// Array of options to render
options: Array<{ value: string; label: string }>

// Controlled selected value
value?: string | null

// Placeholder text shown as a disabled first option
placeholder?: string

// Animates the label from inside to above on focus/selection
animated?: boolean

// Hides the label visually
hideLabel?: boolean

// Shows error styling; requires touched=true to display the error message
error?: string

touched?: boolean

// Help text shown below the select when no error is active
help?: string

disabled?: boolean

// Suppresses the FormMessage spacer (use in tight layouts)
condensed?: boolean

onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
onFocus?: (e: FocusEvent<HTMLSelectElement>) => void
onBlur?: (e: FocusEvent<HTMLSelectElement>) => void

// Skeleton state
skeleton?: boolean
```

---

## Toggle

Styled checkbox rendered as a toggle switch with label, annotations, and error state.

```tsx
import { Toggle } from 'powder-ui';

// Input name attribute — also used as the element id
name: string

// Visible label text displayed beside or above the toggle
label: string

// Current on/off state
on: boolean

// The value submitted in forms when the toggle is on
value?: string

// Toggle visual size
size?: 'sm' | 'md' | 'lg'

// Shows error styling; requires touched=true
error?: string

touched?: boolean

// Help text shown below when no error is active
help?: string

disabled?: boolean

// Hides the label text visually
hideLabel?: boolean

// Layout direction of label and toggle
alignment?: 'row' | 'column' | 'center'

// Labels shown next to the slider for on/off states (visible when alignment !== 'row')
annotations?: { on: string | ReactNode; off: string | ReactNode }

// Suppresses FormMessage (use in tight layouts)
condensed?: boolean

onChange?: (isOn: boolean) => void
onFocus?: () => void
onBlur?: () => void

// Skeleton state
skeleton?: boolean
```

---

## RangeInput

Styled range slider with a floating value indicator, error state, and help text.

```tsx
import { RangeInput } from 'powder-ui';

// Input name attribute
name: string

// Label text displayed above the slider
label?: string

// Input id
id?: string

// Minimum value (default 0)
min?: number

// Maximum value (default 0) — must be greater than min
max?: number

// Step increment (default 1)
step?: number

// Current value — must be between min and max
value?: number

// Physical size of the thumb in px (default 18)
thumbSize?: number

// Shows a floating bubble above the thumb displaying the current value
indicator?: boolean

// Size of the indicator bubble in px (default 36)
indicatorSize?: number

// Units label shown inside the indicator bubble e.g. '%', 'px'
units?: string

// Shows error styling; requires touched=true
error?: string

touched?: boolean

// Help text shown below when no error is active
help?: string

disabled?: boolean

// Hides the label
hideLabel?: boolean

// Suppresses FormMessage spacer
condensed?: boolean

onChange: (e: ChangeEvent<HTMLInputElement>) => void

// Skeleton state
skeleton?: boolean
```

---

## Accordion

Collapsible content panel. Can be uncontrolled (self-managed) or controlled (external state).

```tsx
import { Accordion } from 'powder-ui';

// Title displayed in the clickable header
title: ReactNode

// Unique identifier — required for controlled mode; auto-generated if omitted
id?: string

// When true, the open state is controlled externally via the open prop
controlled?: boolean

// Open state — only used when controlled=true
open?: boolean

// Card shadow depth
elevation?: ElevationLevel   // 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16

children?: ReactNode

// Called with the accordion's id when the header is clicked (controlled mode only)
onClick?: (id: string) => void
```

---

## Table

Data table with built-in sort state (uncontrolled) or external sort support (controlled). Uses a render-prop pattern for full layout flexibility.

```tsx
import { Table } from 'powder-ui';

// Row data — each row must have a unique id field
rows: Array<{ id: string | number; [key: string]: any }>

// Column definitions
columns: Array<{
  key: string           // matches the key in row data
  header: string        // column header label
  sortable?: boolean    // enables sort click on this column
  width: number         // percentage width e.g. 25 for 25%
  align?: 'left' | 'right' | 'center'
}>

// Render prop — receives sort state and sorted rows
children: (args: {
  rows: TableDataRow[]
  columns: TableDataColumn[]
  sortDirection: string         // 'asc' | 'desc'
  sortColumn: string | null     // currently sorted column key
  onSortColumn: (column: string) => void
}) => ReactNode

// Controlled sort — externally set the active sort column key
sort?: string

// Controlled sort direction — use one of these to set direction
asc?: boolean
desc?: boolean

// Accessible label for the <table> element
'aria-label'?: string

// Theme spacing index for cell padding (default 4)
spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

// Alternates row background colors (default true)
alternate?: boolean

// Renders cell borders between all cells
gridlines?: boolean

// Color of the gridlines (requires gridlines=true)
gridColor?: string

// Row hover background color override
activeColor?: string

// Background color for odd rows (overrides theme default)
odd?: string

// Background color for even rows (overrides theme default)
even?: string

// Enables horizontal scroll on small screens (default true)
scroll?: boolean

// Scrollbar appearance on the scroll container
scrollbar?: { height?: number; color?: string; background?: string; hover?: string }

// Skeleton state
skeleton?: boolean
```

### HeaderCell

Pre-built sortable header cell for use inside Table's render prop.

```tsx
import { HeaderCell } from 'powder-ui';

// The column definition object from the Table columns array
column: TableDataColumn

// Currently sorted column key (from Table's sortColumn)
sortColumn?: string | null

// Current sort direction (from Table's sortDirection)
sortDirection?: string

align?: 'left' | 'center' | 'right'

// Removes padding — use for columns containing icon/action buttons
action?: boolean

children?: ReactNode   // custom header content; falls back to column.header

// Called when a sortable header is clicked — pass Table's onSortColumn
onClick?: () => void
```

---

## Dialog

Modal dialog with focus trapping, Escape key close, backdrop click close, and optional confirm/cancel footer.

```tsx
import { Dialog } from 'powder-ui';

children: ReactNode

// Controls visibility — toggling to false plays the close animation
show?: boolean

// Shows the confirm/cancel footer (default true)
footer?: boolean

// Intent color applied to the confirm button
intent?: 'success' | 'danger' | 'warning' | 'none'

// aria-label for the dialog container (default 'dialog')
label?: string

// aria-labelledby — point to the id of a heading inside the dialog
labelledBy?: string

// Icon displayed inside the confirm button
confirmIcon?: ReactNode

// Confirm button label (default 'Confirm')
confirmText?: string

// Cancel button label (default 'Cancel')
cancelText?: string

// Called when the dialog should close (backdrop click, Escape, or close button)
onClose?: () => void

// Called when the cancel button is clicked (in addition to onClose)
onCancel?: () => void

// Called when the confirm button is clicked
onConfirm?: () => void
```

---

## Sidesheet

Slide-in panel from the right edge with focus trapping and Escape key close.

```tsx
import { Sidesheet } from 'powder-ui';

children?: ReactNode

// Controls visibility — toggling to false plays the slide-out animation
show?: boolean

// Custom close icon element (defaults to an X icon)
closeIcon?: ReactNode

// Optional back button rendered in the top-left corner
backButton?: ReactNode

// Enables focus trap inside the sidesheet (default behaviour via Overlay)
trapFocus?: boolean

// Called when the panel should close (close button, backdrop click, or Escape)
onClose?: () => void
```

---

## Overlay

Low-level backdrop and focus-trap container. Dialog and Sidesheet are built on this. Use directly only when building custom overlay patterns.

```tsx
import { Overlay } from 'powder-ui';

// Controls visibility
show?: boolean

// Prevents body scroll while the overlay is open
preventScroll?: boolean

// Called when backdrop is clicked or Escape is pressed
onClose?: () => void

// Render prop — receives animation state for driving child animations
children?: (props: {
  state: 'opened' | 'closing' | 'closed'
  setState: Dispatch<SetStateAction<OverlayState>>
}) => JSX.Element
```

---

## Alert

Individual alert card. Intended to be used via `useAlertManager` rather than rendered directly.

```tsx
// AlertData shape — pass to useAlertManager's addAlert
type AlertData = {
  id: string            // unique identifier
  title: string         // bold heading text
  content: string       // body text below the heading
  duration?: number     // auto-dismiss delay in ms
  type?: 'primary' | 'accent' | 'success' | 'warning' | 'danger'
         | 'neutral' | 'foreground' | 'grey' | 'purple' | 'background'
  icon?: ReactNode      // icon rendered beside the title
}
```

### useAlertManager hook

```tsx
import { useAlertManager } from 'powder-ui';

const { alerts, addAlert, removeAlert } = useAlertManager();

// alerts   — array of active AlertData objects; render these with <Alert>
// addAlert — call with an AlertData object to show a new alert
// removeAlert — call with an alert id to dismiss early
```

---

## Skeleton

Loading placeholder shape. Supports box and circle types with multiple animation styles.

```tsx
import { Skeleton } from 'powder-ui';

// Shape type
type?: 'box' | 'circle'

// Animation style (falls back to theme default if not set)
animation?: 'wave' | 'pulse' | 'shimmer' | 'none'

// Width in px (box type); omit when fluid=true
width?: number

// Height in px (box type)
height?: number

// Stretches width to 100% of container (box type)
fluid?: boolean

// Diameter in px (circle type)
size?: number

// Outer margin [top, right, bottom, left] in px
margin?: [number, number, number, number]

// Override the primary animation color
primaryColor?: string

// Override the secondary animation color
secondaryColor?: string
```

Most components also accept `skeleton` as a prop to switch into their own skeleton state:

```tsx
<Button skeleton width={120} height={34} />
<TextInput skeleton name="x" label="x" value="" />
<Table skeleton rows={[]} columns={[]} children={() => null} />
// etc.
```

---

## Image

Lazy-loading image with progressive blur-up reveal and object-fit control.

```tsx
import { Image } from 'powder-ui';

// Image source object
src: {
  main: string       // full-resolution image URL
  preview?: string   // optional low-res placeholder shown while loading
}

// Height in px (required)
height: number

// Width in px — use fluid=true instead for responsive images
width?: number

// Stretches image width to 100% of container
fluid?: boolean

// CSS object-fit applied to the image
fit?: 'fill' | 'cover' | 'contain' | 'scale'

// Horizontal position percentage for object-position (default 50)
xpos?: number

// Vertical position percentage for object-position (default 50)
ypos?: number

// Blur amount applied to the preview image in px
blur?: number

// Background color shown behind the image while loading
backgroundColor?: string

// Skeleton state
skeleton?: boolean
// (skeleton) width: number, height: number

// All standard img HTML attributes pass through (alt, loading, etc.)
```

---

## Palette

Dev/documentation-only component. Renders all theme palette swatches in a scrollable view. No props.

```tsx
import { Palette } from 'powder-ui';
<Palette />
```
