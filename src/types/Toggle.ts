import { HTMLAttributes } from "react"
import { color } from "./Generics"

export interface RuiToggleProps extends HTMLAttributes<HTMLElement> {
    color: color
    name: string
}

export const colorVar: {[key in color]: string} = {
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