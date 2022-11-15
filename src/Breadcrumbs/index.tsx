import React from 'react'
import { RuiBreadcrumbParentProps, RuiBreadcrumbItemProps } from './Breadcrumbs'
//@ts-ignore
import styles from './Breadcrumbs.module.css'

const dividerIcon = <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <polyline points="9 6 15 12 9 18"></polyline>
</svg>

const CrumbItem = ({ route, color = 'rosian', children, divider = "arrow", variant, icon }: RuiBreadcrumbItemProps) => {
    switch (variant) {
        case "current":
            return (
                <li className={`inline-flex items-center`}>
                    <span className='font-semibold cursor-default'>{children}</span>
                </li>
            )

        case "previous":
            return (
                <li className={`inline-flex items-center`}>
                    <span className='mr-2'>{icon}</span>
                    <a href={route}>
                        <span className={`${styles[color]} text-neropside/50 dark:text-onyx/50 duration-300 `}>{children}</span>
                    </a>
                    {divider === 'arrow' ? (
                        <span className='mx-3 dark:text-obsidian-300 text-obsidian-800'>
                        {dividerIcon}
                    </span>
                    ) : (
                        <span className='mx-3 font-semibold dark:text-obsidian-300 text-obsidian-800'>
                        /
                    </span>
                    )}
                </li>
            )

        default:
            return (
                <li className={`inline-flex items-center`}>
                    <span className='mr-2'>{icon}</span>
                    <a href={route}>
                        <span className={`${styles[color]} duration-300 `}>{children}</span>
                    </a>
                    {divider === 'arrow' ? (
                        <span className='mx-3 dark:text-obsidian-300 text-obsidian-800'>
                        {dividerIcon}
                    </span>
                    ) : (
                        <span className='mx-3 font-semibold dark:text-obsidian-300 text-obsidian-800'>
                        /
                    </span>
                    )}
                </li>
            )
    }
}

export const RuiBreadcrumbs = ({ children, fullWidth = false }: RuiBreadcrumbParentProps) => {
    return (
        <ul className={`inline-flex items-center p-2 px-4 text-neropside dark:text-onyx ${fullWidth === true ? "w-full" : "w-fit"}`}>
            {children}
        </ul>
    )
}

RuiBreadcrumbs.Item = CrumbItem;

export default RuiBreadcrumbs