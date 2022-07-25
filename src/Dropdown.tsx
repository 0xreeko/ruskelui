import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, useState } from 'react'
import { RuiButton } from './Button';


export interface Props extends HTMLAttributes<HTMLElement> {
    label: string
    child?: ReactNode
}


export const RuiDropdownButton = () => {
    // @ts-ignore
    const [hidden, setHidden] = useState(true)
    return (
        <button type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm text-sylver-700 bg-russian-600 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
            <svg className={clsx(`w-5 h-5 ml-2 -mr-1`, `${hidden ? 'rotate-0 duration-300' : 'rotate-180 duration-300'}`)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
    )
}


export const RuiDropdown = ({ label = "Options" }: Props) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="relative inline-block text-left">
            <div onClick={() => setHidden(!hidden)}>
                <RuiButton label={`${label}`} color='russian' size='small' />
                {/* <button type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium border border-gray-300 shadow-sm text-sylver-700 bg-russian-600 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <svg className={clsx(`w-5 h-5 ml-2 -mr-1`, `${hidden ? 'rotate-0 duration-300' : 'rotate-180 duration-300'}`)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button> */}
            </div>

            <div className={clsx(`origin-center absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`, `${hidden ? `transition ease-in duration-75 transform opacity-0 scale-95` : `transition ease-out duration-300 transform opacity-100 scale-100`}`)} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className={clsx(`py-1`, `${hidden ? '' : ''}`)} role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                    <form method="POST" action="#" role="none">
                        <button type="submit" className="block w-full px-4 py-2 text-sm text-left text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

RuiDropdown.Button = RuiDropdownButton

export default RuiDropdown