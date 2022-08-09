import React, { HTMLAttributes, ReactNode } from 'react'
import { colorType } from './utils';
// @ts-ignore
import styles from './modules/Dropdown.module.css'

export interface RootProps extends HTMLAttributes<HTMLElement> {
    isSub?: boolean // -> this switches the classes depending on whether this prop is true
    children: ReactNode // -> this allows for elements to be wrapped around
    leftIcon?: ReactNode // -> this allows for an icon to the left of a menuItem
    rightIcon?: ReactNode // -> this allows for an icon to the right of a menuItem
    menu?: string // -> this sets the name for each menu
    id?: string // -> this sets the with menu ID with mapping idx
    route?: string // -> this sets the url for the menuItem
    color?: colorType // -> this sets the hover color for the menuItem
}

const colorVar: { [key in colorType]: string } = {
    amber: "hover:bg-amber-400/20 hover:text-amber-400 ",
    amethyst: "hover:bg-amethyst-400/20 hover:text-amethyst-400 ",
    aqua: "hover:bg-aqua-400/20 hover:text-aqua-400 ",
    azure: "hover:bg-azure-400/20 hover:text-azure-400 ",
    blue: "hover:bg-blue-400/20 hover:text-blue-400 ",
    cyan: "hover:bg-cyan-400/20 hover:text-cyan-400 ",
    emerald: "hover:bg-emerald-400/20 hover:text-emerald-400 ",
    fuchsia: "hover:bg-fuchsia-400/20 hover:text-fuchsia-400 ",
    green: "hover:bg-green-400/20 hover:text-green-400 ",
    indigo: "hover:bg-indigo-400/20 hover:text-indigo-400 ",
    jade: "hover:bg-jade-400/20 hover:text-jade-400 ",
    jasper: "hover:bg-jasper-400/20 hover:text-jasper-400 ",
    kunzite: "hover:bg-kunzite-400/20 hover:text-kunzite-400 ",
    lime: "hover:bg-lime-400/20 hover:text-lime-400 ",
    moonstone: "hover:bg-moonstone-400/20 hover:text-moonstone-400 ",
    orange: "hover:bg-orange-400/20 hover:text-orange-400 ",
    peridot: "hover:bg-peridot-400/20 hover:text-peridot-400 ",
    pink: "hover:bg-pink-400/20 hover:text-pink-400 ",
    purple: "hover:bg-purple-400/20 hover:text-purple-400 ",
    red: "hover:bg-red-400/20 hover:text-red-400 ",
    rose: "hover:bg-rose-400/20 hover:text-rose-400 ",
    ruby: "hover:bg-ruby-400/20 hover:text-ruby-400 ",
    russian: "hover:bg-russian-400/20 hover:text-russian-400 ",
    scarlet: "hover:bg-scarlet-400/20 hover:text-scarlet-400 ",
    stratos: "hover:bg-stratos-400/20 hover:text-stratos-400 ",
    sunstone: "hover:bg-sunstone-400/20 hover:text-sunstone-400 ",
    sylver: "hover:bg-sylver-400/20 hover:text-sylver-400 ",
    teal: "hover:bg-teal-400/20 hover:text-teal-400 ",
    violet: "hover:bg-violet-400/20 hover:text-violet-400 ",
    yellow: "hover:bg-yellow-400/20 hover:text-yellow-400 "
}

// Wrapper
const DropdownWrap = ({ children }: RootProps) => {
    return (
        <div className={`${styles.wrapper} max-w-fit relative group`}>
            {children}
        </div>
    )
}

// Invoker
const DropdownInvoker = ({ children, menu, isSub }: RootProps) => {
    return (
        // outline-none focus:outline-none duration-300 hover:bg-russian-600/20 flex items-center ${isSub ? "w-full text-left" : "px-4 py-2.5 rounded-lg"}
        <button aria-haspopup="true" aria-controls={isSub ? menu : 'menu'} tabIndex={0}>
            {children}
        </button>
    )
}

// Menu
const DropdownMenu = ({ children, className, menu, isSub }: RootProps) => {
    return (
        <ul id={isSub ? menu : 'menu'} aria-hidden="true" className={`w-56 shadow-lg bg-gray-800 text-sylver-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none transform duration-300 ease-in-out absolute ${isSub ? "bg-gray-800 absolute top-0 right-0 transition duration-150 ease-in-out origin-left" : `bg-gray-800 -translate-y-3 scale-0 left-0 origin-top-left group-hover:scale-100 group-hover:translate-y-0 mt-6`} ${className}`}>
            {children}
        </ul>
    )
}

// Menu Items
const DropdownItem = ({ children, leftIcon, rightIcon, isSub, color ="ruby"}: RootProps) => {
    return (
        <a className={`${colorVar[color]} p-2.5 font-semibold inline-flex rounded-md items-center w-full text-sm ${isSub ? "" : "relative"}`} role="menuitem">
            {leftIcon && <div className='inline-flex items-center w-4 h-4 mr-2 left'>{leftIcon}</div>}
            {children}
            {rightIcon && <span className='inline-flex items-center w-4 h-4 ml-auto transition duration-300 ease-in-out right'>{rightIcon}</span>}
        </a>
    )
}

export const RuiDropdown = ({ children }: RootProps) => {
    return (
        <div className="home">
            {children}
        </div>
    )
}

RuiDropdown.Wrapper = DropdownWrap
RuiDropdown.Button = DropdownInvoker
RuiDropdown.Menu = DropdownMenu
RuiDropdown.Item = DropdownItem

export default RuiDropdown