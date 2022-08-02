import React, { HTMLAttributes, ReactNode } from 'react'
import { colorType } from './utils/'
// @ts-ignore
import styles from './modules/Swap.module.css'

export interface Props extends HTMLAttributes<HTMLElement> {
    /** Choose one of RuskelUIs Neonic colors */
    color?: colorType;
    /** Provide a name for Toggle */
    name: string;
    offIcon: ReactNode;
    onIcon: ReactNode;
}

// const colorVar: {[key in colorType]: string} = {
//     amber: "bg-stratos-600/30 peer-checked:bg-amber-400",
//     amethyst: "bg-stratos-600/30 peer-checked:bg-amethyst-400",
//     aqua: "bg-stratos-600/30 peer-checked:bg-aqua-400",
//     azure: "bg-stratos-600/30 peer-checked:bg-azure-400",
//     blue: "bg-stratos-600/30 peer-checked:bg-blue-400",
//     cyan: "bg-stratos-600/30 peer-checked:bg-cyan-400",
//     emerald: "bg-stratos-600/30 peer-checked:bg-emerald-400",
//     fuchsia: "bg-stratos-600/30 peer-checked:bg-fuchsia-400",
//     green: "bg-stratos-600/30 peer-checked:bg-green-400",
//     indigo: "bg-stratos-600/30 peer-checked:bg-indigo-400",
//     jade: "bg-stratos-600/30 peer-checked:bg-jade-400",
//     jasper: "bg-stratos-600/30 peer-checked:bg-jasper-400",
//     kunzite: "bg-stratos-600/30 peer-checked:bg-kunzite-400",
//     lime: "bg-stratos-600/30 peer-checked:bg-lime-400",
//     moonstone: "bg-stratos-600/30 peer-checked:bg-moonstone-400",
//     orange: "bg-stratos-600/30 peer-checked:bg-orange-400",
//     peridot: "bg-stratos-600/30 peer-checked:bg-peridot-400",
//     pink: "bg-stratos-600/30 peer-checked:bg-pink-400",
//     purple: "bg-stratos-600/30 peer-checked:bg-purple-400",
//     red: "bg-stratos-600/30 peer-checked:bg-red-400",
//     rose: "bg-stratos-600/30 peer-checked:bg-rose-400",
//     ruby: "bg-stratos-600/30 peer-checked:bg-ruby-400",
//     russian: "bg-stratos-600/30 peer-checked:bg-russian-400",
//     scarlet: "bg-stratos-600/30 peer-checked:bg-scarlet-400",
//     stratos: "bg-stratos-600/30 peer-checked:bg-stratos-400",
//     sunstone: "bg-stratos-600/30 peer-checked:bg-sunstone-400",
//     sylver: "bg-stratos-600/30 peer-checked:bg-sylver-400",
//     teal: "bg-stratos-600/30 peer-checked:bg-teal-400",
//     violet: "bg-stratos-600/30 peer-checked:bg-violet-400",
//     yellow: "bg-stratos-600/30 peer-checked:bg-yellow-400"
// }

export const RuiSwap = ({ name, offIcon, onIcon}: Props) => {
    return (
        <label role={'switch'} title={name} tabIndex={0} className="relative flex items-center w-10 h-4 overflow-hidden border rounded-md cursor-pointer">
            <input type="checkbox" className="sr-only peer" id={name} />
            <span className={`text-sunstone-400 duration-500 scale-100 transfrom transition-all peer-checked:rotate-180 peer-checked:scale-0`}>{offIcon}</span>
            <span className={`absolute text-indigo-400 duration-500 rotate-180 scale-0 peer-checked:scale-100 peer-checked:rotate-0`}>{onIcon}</span>
        </label>
    )
}