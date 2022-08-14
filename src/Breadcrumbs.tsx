import React, { HTMLAttributes } from 'react'
// @ts-ignore
import styles from './modules/Breadcrumbs.module.css'
import { colorType } from './utils'

// this works well when it's coupled with Router in NextJS

export interface Crumb extends HTMLAttributes<HTMLElement> {
    path: string
    color: colorType
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

const CrumbItem = () => {
    return (
        <li>

        </li>
    )
}

export const RuiBreadcrumbs = ({ path = "/coffee-store/blog1", color = "ruby" }: Crumb) => {
    const arrLength = path.split('/').length
    return (
        <nav className={styles.wrapper}>
            <ol className={styles.innerWrap}>
                {
                    path.split('/').map((item, idx) => item === '' && idx === 0 ? <li className={styles.active}><a href={`/`} className={`${colorVar[color]}`}>{`Home`}</a></li> : idx !== arrLength - 1 ? <li className={styles.active}><a href={`/${item}`} className={`${colorVar[color]}`}>{`${item.includes('-') ? `${item.split('-').join(' ')}` : `${item}`}`}</a></li> : <li className={'text-gray-500 underline underline-offset-2'}>{`${item}`}</li>)
                }
            </ol>
        </nav>
    )
}

RuiBreadcrumbs.Item = CrumbItem;

export default RuiBreadcrumbs