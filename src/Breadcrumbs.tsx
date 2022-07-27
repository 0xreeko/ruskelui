import React from 'react'
// @ts-ignore
import styles from './modules/Breadcrumbs.module.css'
import { colorType } from './utils'

// this works well when it's coupled with Router in NextJS

/*
PSEUDO
if the first idx is nill then return 'Home' => item === '' && idx === 0 ? <li><a href={`/`} className={`text-blue-600 hover:text-blue-700`}>{`Home`}</a></li>
if there are any route then display them blue'd out => <li><a href={`/${item}`} className={`text-blue-600 hover:text-blue-700`}>{`${item}`}</a></li>
if the route is the last one, then grey it out => idx === arrLength - 1 ? <li>{`${item}`}</li>

 */

// interface Child extends HTMLAttributes<HTMLElement> {
//     child: ReactNode
// }

export interface Crumb {
    path: string
    color: colorType
}

// export const BreadcrumbItem = ({ child }: Child) => {
//     return (
//         <li>
//             {child}
//         </li>
//     )

// }

const colorVar: {[key in colorType]: string} = {
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

export const RuiBreadcrumbs = ({ path = "/coffee-store/blog1", color = "ruby" }: Crumb) => {
    const arrLength = path.split('/').length
    return (
        <nav className={styles.wrapper}>
            <ol className={styles.innerWrap}>
                {
                    path.split('/').map((item, idx) => item === '' && idx === 0 ? <li className={styles.active}><a href={`/`} className={`${colorVar[color]}`}>{`Home`}</a></li> : idx !== arrLength - 1 ? <li className={styles.active}><a href={`/${item}`} className={`${colorVar[color]}`}>{`${item.includes('-') ? `${item.split('-').join(' ')}` : `${item}` }`}</a></li> : <li className={'text-gray-500 underline underline-offset-2'}>{`${item}`}</li> )
                }
            </ol>
        </nav>
        //         <nav class="bg-grey-light rounded-md w-full">
        //   <ol class="list-reset flex">
        //     <li><a href="#" class="text-blue-600 hover:text-blue-700">Home</a></li>
        //     <li><span class="text-gray-500 mx-2"></span></li>
        //     <li><a href="#" class="text-blue-600 hover:text-blue-700">Library</a></li>
        //     <li><span class="text-gray-500 mx-2"></span></li>
        //     <li class="text-gray-500">Data</li>
        //   </ol>
        // </nav> 
    )
}