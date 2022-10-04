# RuskelUI
[![NPM Version](https://img.shields.io/npm/v/ruskelui.svg?branch=master)](https://www.npmjs.com/package/ruskelui) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/ruskelui)](https://bundlephobia.com/result?p=ruskelui) [![npm](https://img.shields.io/npm/dt/ruskelui?label=installs)](https://www.npmjs.com/package/ruskelui) [![License](https://img.shields.io/npm/l/ruskelui.svg)](https://github.com/0xreeko/ruskelui/blob/master/LICENSE) ![Top Language](https://img.shields.io/github/languages/top/0xreeko/ruskelui) ![Languages Count](https://img.shields.io/github/languages/count/0xreeko/ruskelui) [![Twitter Invite](https://img.shields.io/twitter/follow/0xreeko?style=social)](https://twitter.com/intent/follow?screen_name=0xreeko)

## 🧩 Table of Contents (Not up to date!)
- [🕵️ About RuskelUI](#about-ruskelui)
- [⭐️ Star Us](#star-us)
- [⬇ Installation](#installation)
- [🛠 Getting Started](#getting-started)
- [⚡️ Quick Start](#quick-start)
- [🧰 Components](#components)
    - [🪗 Accordion](#accordion)
    - [👤 Avatar](#avatar)
    - [🍞 Breadcrumbs](#breadcrumbs)
    - [⌨️ Button](#button)
    - [🃏 Card](#card)
    - [✅ Checkbox](#checkbox)
    - [⬇️ Dropdown](#dropdown)
    - [💬 Input](#input)
    - [🎹 KBD](#kbd)
    - [⏲ Loader](#loader)
    - [🪟 Modal](#modal)
    - [📑 Pagination](#pagination)
    - [💊 Pill](#pill)
    - [🍫 Progress](#progress)
    - [📻 Radio](#radio)
    - [🗃 Select](#select)
    - [🥂 Toast](#toast)
    - [💡 Toggle](#toggle)
    - [🛠 Tooltip](#tooltip)
- [📃 License](#license)

### About RuskelUI
RuskeUI is a TailwindCSS-based design system for rapid Web3 development in NextJS/React.

I wanted to create my own UI vault that would be the official UI set of primitives for all of the Web3 related initiatives that I'm working on and plan to work on.

It follows what I deem as `Neonic Nerophism`, which combines three UI trends together - neonic colours, dark mode and glassmorphism, hence the name. The goal for this project is to rapidly create aesthetically beautiful interfaces, getting you from concept to production very quickly in the ReactJs ecosystem.

Check out RuskelUI via [Storybook](https://0xreeko.github.io/ruskelui) or try out the [RuskelUI Playground](https://stackblitz.com/edit/react-ts-fd9u5q?file=App.tsx) in StackBlitz.

### Star Us!
If this project helps/has helped you build your Web3 projects faster, star us - every little star helps!



### Getting Started
To get started with RuskelUI, you need to [TailwindCSS](https://tailwindcss.com/docs/installation/framework-guides) installed in your existing project, if not, install the foll 
}
```

#### Input
The Input element allows data input.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

**Code Example**
```jsx
import { RuiInput } from 'ruskelui'

const App = () => {
    return (
        <RuiInput color >
    )
    
}
```

#### KBD
The KBD element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
color | color | Sets the color of the inner element inside the loader | string
name | name | Name that's attached to ID HTML attribute | string

**Code Example**
```jsx
import { RuiKBD } from 'ruskelui'

const App = () => {
    return (
        <RuiKBD color="teal">enter</RuiKBD>
    )
    
}
```

#### Loader
The Loader element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
color | color | Sets the color of the inner element inside the loader | string
name | name | Name that's attached to ID HTML attribute | string

**Code Example**
```jsx
import { RuiLoader } from 'ruskelui'

const App = () => {
    return (
        <RuiLoader color="peridot"/>
    )
}
```

#### Modal
The Modal element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

**Code Example**
```jsx
import { RuiModal } from 'ruskelui'

const App = () => {
    const reffer = useRef<LegacyRef<HTMLDialogElement> | undefined>(null)
    // @ts-ignore
    const openModal = () => reffer.current.show()
    // @ts-ignore
    const closeModal = () => reffer.current.close()
    return (
        <>
            <button onClick={() => openModal()}>open Modal</button>
            <RuiModal pointer={reffer} {...args}>
                <h1>Hi this is a modal!</h1>
                <p>Giving you the room to customise the functionality around this modal, since it's extending the native Dialog element 👾</p>
                <button onClick={() => closeModal()}>close Modal</button>
            </RuiModal>
        </>
    )
}
```

#### Pill
The Pill element displays information or status about a process.

**Props**

*We recommend to use 12 by 12 (pixels) SVG icon to ensure that it fits within the sizing of the pill. If using Tailwind, set the width and height by using "w-3 h-3" in the class/className attribute.

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
|label | label | Useful for displaying statuses | string | undefined
|iconBefore | icon-before | Default version - sets the icon to appear before the label | boolean | true
|iconAfter | icon-after | Sets the icon to appear after the label | boolean | undefined
|color | color | Sets the global color of the pill | ruby | undefined

**Code Example**
```jsx
import { RuiPill } from 'ruskelui';

const App = () => {
    return (
        <RuiPill color={"ruby"} label="Processing" />
    )
}
```

#### Progress
The ProgressBar element visually shows the % of the meter filled.

**Props**


| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
|color | color | Sets BG color as RuskelUI's neonic colours or Tailwind's native colours - only for single colour styling | colorType | "amethyst"
|name | name | Name that's attached to Title & ID of element | string
|isGradient | isGradient | Enables for dual gradients | boolean | false
|startColour | startColour | Starting colour of dual gradient | colorType | "blue"
|endColour | endColour | Ending colour of dual gradient | colorType | "amethyst"
|percentage | percentage | Sets the percentage value for the progress bar and changes how much is filled | number

**Code Example**
```jsx
import { RuiProgress } from 'ruskelui'

const App = () => {
    return (
        <RuiProgress variant={"bar"} percentage={53} color={"teal"}>
        <RuiProgress variant={"donut"} percentage={53} color={"indigo"}>
    )
}
```

#### Radio
The Radio element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

**Code Example**
```jsx
import { RuiRadio } from 'ruskelui'

const App = () => {
    return (
        <RuiRadio variant={"base"} color="sunstone" label={'Option One'}>
        <RuiRadio variant={"base"} color="sunstone" label={'Option Two'}>
        <RuiRadio variant={"base"} color="sunstone" label={'Option Three'}>
        <RuiRadio variant={"base"} color="sunstone" label={'Option Four'}>
    )
}
```

#### Select
The Select element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

**Code Example**
```jsx
import { RuiSelect } from 'ruskelui'

const App = () => {
    return (
        <RuiSelect>
            <RuiSelect.Item color='amethyst' value='Polygon'/>
            <RuiSelect.Item color='green' value='Holo'/>
            <RuiSelect.Item color='blue' value='Fantom'/>
            <RuiSelect.Item color='pink' value='Kadena'/>
            <RuiSelect.Item color='red' value='Tron'/>
            <RuiSelect.Item color='amber' value='Bitcoin'/>
            <RuiSelect.Item color='yellow' value='USDC'/>
        </RuiSelect>
    )
}
```

#### Toast
The Toast element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
color | color | Sets the colour from RuskelUI's neonic colours or Tailwind's native colours | colorType | "peridot"
title | title | Sets the title of the toast component | string
content | content | Sets the content of the toast to convey information | ReactNode


#### Toggle
The Toggle element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
color | color | Sets BG color as RuskelUI's neonic colours or Tailwind's native colours | string
name | name | Sets the accesibility name | string

**Code Example**
```jsx
import { RuiToggle } from 'ruskelui'

const App = () => {
    return (
        <RuiToggle color="azure">
    )
}
```

#### Tooltip
The Tooltip element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
children | children |  | ReactNode
name | name | Provides a name for the tooltip | string
message | message | Sets the message to display when tooltip is shown | string
position | position | Sets the position from which the tooltip should be shown | posType | "t"

**Code Example**
```jsx
import { RuiTooltip } from 'ruskelui';

const App = () => {
    let _message = "Fire reaction"
    return (
        <RuiTooltip message={_message} direction={"top"}>
            <button>🔥</button>
        </RuiTooltip>
    )
}
```

## License
This project is under the [MIT](https://github.com/0xreeko/ruskelui/blob/master/LICENSE) License - view the [LICENSE](https://github.com/0xreeko/ruskelui/blob/master/LICENSE) file for more details.