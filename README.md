import {Meta} from '@storybook/addon-docs'

<Meta title="@RuskelUI/About RuskelUI" />

# RuskelUI
RuskelUI is set of UI primitives dedicated for Web3 built with React and TailwindCSS - components that you can use with any React framework!

## 🕵️ About RuskelUI
RuskelUI came about to be due to the wanting to create my own UI vault that would be oriented towards Web3 development. This is the official UI set of primitives for all of the Web3 initiatives (7+) that I'm working on, which I hope you keep an eye out for, as it may help you ship robust Web3 platforms that use - phew, nearly gave it away!😅

It follows what I deem as `Neonic Nerophism`, which combines three UI trends together - neon colours, dark mode and glassmorphism, hence the name. The goal for this is to create aesthetically beautiful interfaces with RuskelUI primitives that facilitates faster UI developement, getting you from concept to production very quickly.

## ⭐️ Star Us!
If this project helps/has helped you build your Web3 projects faster, star us - every little star helps!


## 🧩 Table Of Components
- [⬇ Installation: `<installation/>`](#installation)
- [👤 Avatar: `<rui-avatar/>`](#rui-avatar)
- [⌨️ Button: `<rui-button/>`](#rui-button)
- [🃏 Card: `<rui-card/>`](#rui-card)
- [✅ Checkbox: `<rui-checkbox/>`](#rui-checkbox)
- [💬 Input: `<rui-input/>`](#rui-input)
- [⏲ Loader: `<rui-loader/>`](#rui-loader)
- [🪟 Modal: `<rui-modal/>`](#rui-modal)
- [💊 Pill: `<rui-pill/>`](#rui-pill)
- [📻 Radio: `<rui-radio/>`](#rui-radio)
- [🗃 Select: `<rui-select/>`](#rui-select)
- [🥂 Toast: `<rui-toast/>`](#rui-toast)
- [💡 Toggle: `<rui-toggle/>`](#rui-toggle)
- [🛠 Tooltip: `<rui-tooltip/>`](#rui-tooltip)


### installation
This is the process to install RuskelUI components. TBC.


### rui-avatar
The Avatar element displays information from a user in the form of an image if available, and displaying the initials of the user if the user's image is not available.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

### rui-button
The Button element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

### rui-card
The Card element displays information.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

### rui-checkbox
The Checkbox element displays checked elements.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
color | color | abac | string
labelAfter | label-after | abac | string
labelBefore| label-before | abac | string
name | name | abac | string

### rui-cryptologo
The CryptoLogo element displays SVG's icons of cryptocurrency.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
szie | size | Sets the size of the crypto logo | sizeType | 6
chain | chain | Sets the cryptocurrency to display | cryptoType | "xrp"

### rui-dropdown
The Dropdown element displays options to select elements.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
label | label | abac | string

### rui-input
The Input element allows data input.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string


### rui-loader
The Loader element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
color | color | Sets the color of the inner element inside the loader | string
name | name | Name that's attached to ID HTML attribute | string

### rui-modal
The Modal element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

### rui-pill
The Pill element displays information or status about a process.

#### Props
*We recommend to use 12 by 12 (pixels) SVG icon to ensure that it fits within the sizing of the pill. If using Tailwind, set the width and height by using "w-3 h-3" in the class/className attribute.

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
|label | label | Useful for displaying statuses | string | undefined
|iconBefore | icon-before | Default version - sets the icon to appear before the label | boolean | true
|iconAfter | icon-after | Sets the icon to appear after the label | boolean | undefined
|color | color | Sets the global color of the pill | string | undefined

### rui-progressbar
The ProgressBar element visually shows the % of the meter filled.

#### Props

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
|color | color | Sets BG color as RuskelUI's neonic colours or Tailwind's native colours - only for single colour styling | colorType | "amethyst"
|name | name | Name that's attached to Title & ID of element | string
|isGradient | isGradient | Enables for dual gradients | boolean | false
|startColour | startColour | Starting colour of dual gradient | colorType | "blue"
|endColour | endColour | Ending colour of dual gradient | colorType | "amethyst"
|percentage | percentage | Sets the percentage value for the progress bar and changes how much is filled | number

### rui-progressdonut
The ProgressBar element visually shows the % of the meter filled.

#### Props

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
|color | color | Sets BG color as RuskelUI's neonic colours or Tailwind's native colours - only for single colour styling | colorType | "ruby"
|name | name | Name that's attached to Title & ID of ProgressDonut | string
|percentage | percentage | Sets the percentage value for the progress bar and changes how much is filled | number | 0

### rui-radio
The Radio element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

### rui-select
The Select element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string


### rui-swap
The Select element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
offIcon | | Provides slot for a string, HTML element or SVGs | ReactNode
onIcon | | Provides slot for a string, HTML element or SVGs | ReactNode
color | color | Sets the colour from RuskelUI's neonic colours or Tailwind's native colours | colorType
name | name | Provides a name for the Swap component | string

### rui-toast
The Toast element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
color | color | Sets the colour from RuskelUI's neonic colours or Tailwind's native colours | colorType | "peridot"
title | title | Sets the title of the toast component | string
content | content | Sets the content of the toast to convey information | ReactNode

### rui-toggle
The Toggle element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
color | color | Sets BG color as RuskelUI's neonic colours or Tailwind's native colours | string
name | name | Sets the accesibility name | string

### rui-tooltip
The Tooltip element.

#### Props
| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
children | children |  | ReactNode
name | name | Provides a name for the tooltip | string
message | message | Sets the message to display when tooltip is shown | string
position | position | Sets the position from which the tooltip should be shown | posType | "t"