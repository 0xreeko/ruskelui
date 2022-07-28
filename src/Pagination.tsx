import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'
// @ts-ignore
import styles from './modules/RuiPagination.module.css'
import { colorType } from './utils'

export interface Props extends HTMLAttributes<HTMLElement> {
    color: colorType
}

const colorVar: { [key in colorType]: string[]} = {
    amber: ["hover:bg-amber-400", "hover:text-amber-500"],
    amethyst: ["hover:bg-amethyst-400", "hover:text-amethyst-500"],
    aqua: ["hover:bg-aqua-400", "hover:text-aqua-500"],
    azure: ["hover:bg-azure-400", "hover:text-azure-500"],
    blue: ["hover:bg-blue-400", "hover:text-blue-500"],
    cyan: ["hover:bg-cyan-400", "hover:text-cyan-500"],
    emerald: ["hover:bg-emerald-400", "hover:text-emerald-500"],
    fuchsia: ["hover:bg-fuchsia-400", "hover:text-fuchsia-500"],
    green: ["hover:bg-green-400", "hover:text-green-500"],
    indigo: ["hover:bg-indigo-400", "hover:text-indigo-500"],
    jade: ["hover:bg-jade-400", "hover:text-jade-500"],
    jasper: ["hover:bg-jasper-400", "hover:text-jasper-500"],
    kunzite: ["hover:bg-kunzite-400", "hover:text-kunzite-500"],
    lime: ["hover:bg-lime-400", "hover:text-lime-500"],
    moonstone: ["hover:bg-moonstone-400", "hover:text-moonstone-500"],
    orange: ["hover:bg-orange-400", "hover:text-orange-500"],
    peridot: ["hover:bg-peridot-400", "hover:text-peridot-500"],
    pink: ["hover:bg-pink-400", "hover:text-pink-500"],
    purple: ["hover:bg-purple-400", "hover:text-purple-500"],
    red: ["hover:bg-red-400", "hover:text-red-500"],
    rose: ["hover:bg-rose-400", "hover:text-rose-500"],
    ruby: ["hover:bg-ruby-400", "hover:text-ruby-500"],
    russian: ["hover:bg-russian-400", "hover:text-russian-500"],
    scarlet: ["hover:bg-scarlet-400", "hover:text-scarlet-500"],
    stratos: ["hover:bg-stratos-400", "hover:text-stratos-500"],
    sunstone: ["hover:bg-sunstone-400", "hover:text-sunstone-500"],
    sylver: ["hover:bg-sylver-400", "hover:text-sylver-500"],
    teal: ["hover:bg-teal-400", "hover:text-teal-500"],
    violet: ["hover:bg-violet-400", "hover:text-violet-500"],
    yellow: ["hover:bg-yellow-400", "hover:text-yellow-500"]
}

 
export const RuiPagination = ({color = "ruby"}: Props) => {
    return (
        // track the active selection
        // display different hover colour if unselected
        // dynamically show numbered pages depending of how far you are (ellipsis)
        // make it responsive -> mobile - tablet - desktop
        /* 
            MOBILE:
            the pagination will naturally be designed to show the current page and the prev & next buttons

            TABLET:
            the paginations will display prev & next buttons and a few options

            DESKTOP:
            the pagination will display the full set of buttons


            > display the first 4 pages (ellipses) then the last page
            > previous pages gt 2 or 3 then display (ellipses) after first page, show the current page and then the last page
            > display the first page ellipses then the last 4 pages if there's 4 or less pages left
        */
        <nav className="inline-flex flex-wrap items-center px-6 py-2 max-w-fit justify-evenly rounded-xl bg-russian-600/80 backdrop-blur-sm text-d-copy">
            <ul className='flex items-center gap-2'>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][1]}`)}><span className="sr-only">Previous</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][0]} hover:text-russian-600`)}>1</li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][0]} hover:text-russian-600`)}>2</li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][0]} hover:text-russian-600`)}>3</li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg  text-sylver-900 px-3 text-[0.615rem] select-none')}`)}>...</li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][0]} hover:text-russian-600`)}>21</li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][0]} hover:text-russian-600`)}>22</li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][0]} hover:text-russian-600`)}>23</li>
                <li className={clsx(`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')}`, `${colorVar[color][1]}`)}><span className="sr-only">Next</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></li>
            </ul>
        </nav>
    )
}