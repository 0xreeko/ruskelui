import React from 'react'
import { RuiDropdownProps, hoverColor } from './Dropdown'
// @ts-ignore
import styles from './Dropdown.module.css'

// Wrapper
const DropdownWrap = ({ children }: RuiDropdownProps) => {
    return (
        <div className={`${styles.wrapper} max-w-fit relative group`}>
            {children}
        </div>
    )
}

// Invoker
const DropdownInvoker = ({ children, menu, isSub }: RuiDropdownProps) => {
    return (
        // outline-none focus:outline-none duration-300 hover:bg-russian-600/20 flex items-center ${isSub ? "w-full text-left" : "px-4 py-2.5 rounded-lg"}
        <button aria-haspopup="true" aria-controls={isSub ? menu : 'menu'} tabIndex={0}>
            {children}
        </button>
    )
}

// Menu
const DropdownMenu = ({ children, className, menu, isSub }: RuiDropdownProps) => {
    return (
        <ul id={isSub ? menu : 'menu'} aria-hidden="true" className={`w-56 shadow-lg bg-gray-800 text-sylver-100 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none transform duration-300 ease-in-out absolute ${isSub ? "bg-gray-800 absolute top-0 right-0 transition duration-150 ease-in-out origin-left" : `bg-gray-800 -translate-y-3 scale-0 left-0 origin-top-left group-hover:scale-100 group-hover:translate-y-0 mt-6`} ${className}`}>
            {children}
        </ul>
    )
}

// Menu Items
const DropdownItem = ({ children, leftIcon, rightIcon, isSub, color ="ruby"}: RuiDropdownProps) => {
    return (
        <a className={`${hoverColor[color]} p-2.5 font-semibold inline-flex rounded-md items-center w-full text-sm ${isSub ? "" : "relative"}`} role="menuitem">
            {leftIcon && <div className='inline-flex items-center w-4 h-4 mr-2 left'>{leftIcon}</div>}
            {children}
            {rightIcon && <span className='inline-flex items-center w-4 h-4 ml-auto transition duration-300 ease-in-out right'>{rightIcon}</span>}
        </a>
    )
}

export const RuiDropdown = ({ children }: RuiDropdownProps) => {
    return (
        <div className="">
            {children}
        </div>
    )
}

RuiDropdown.Wrapper = DropdownWrap
RuiDropdown.Button = DropdownInvoker
RuiDropdown.Menu = DropdownMenu
RuiDropdown.Item = DropdownItem

export default RuiDropdown