import React from 'react'
// @ts-ignore
import styles from './modules/Breadcrumbs.module.css'
import { RuiBreadcrumbsProps, hoverColor } from './types/Breadcrumbs'

const dividerIcon = <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <polyline points="9 6 15 12 9 18"></polyline>
</svg>

const CrumbItem = ({ route, color = 'ruby', children, divider = dividerIcon, variant }: RuiBreadcrumbsProps) => {
    switch (variant) {
        case "current":
            return (
                <li className={`inline-flex items-center`}>
                    <span className='cursor-default text-russian-600 dark:text-sylver-100'>{children}</span>
                </li>
            )

        case "inactive":
            return (
                <li className={`inline-flex items-center`}>
                    <a href={route} className='text-russian-600/60 dark:text-sylver-100/60'>
                        <span className={`${hoverColor[color]} duration-300 `}>{children}</span>
                    </a>
                    <span className='mx-1 text-gray-600'>
                        {divider}
                    </span>
                </li>
            )

        default:
            return (
                <li className={`inline-flex items-center`}>
                    <a href={route} className='text-russian-600/60 dark:text-sylver-100/60'>
                        <span className={`${hoverColor[color]} duration-300 `}>{children}</span>
                    </a>
                    <span className='mx-1 text-gray-600'>
                        {divider}
                    </span>
                </li>
            )
    }
}

export const RuiBreadcrumbs = ({ children, fullWidth = false }: RuiBreadcrumbsProps) => {
    return (
        <nav className={`p-2 px-4 flex items-center rounded-lg bg-sylver-700/10 backdrop-blur-sm ${fullWidth === true ? "w-full" : "w-fit"}`}>
            <ol className="inline-flex items-center">
                {children}
            </ol>
        </nav>
    )
}

RuiBreadcrumbs.Item = CrumbItem;

export default RuiBreadcrumbs