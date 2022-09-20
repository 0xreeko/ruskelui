import React, { HTMLAttributes, ReactNode, useState } from 'react'
// @ts-ignore
import styles from './modules/Select.module.css'
import { color } from './types/Generics'

export interface Props extends HTMLAttributes<HTMLElement> {
    label: string
    color: color
}

interface Child extends HTMLAttributes<HTMLElement> {
    children: ReactNode
    color: color
}

export const selectColor: { [key in color]: string } = {
    amber: "hover:bg-amber-400/10 hover:text-amber-400 ",
    amethyst: "hover:bg-amethyst-400/10 hover:text-amethyst-400 ",
    aqua: "hover:bg-aqua-400/10 hover:text-aqua-400 ",
    azure: "hover:bg-azure-400/10 hover:text-azure-400 ",
    blue: "hover:bg-blue-400/10 hover:text-blue-400 ",
    cyan: "hover:bg-cyan-400/10 hover:text-cyan-400 ",
    emerald: "hover:bg-emerald-400/10 hover:text-emerald-400 ",
    fuchsia: "hover:bg-fuchsia-400/10 hover:text-fuchsia-400 ",
    green: "hover:bg-green-400/10 hover:text-green-400 ",
    indigo: "hover:bg-indigo-400/10 hover:text-indigo-400 ",
    jade: "hover:bg-jade-400/10 hover:text-jade-400 ",
    jasper: "hover:bg-jasper-400/10 hover:text-jasper-400 ",
    kunzite: "hover:bg-kunzite-400/10 hover:text-kunzite-400 ",
    lime: "hover:bg-lime-400/10 hover:text-lime-400 ",
    moonstone: "hover:bg-moonstone-400/10 hover:text-moonstone-400 ",
    orange: "hover:bg-orange-400/10 hover:text-orange-400 ",
    peridot: "hover:bg-peridot-400/10 hover:text-peridot-400 ",
    pink: "hover:bg-pink-400/10 hover:text-pink-400 ",
    purple: "hover:bg-purple-400/10 hover:text-purple-400 ",
    red: "hover:bg-red-400/10 hover:text-red-400 ",
    rose: "hover:bg-rose-400/10 hover:text-rose-400 ",
    ruby: "hover:bg-ruby-400/10 hover:text-ruby-400 ",
    russian: "hover:bg-russian-400/10 hover:text-russian-400 ",
    scarlet: "hover:bg-scarlet-400/10 hover:text-scarlet-400 ",
    stratos: "hover:bg-stratos-400/10 hover:text-stratos-400 ",
    sunstone: "hover:bg-sunstone-400/10 hover:text-sunstone-400 ",
    sylver: "hover:bg-sylver-400/10 hover:text-sylver-400 ",
    teal: "hover:bg-teal-400/10 hover:text-teal-400 ",
    violet: "hover:bg-violet-400/10 hover:text-violet-400 ",
    yellow: "hover:bg-yellow-400/10 hover:text-yellow-400 "
}

export const SelectItem = ({children, color = "amethyst"}: Child) => {
    return (
        <li tabIndex={0} className={`flex justify-between py-2 px-4 ${selectColor[color]}`}>
            {children}
        </li>
    )
}

export const RuiSelect = ({label = "Choose an ISO20022 coin", color = "amethyst"}: Props) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className={`relative antialiased w-fit text-sylver-100 focus:ring-2 focus:ring-${color}-400`}>
            <button className="flex items-center justify-between px-3 py-2 space-x-3 duration-500 rounded-lg bg-russian-500" onClick={() => setHidden(!hidden)}>
                <span>{label}</span>
                <svg className={`w-4 h-4 ${hidden ? 'rotate-0 duration-300' : 'rotate-180 duration-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <ul tabIndex={0} className={`absolute origin-top text-[1rem] w-full z-10 mt-1.5 h-40 rounded-md overflow-scroll bg-russian-500 ${hidden ? 'transform transition-all scale-0 opacity-0 duration-300' : 'transform transition-all opacity-100 duration-300'}`} role="list">
                <SelectItem color='amethyst'>
                    <span>XRP</span>
                    <span>{<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                    </svg>}</span>
                </SelectItem>
                <SelectItem color='green'>
                    XLM
                </SelectItem>
                <SelectItem color="amber">
                    ALGO
                </SelectItem>
                <SelectItem color="peridot">
                    IOTA
                </SelectItem>
                <SelectItem color="azure">
                    XDC
                </SelectItem>
                <SelectItem color="red">
                    BTC
                </SelectItem>
            </ul>
        </div >
    )
}

RuiSelect.Item = SelectItem

export default RuiSelect.Item