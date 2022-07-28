import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, useState } from 'react'
import { colorType } from './utils';

export interface Props extends HTMLAttributes<HTMLElement> {
    label?: ReactNode | string
    color?: colorType
    id?: string
    route?: string
    children?: ReactNode
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    onClick?: () => string
}

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
}

const colorVar: { [key in colorType]: string } = {
    amber: "text-amber-400 hover:bg-amber-400/20",
    amethyst: "text-amethyst-400 hover:bg-amethyst-400/20",
    aqua: "text-aqua-400 hover:bg-aqua-400/20",
    azure: "text-azure-400 hover:bg-azure-400/20",
    blue: "text-blue-400 hover:bg-blue-400/20",
    cyan: "text-cyan-400 hover:bg-cyan-400/20",
    emerald: "text-emerald-400 hover:bg-emerald-400/20",
    fuchsia: "text-fuchsia-400 hover:bg-fuchsia-400/20",
    green: "text-green-400 hover:bg-green-400/20",
    indigo: "text-indigo-400 hover:bg-indigo-400/20",
    jade: "text-jade-400 hover:bg-jade-400/20",
    jasper: "text-jasper-400 hover:bg-jasper-400/20",
    kunzite: "text-kunzite-400 hover:bg-kunzite-400/20",
    lime: "text-lime-400 hover:bg-lime-400/20",
    moonstone: "text-moonstone-400 hover:bg-moonstone-400/20",
    orange: "text-orange-400 hover:bg-orange-400/20",
    peridot: "text-peridot-400 hover:bg-peridot-400/20",
    pink: "text-pink-400 hover:bg-pink-400/20",
    purple: "text-purple-400 hover:bg-purple-400/20",
    red: "text-red-400 hover:bg-red-400/20",
    rose: "text-rose-400 hover:bg-rose-400/20",
    ruby: "text-ruby-400 hover:bg-ruby-400/20",
    russian: "text-russian-400 hover:bg-russian-400/20",
    scarlet: "text-scarlet-400 hover:bg-scarlet-400/20",
    stratos: "text-stratos-400 hover:bg-stratos-400/20",
    sunstone: "text-sunstone-400 hover:bg-sunstone-400/20",
    sylver: "text-sylver-400 hover:bg-sylver-400/20",
    teal: "text-teal-400 hover:bg-teal-400/20",
    violet: "text-violet-400 hover:bg-violet-400/20",
    yellow: "text-yellow-400 hover:bg-yellow-400/20"
}

export const DropdownWrap = ({children}: Props) => {
    return (
        <div className="inline-block group">
            {children}
        </div>
    )
}

export const DropdownInvoker = ({children, color = "ruby" }: Props) => {
    return (
        <button aria-haspopup="true" aria-aria-controls='menu' tabIndex={1} className={clsx('w-14 h-8 flex items-center justify-center px-4 py-2.5 rounded-lg appearance-none min-w-fit text-d-copy duration-300 hover:bg-russian-600/20', `${colorVar[color]}`)}>
            {children}
        </button>
    )
}

export const DropdownMenu = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <ul id="menu" aria-hidden="true"  className={clsx(`origin-center absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-gray-800 text-sylver-100 ring-1 ring-black ring-opacity-5 focus:outline-none`, `${className}`)} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={1}>
            <div className={clsx(`py-2.5 px-2.5`)} role="none">
                {children}
            </div>
        </ul>
    )
}

export const DropdownItem = ({ route, id, children, leftIcon, rightIcon }: Props) => {
    return (
        <a href={route ? `${route}` : undefined} className="inline-flex items-center w-full px-2 py-2 text-sm rounded-md hover:bg-russian-400/20" role="menuitem" tabIndex={1} id={id ? `menu-item-${id}` : ''}>
            {leftIcon && <span className='inline-flex items-center w-4 h-4 mr-2'>{leftIcon}</span>}
            {children}
            {rightIcon && <span className='inline-flex items-center w-4 h-4 ml-auto'>{rightIcon}</span>}
        </a>
    )
}

export const DropdownSubmenu = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={clsx(`origin-center relative inline-flex left-0 mt-1 w-56 rounded-md shadow-lg bg-gray-800 text-sylver-100 ring-1 ring-black ring-opacity-5 focus:outline-none`, `${className}`)} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={1}>
            <div className={clsx(`py-2.5 px-2.5`)} role="none">
                {children}
            </div>
        </div>
    )
}

export const RuiDropdown = ({ label = "Profile", children, color = "ruby" }: Props) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="relative inline-block text-left">
            <button tabIndex={1} onClick={() => setHidden(!hidden)} className={clsx('w-14 h-8 flex items-center justify-center px-4 py-2.5 rounded-lg appearance-none min-w-fit text-d-copy duration-300 hover:bg-russian-600/20', `${colorVar[color]}`)}>
                {label}
            </button>

            <div className={`${hidden ? `transition ease-in duration-75 transform opacity-0 scale-95` : `transition ease-out duration-300 transform opacity-100 scale-100`}`}>
                {children}
            </div>
        </div>
    )
}

RuiDropdown.Wrapper = DropdownWrap
RuiDropdown.Button = DropdownInvoker
RuiDropdown.Menu = DropdownMenu
RuiDropdown.Item = DropdownItem

export default RuiDropdown