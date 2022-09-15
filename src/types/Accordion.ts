import { color } from './Generics';
import { HTMLAttributes, ReactNode } from 'react';

type AccordionData = {
    label?: ReactNode
    content?: ReactNode
}
export interface RuiAccordionProps extends HTMLAttributes<HTMLElement> {
    data: AccordionData[]
    fullWidth: boolean
    color?: color
}

export const hoverColor: { [key in color]: string } = {
    amber: "hover:text-amber-400 duration-300",
    amethyst: "hover:text-amethyst-400 duration-300",
    aqua: "hover:text-aqua-400 duration-300",
    azure: "hover:text-azure-400 duration-300",
    blue: "hover:text-blue-400 duration-300",
    cyan: "hover:text-cyan-400 duration-300",
    emerald: "hover:text-emerald-400 duration-300",
    fuchsia: "hover:text-fuchsia-400 duration-300",
    green: "hover:text-green-400 duration-300",
    indigo: "hover:text-indigo-400 duration-300",
    jade: "hover:text-jade-400 duration-300",
    jasper: "hover:text-jasper-400 duration-300",
    kunzite: "hover:text-kunzite-400 duration-300",
    lime: "hover:text-lime-400 duration-300",
    moonstone: "hover:text-moonstone-400 duration-300",
    orange: "hover:text-orange-400 duration-300",
    peridot: "hover:text-peridot-400 duration-300",
    pink: "hover:text-pink-400 duration-300",
    purple: "hover:text-purple-400 duration-300",
    red: "hover:text-red-400 duration-300",
    rose: "hover:text-rose-400 duration-300",
    ruby: "hover:text-ruby-400 duration-300",
    russian: "hover:text-russian-400 duration-300",
    scarlet: "hover:text-scarlet-400 duration-300",
    stratos: "hover:text-stratos-400 duration-300",
    sunstone: "hover:text-sunstone-400 duration-300",
    sylver: "hover:text-sylver-400 duration-300",
    teal: "hover:text-teal-400 duration-300",
    violet: "hover:text-violet-400 duration-300",
    yellow: "hover:text-yellow-400 duration-300"
}