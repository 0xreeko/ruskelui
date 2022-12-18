import React, { LegacyRef, ReactNode, useContext, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { hoverColor, position, positioning, RuiDropdownProps } from './Dropdown'
import { DropdownContext } from './DropdownContext'
import "./Dropdown.css"

const DropdownItem = ({ children, navToDrop, leftIcon, rightIcon, color = "rosian", disabled  }: RuiDropdownProps) => {
    const { setActiveDrop } = useContext(DropdownContext)
    return (
        <li onClick={() => !disabled && navToDrop && setActiveDrop?.(navToDrop)} role="menuitem" className={`p-2.5 ${disabled !== true ? hoverColor[color] : "text-neropside/40 dark:text-onyx/40 pointer-events-none select-none"} hover:text-obsidian-100 cursor-pointer flex items-center `} >
            {leftIcon && <div className='inline-flex items-center w-4 h-4 mr-2'>{leftIcon}</div>}
            {children}
            {rightIcon && <span className='inline-flex items-center w-4 h-4 ml-auto'>{rightIcon}</span>}
        </li>
    )
}

const DropdownMenu = ({ children, label, variant }: { children: ReactNode, label: string, variant: "main" | "secondary" }) => {
    const { activeDrop, calcHeight } = useContext(DropdownContext)
    return (
        <CSSTransition
            in={activeDrop === label}
            timeout={300}
            classNames={variant === 'main' ? `ruiMenuPrimary` : `ruiMenuSecondary`}
            unmountOnExit
            onEnter={calcHeight}>
            <div className="ruiMenu">
                {children}
            </div>
        </CSSTransition>
    )
}

const DropdownPortal = ({ children }: { children: ReactNode }) => {
    const {menuHeight, position} = useContext(DropdownContext)
    return (
        <ul className={`absolute overflow-hidden sm:text-sm rounded-lg backdrop-blur-sm w-44 border ${positioning[position]} border-obsidian-300 bg-onyx/80 text-neropside dark:border-obsidian-800 dark:bg-neropside/80 dark:text-obsidian-100`} style={{ height: menuHeight ?? 'fit-content' }}>
            {children}
        </ul>
    )
}

export const RuiDropdown = ({ children, pointer, position = "bottom" }: { children: ReactNode, pointer?: LegacyRef<HTMLDivElement> | undefined, position: position}) => {
    const [activeDrop, setActiveDrop] = useState<string>('main')
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
    const calcHeight = (el: any) => {
        const height = el.offsetHeight;
        setMenuHeight(height)
    }
    return (
        <DropdownContext.Provider value={{ activeDrop, setActiveDrop, calcHeight, menuHeight, position }}>
            <div className={`relative inline-flex`} ref={pointer}>
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

RuiDropdown.Portal = DropdownPortal
RuiDropdown.Menu = DropdownMenu
RuiDropdown.Item = DropdownItem

export default RuiDropdown