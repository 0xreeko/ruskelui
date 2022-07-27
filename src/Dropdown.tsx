import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, useState } from 'react'


export interface Props extends HTMLAttributes<HTMLElement> {
    label?: ReactNode
    id?: string
    route?: string
    children?: ReactNode
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
}

export const DropdownItem = ({ route, id, children, leftIcon, rightIcon }: Props) => {
    return (
        <a href={route ? `${route}` : ''} className="inline-flex items-center w-full px-2 py-2 text-sm rounded-md hover:bg-russian-400/20" role="menuitem" tabIndex={-1} id={id ? `menu-item-${id}` : ''}>
            {leftIcon && <span className='inline-flex items-center w-4 h-4 mr-2'>{leftIcon}</span>}
            {children}
            {rightIcon && <span className='inline-flex items-center w-4 h-4 ml-auto'>{rightIcon}</span>}
            </a>
    )
}

export const DropdownMenu = ({ children, className }: {children: ReactNode, className?: string} ) => {
    return (
        <div className={clsx(`origin-center absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-russian-600 text-sylver-100 ring-1 ring-black ring-opacity-5 focus:outline-none`, `${className}`)} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className={clsx(`py-2.5 px-2.5`)} role="none">
                {children}
            </div>
        </div>

    )
}


export const RuiDropdown = ({ label = "Options", children }: Props) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="relative inline-block text-left">
                <button onClick={() => setHidden(!hidden)} className='w-14 h-8 flex items-center justify-center px-4 py-2.5 rounded-lg appearance-none min-w-fit text-d-copy duration-300 hover:bg-russian-600/20 text-sylver-800'>
                    {label}
                </button>

            <DropdownMenu className={`${hidden ? `transition ease-in duration-75 transform opacity-0 scale-95` : `transition ease-out duration-300 transform opacity-100 scale-100`}`}>
                {children}
            </DropdownMenu>
        </div>
    )
}

// RuiDropdown.Button = RuiDropdownButton
RuiDropdown.Menu = DropdownMenu
RuiDropdown.Item = DropdownItem

export default RuiDropdown