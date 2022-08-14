import React, { HTMLAttributes } from 'react'
import { colorType } from './utils/'

export interface Props extends HTMLAttributes<HTMLElement> {
    /** Choose one of RuskelUIs Neonic colors */
    color: colorType;
    /** Provide a name for Toggle */
    name: string;
}

const colorVar: {[key in colorType]: string} = {
    amber: "bg-stratos-400/20 peer-checked:bg-amber-400",
    amethyst: "bg-stratos-400/20 peer-checked:bg-amethyst-400",
    aqua: "bg-stratos-400/20 peer-checked:bg-aqua-400",
    azure: "bg-stratos-400/20 peer-checked:bg-azure-400",
    blue: "bg-stratos-400/20 peer-checked:bg-blue-400",
    cyan: "bg-stratos-400/20 peer-checked:bg-cyan-400",
    emerald: "bg-stratos-400/20 peer-checked:bg-emerald-400",
    fuchsia: "bg-stratos-400/20 peer-checked:bg-fuchsia-400",
    green: "bg-stratos-400/20 peer-checked:bg-green-400",
    indigo: "bg-stratos-400/20 peer-checked:bg-indigo-400",
    jade: "bg-stratos-400/20 peer-checked:bg-jade-400",
    jasper: "bg-stratos-400/20 peer-checked:bg-jasper-400",
    kunzite: "bg-stratos-400/20 peer-checked:bg-kunzite-400",
    lime: "bg-stratos-400/20 peer-checked:bg-lime-400",
    moonstone: "bg-stratos-400/20 peer-checked:bg-moonstone-400",
    orange: "bg-stratos-400/20 peer-checked:bg-orange-400",
    peridot: "bg-stratos-400/20 peer-checked:bg-peridot-400",
    pink: "bg-stratos-400/20 peer-checked:bg-pink-400",
    purple: "bg-stratos-400/20 peer-checked:bg-purple-400",
    red: "bg-stratos-400/20 peer-checked:bg-red-400",
    rose: "bg-stratos-400/20 peer-checked:bg-rose-400",
    ruby: "bg-stratos-400/20 peer-checked:bg-ruby-400",
    russian: "bg-stratos-400/20 peer-checked:bg-russian-400",
    scarlet: "bg-stratos-400/20 peer-checked:bg-scarlet-400",
    stratos: "bg-stratos-400/20 peer-checked:bg-stratos-400",
    sunstone: "bg-stratos-400/20 peer-checked:bg-sunstone-400",
    sylver: "bg-stratos-400/20 peer-checked:bg-sylver-400",
    teal: "bg-stratos-400/20 peer-checked:bg-teal-400",
    violet: "bg-stratos-400/20 peer-checked:bg-violet-400",
    yellow: "bg-stratos-400/20 peer-checked:bg-yellow-400"
}

export const RuiToggle = ({color = 'amethyst', name}: Props) => {
    return (
        <label tabIndex={0} className="relative flex items-center w-10 h-4 overflow-hidden rounded-md cursor-pointer">
            <input role={'switch'} aria-checked="false" aria-label={name ? name : 'toggle placeholder'} type="checkbox" className="sr-only peer" id={name} />
            <span className={`w-full h-full ${colorVar[color]} duration-300 transition-all`}></span>
            <span className={`w-3 h-3 left-1 absolute duration-300 transition-all rounded-[32%] peer-checked:left-6 bg-stratos-100 peer-checked:bg-russian-500`}></span>
        </label>
    )
}