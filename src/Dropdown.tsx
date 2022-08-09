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
    amber: "hover:text-amber-600 ",
    amethyst: "hover:text-amethyst-600 ",
    aqua: "hover:text-aqua-600 ",
    azure: "hover:text-azure-600 ",
    blue: "hover:text-blue-600 ",
    cyan: "hover:text-cyan-600 ",
    emerald: "hover:text-emerald-600 ",
    fuchsia: "hover:text-fuchsia-600 ",
    green: "hover:text-green-600 ",
    indigo: "hover:text-indigo-600 ",
    jade: "hover:text-jade-600 ",
    jasper: "hover:text-jasper-600 ",
    kunzite: "hover:text-kunzite-600 ",
    lime: "hover:text-lime-600 ",
    moonstone: "hover:text-moonstone-600 ",
    orange: "hover:text-orange-600 ",
    peridot: "hover:text-peridot-600 ",
    pink: "hover:text-pink-600 ",
    purple: "hover:text-purple-600 ",
    red: "hover:text-red-600 ",
    rose: "hover:text-rose-600 ",
    ruby: "hover:text-ruby-600 ",
    russian: "hover:text-russian-600 ",
    scarlet: "hover:text-scarlet-600 ",
    stratos: "hover:text-stratos-600 ",
    sunstone: "hover:text-sunstone-600 ",
    sylver: "hover:text-sylver-600 ",
    teal: "hover:text-teal-600 ",
    violet: "hover:text-violet-600 ",
    yellow: "hover:text-yellow-600 "
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
// make it so that one can select fromRight or fromLeft, and apply the needed styling
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
        <a className={`${colorVar[color]} p-2.5 inline-flex rounded-md items-center w-full text-sm ${isSub ? "" : "relative"}`} role="menuitem">
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