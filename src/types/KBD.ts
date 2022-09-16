import { HTMLAttributes, ReactNode } from "react"
import { color } from "./Generics"

export interface RuiKBDProps extends HTMLAttributes<HTMLElement>{
    children: ReactNode,
    color: color
}

export const textColor: { [key in color]: string } = {
    amber: "text-amber-400",
    amethyst: "text-amethyst-400",
    aqua: "text-aqua-400",
    azure: "text-azure-400",
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    fuchsia: "text-fuchsia-400",
    green: "text-green-400",
    indigo: "text-indigo-400",
    jade: "text-jade-400",
    jasper: "text-jasper-400",
    kunzite: "text-kunzite-400",
    lime: "text-lime-400",
    moonstone: "text-moonstone-400",
    orange: "text-orange-400",
    peridot: "text-peridot-400",
    pink: "text-pink-400",
    purple: "text-purple-400",
    red: "text-red-400",
    rose: "text-rose-400",
    ruby: "text-ruby-400",
    russian: "text-russian-400",
    scarlet: "text-scarlet-400",
    stratos: "text-stratos-400",
    sunstone: "text-sunstone-400",
    sylver: "text-sylver-400",
    teal: "text-teal-400",
    violet: "text-violet-400",
    yellow: "text-yellow-400"
}