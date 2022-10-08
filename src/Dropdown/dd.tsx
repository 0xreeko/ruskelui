import React, { LegacyRef, ReactNode, useContext, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { color } from '../types/Generics'
import { hoverColor } from './Dropdown'
import { DropdownContext } from './DropdownContext'
import "./Dropdown.css"

export const DropdownItem = ({ children, navToDrop, leftIcon, rightIcon, color = "ruby" }: { children: ReactNode, navToDrop?: string, leftIcon?: ReactNode, rightIcon?: ReactNode, color: color }) => {
    const { setActiveDrop } = useContext(DropdownContext)
    return (
        <li onClick={() => navToDrop && setActiveDrop?.(navToDrop)} role="menuitem" className={`p-2.5 ${hoverColor[color]} hover:text-sylver-100 cursor-pointer flex items-center`}>
            {leftIcon && <div className='inline-flex items-center w-4 h-4 mr-2'>{leftIcon}</div>}
            {children}
            {rightIcon && <span className='inline-flex items-center w-4 h-4 ml-auto'>{rightIcon}</span>}
        </li>
    )
}

export const DropdownMenu = ({ children, label, variant }: { children: ReactNode, label: string, variant: "main" | "secondary" }) => {
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

export const DropdownPortal = ({ children }: { children: ReactNode }) => {
    const {menuHeight} = useContext(DropdownContext)
    return (
        <ul className="absolute mt-6 overflow-hidden text-xs border border-gray-300 rounded-lg dark:border-gray-800 bg-sylver-400/80 backdrop-blur-sm text-russian-600 dark:bg-russian-600/80 dark:text-sylver-100 w-44" style={{ height: menuHeight ?? 'fit-content' }}>
            {children}
        </ul>
    )
}

export const RicoDropdown = ({ children, pointer, position }: { children: ReactNode, pointer?: LegacyRef<HTMLDivElement> | undefined, position: "start" | "center" | "end"}) => {
    const [activeDrop, setActiveDrop] = useState<string>('main')
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
    const calcHeight = (el: any) => {
        const height = el.offsetHeight;
        setMenuHeight(height)
    }
    return (
        <DropdownContext.Provider value={{ activeDrop, setActiveDrop, calcHeight, menuHeight }}>
            <div className={`relative inline-flex justify-${position}`} ref={pointer}>
                {children}
            </div>
        </DropdownContext.Provider>
    )
}

RicoDropdown.Portal = DropdownPortal
RicoDropdown.Menu = DropdownMenu
RicoDropdown.Item = DropdownItem

export default RicoDropdown