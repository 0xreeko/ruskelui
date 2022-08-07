import React, { HTMLAttributes, ReactNode } from 'react'
import {colorType} from './utils/'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    /** Provide a text for pill */
    children: ReactNode;
    /** Provide an SVG with dimensions of 16x16 px */
    svg?: ReactNode;
    /** Choose from RuskelUI's Neonic colours + native Tailwind colours! */
    color: colorType;
}

const colorVar: {[key in colorType]: string} = {
    amber: "bg-amber-400/20 text-amber-400 hover:text-amber-300",
    amethyst: "bg-amethyst-400/20 text-amethyst-400 hover:text-amethyst-300",
    aqua: "bg-aqua-400/20 text-aqua-400 hover:text-aqua-300",
    azure: "bg-azure-400/20 text-azure-400 hover:text-azure-300",
    blue: "bg-blue-400/20 text-blue-400 hover:text-blue-300",
    cyan: "bg-cyan-400/20 text-cyan-400 hover:text-cyan-300",
    emerald: "bg-emerald-400/20 text-emerald-400 hover:text-emerald-300",
    fuchsia: "bg-fuchsia-400/20 text-fuchsia-400 hover:text-fuchsia-300",
    green: "bg-green-400/20 text-green-400 hover:text-green-300",
    indigo: "bg-indigo-400/20 text-indigo-400 hover:text-indigo-300",
    jade: "bg-jade-400/20 text-jade-400 hover:text-jade-300",
    jasper: "bg-jasper-400/20 text-jasper-400 hover:text-jasper-300",
    kunzite: "bg-kunzite-400/20 text-kunzite-400 hover:text-kunzite-300",
    lime: "bg-lime-400/20 text-lime-400 hover:text-lime-300",
    moonstone: "bg-moonstone-400/20 text-moonstone-400 hover:text-moonstone-300",
    orange: "bg-orange-400/20 text-orange-400 hover:text-orange-300",
    peridot: "bg-peridot-400/20 text-peridot-400 hover:text-peridot-300",
    pink: "bg-pink-400/20 text-pink-400 hover:text-pink-300",
    purple: "bg-purple-400/20 text-purple-400 hover:text-purple-300",
    red: "bg-red-400/20 text-red-400 hover:text-red-300",
    rose: "bg-rose-400/20 text-rose-400 hover:text-rose-300",
    ruby: "bg-ruby-400/20 text-ruby-400 hover:text-ruby-300",
    russian: "bg-russian-400/20 text-russian-400 hover:text-russian-300",
    scarlet: "bg-scarlet-400/20 text-scarlet-400 hover:text-scarlet-300",
    stratos: "bg-stratos-400/20 text-stratos-400 hover:text-stratos-300",
    sunstone: "bg-sunstone-400/20 text-sunstone-400 hover:text-sunstone-300",
    sylver: "bg-sylver-400/20 text-sylver-400 hover:text-sylver-300",
    teal: "bg-teal-400/20 text-teal-400 hover:text-teal-300",
    violet: "bg-violet-400/20 text-violet-400 hover:text-violet-300",
    yellow: "bg-yellow-400/20 text-yellow-400 hover:text-yellow-300"
}

export const RuiPill = ({children, color = "ruby", svg}: Props) => {

    return (
        <div className={`${colorVar[color]} flex items-center duration-300 select-none w-fit px-2 py-1 mobile-overline rounded-[6px]`}>
            <slot name='svg'>{svg}</slot>
            <span>{children}</span>
        </div>
    )
}