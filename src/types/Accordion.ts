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

export const hoverColor: { [key in color]: string[] } = {
    amber: ["hover:text-amber-400 duration-300", "text-amber-400"],
    amethyst: ["hover:text-amethyst-400 duration-300", "text-amethyst-400"],
    aqua: ["hover:text-aqua-400 duration-300", "text-aqua-400"],
    azure: ["hover:text-azure-400 duration-300", "text-azure-400"],
    blue: ["hover:text-blue-400 duration-300", "text-blue-400"],
    cyan: ["hover:text-cyan-400 duration-300", "text-cyan-400"],
    emerald: ["hover:text-emerald-400 duration-300", "text-emerald-400"],
    fuchsia: ["hover:text-fuchsia-400 duration-300", "text-fuchsia-400"],
    green: ["hover:text-green-400 duration-300", "text-green-400"],
    indigo: ["hover:text-indigo-400 duration-300", "text-indigo-400"],
    jade: ["hover:text-jade-400 duration-300", "text-jade-400"],
    jasper: ["hover:text-jasper-400 duration-300", "text-jasper-400"],
    kunzite: ["hover:text-kunzite-400 duration-300", "text-kunzite-400"],
    lime: ["hover:text-lime-400 duration-300", "text-lime-400"],
    moonstone: ["hover:text-moonstone-400 duration-300", "text-moonstone-400"],
    orange: ["hover:text-orange-400 duration-300", "text-orange-400"],
    peridot: ["hover:text-peridot-400 duration-300", "text-peridot-400"],
    pink: ["hover:text-pink-400 duration-300", "text-pink-400"],
    purple: ["hover:text-purple-400 duration-300", "text-purple-400"],
    red: ["hover:text-red-400 duration-300", "text-red-400"],
    rose: ["hover:text-rose-400 duration-300", "text-rose-400"],
    ruby: ["hover:text-ruby-400 duration-300", "text-ruby-400"],
    russian: ["hover:text-russian-400 duration-300", "text-russian-400"],
    scarlet: ["hover:text-scarlet-400 duration-300", "text-scarlet-400"],
    stratos: ["hover:text-stratos-400 duration-300", "text-stratos-400"],
    sunstone: ["hover:text-sunstone-400 duration-300", "text-sunstone-400"],
    sylver: ["hover:text-sylver-400 duration-300", "text-sylver-400"],
    teal: ["hover:text-teal-400 duration-300", "text-teal-400"],
    violet: ["hover:text-violet-400 duration-300", "text-violet-400"],
    yellow: ["hover:text-yellow-400 duration-300", "text-yellow-400"],
}