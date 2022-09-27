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

### Installation
Run the following to install RuskelUI's Tailwind config file - the "-p" tag is optional and creates a PostCSS file: 
```bash
npx ruskelui -p
``` 

Run the following to install the RuskelUI package:
```bash 
npm i ruskelui
```
OR
```bash
yarn add ruskelui
```

### Quick Start

### Components

#### Accordion
The Accordion element displays information from a user in the form of an image if available, and displaying the initials of the user if the user's image is not available.

**Props**


| Property    | Description | Type     | Default     |
| ----------- | ----------- | -------- | ----------- |
data | Array that takes objects with `title` and `content` as keys | `AccordionData[]` | 
fullWidth | Make the accordion full available width or not | boolean | false
color | label | `color` | 

#### Avatar
The Avatar element displays information from a user in the form of an image if available, and displaying the initials of the user if the user's image is not available.


**Props**

| Property    | Description | Type     | Default     |
| ----------- | ----------- | -------- | ----------- |
size | abac | `size` | 6
src | abac | string | 
alt | abac | string | 
badgeColor | abac | `color` | undefined
variant | abac | `variant` | base

#### Breadcrumbs
The Breadcrumbs element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
color | elem-name | `color` | ruby
route | floating-label | string |
fullWidth | label | boolean | 
divider | placeholder | ReactNode | 
children | placeholder | ReactNode | 
variant | placeholder | `variant` | 

#### Button
The Button element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
children | elem-name | ReactNode | string
svg | floating-label | ReactNode | string
startColor | label | `color` | string
endColor | placeholder | `color` | string
color | placeholder | `color` | string
size | placeholder | `size` | string
direction | placeholder | `direction` | string
isDisabled | placeholder | boolean | string
variant | placeholder | `variant` | string

#### Card
The Card element displays information.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

#### Checkbox
The Checkbox element displays checked elements.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
children | color | ReactNode | 
color | label-after | `color` | ruby
variant| label-before | `variant` |
strikeThrough | name | abac | false 
defaultChecked | name | boolean | false 

#### Dropdown
The Dropdown element displays options to select elements.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
isSub | label | boolean | string
children | label | ReactNode | string
leftIcon | label | ReactNode | string
rightIcon | label | ReactNode | string
menu | label | string | string
idx | label | string | string
route | label | string | string
color | label | `color` |

#### Input
The Input element allows data input.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string


#### Loader
The Loader element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
color | color | Sets the color of the inner element inside the loader | string
name | name | Name that's attached to ID HTML attribute | string

#### Modal
The Modal element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

#### Pill
The Pill element displays information or status about a process.

**Props**

*We recommend to use 12 by 12 (pixels) SVG icon to ensure that it fits within the sizing of the pill. If using Tailwind, set the width and height by using "w-3 h-3" in the class/className attribute.

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
|label | label | Useful for displaying statuses | string | undefined
|iconBefore | icon-before | Default version - sets the icon to appear before the label | boolean | true
|iconAfter | icon-after | Sets the icon to appear after the label | boolean | undefined
|color | color | Sets the global color of the pill | string | undefined

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

#### Radio
The Radio element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

#### Select
The Select element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
elemName | elem-name | abac | string
floatingLabel | floating-label | abac | string
label | label | abac | string
placeholder | placeholder | abac | string

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

#### Tooltip
The Tooltip element.

**Props**

| Property     | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- |
children | children |  | ReactNode
name | name | Provides a name for the tooltip | string
message | message | Sets the message to display when tooltip is shown | string
position | position | Sets the position from which the tooltip should be shown | posType | "t"

## License
This project is under the [MIT](https://github.com/0xreeko/ruskelui/blob/master/LICENSE) License - view the [LICENSE](https://github.com/0xreeko/ruskelui/blob/master/LICENSE) file for more details.