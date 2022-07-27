import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, useState } from 'react'
import { RuiButton } from './Button';


export interface Props extends HTMLAttributes<HTMLElement> {
    label: string
    id: string
    route: string
}

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
}

export const DropdownItem = ({ route, id, label }: Props) => {
    return (
        <a href={`${route}`} className="block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id={`menu-item-${id}`}>{label}</a>
    )
}

export const DropdownMenu = ({ children, className }: {children: ReactNode, className: string} ) => {
    return (
        <div className={clsx(`origin-center absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-russian-600 text-sylver-100 ring-1 ring-black ring-opacity-5 focus:outline-none`, `${className}`)} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            <div className={clsx(`py-1`)} role="none">
                {children}
            </div>
        </div>

    )
}


export const RuiDropdown = ({ label = "Options" }: Props) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="relative inline-block text-left">
            <div onClick={() => setHidden(!hidden)}>
                <RuiButton label={`${label}`} color='russian' size='small' />
            </div>

            <DropdownMenu className={`${hidden ? `transition ease-in duration-75 transform opacity-0 scale-95` : `transition ease-out duration-300 transform opacity-100 scale-100`}`}>
                {
                    [{ route: "#", label: "Account Settings" }, { route: "#", label: "Support" }, { route: "#", label: "License" }].map(({ label, route }, idx) => (
                        <DropdownItem route={route} id={`${idx}`} label={label} />
                    ))
                }
                <form method="POST" action="#" role="none">
                    <button type="submit" className="block w-full px-4 py-2 text-sm text-left text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                </form>
            </DropdownMenu>
        </div>
    )
}

// RuiDropdown.Button = RuiDropdownButton

export default RuiDropdown