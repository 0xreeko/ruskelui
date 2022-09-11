import React, { HTMLAttributes, ReactNode } from 'react'
// @ts-ignore
import styles from './modules/Breadcrumbs.module.css'
import { colorType } from './utils'

// this works well when it's coupled with Router in NextJS

export interface Props extends HTMLAttributes<HTMLElement> {
    color?: colorType,
    route?: string
    fullWidth?: boolean
    isInactive?: boolean
    divider?: ReactNode
}

const colorVar: { [key in colorType]: string } = {
    amber: "hover:text-amber-600",
    amethyst: "hover:text-amethyst-600",
    aqua: "hover:text-aqua-600",
    azure: "hover:text-azure-600",
    blue: "hover:text-blue-600",
    cyan: "hover:text-cyan-600",
    emerald: "hover:text-emerald-600",
    fuchsia: "hover:text-fuchsia-600",
    green: "hover:text-green-600",
    indigo: "hover:text-indigo-600",
    jade: "hover:text-jade-600",
    jasper: "hover:text-jasper-600",
    kunzite: "hover:text-kunzite-600",
    lime: "hover:text-lime-600",
    moonstone: "hover:text-moonstone-600",
    orange: "hover:text-orange-600",
    peridot: "hover:text-peridot-600",
    pink: "hover:text-pink-600",
    purple: "hover:text-purple-600",
    red: "hover:text-red-600",
    rose: "hover:text-rose-600",
    ruby: "hover:text-ruby-600",
    russian: "hover:text-russian-600",
    scarlet: "hover:text-scarlet-600",
    stratos: "hover:text-stratos-600",
    sunstone: "hover:text-sunstone-600",
    sylver: "hover:text-sylver-600",
    teal: "hover:text-teal-600",
    violet: "hover:text-violet-600",
    yellow: "hover:text-yellow-600"
}

const dividerIcon = <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<polyline points="9 6 15 12 9 18"></polyline>
</svg>

const CrumbItem = ({ route, color = 'ruby', children, isInactive, divider = dividerIcon }: Props) => (
    <li className={`inline-flex items-center`}>
        {!isInactive ? (
            <>
                <a href={route}>
                    <span className={`${colorVar[color]}`}>{children}</span>
                </a>
                <span className='mx-1'>
                    {divider}
                </span>
            </>

        ) : (
            <span className='cursor-default'>{children}</span>
        )}
    </li>
)

export const RuiBreadcrumbs = ({ children, fullWidth = false }: Props) => {
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