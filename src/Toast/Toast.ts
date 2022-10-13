import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type position = 
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomLeft"
type theme = 
    | "light"
    | "dark"
type variant = 
    | "success"
    | "info"
    | "warn"
    | "error"
    | "colored"


export interface RuiToastProps extends HTMLAttributes<HTMLElement> {
    id: string
    icon?: ReactNode
    variant: variant
    content: ReactNode
    color: color
    theme: theme
    position: position
    dispatch: (arg: unknown) => void
}

export const colorVar: {[key in color]: string[]} = {
    amber: ["from-amber-600/20", "text-amber-400"],
    amethyst: ["from-amethyst-600/20", "text-amethyst-400"],
    aqua: ["from-aqua-600/20", "text-aqua-400"],
    azure: ["from-azure-600/20", "text-azure-400"],
    blue: ["from-blue-600/20", "text-blue-400"],
    cyan: ["from-cyan-600/20", "text-cyan-400"],
    emerald: ["from-emerald-600/20", "text-emerald-400"],
    fuchsia: ["from-fuchsia-600/20", "text-fuchsia-400"],
    green: ["from-green-600/20", "text-green-400"],
    indigo: ["from-indigo-600/20", "text-indigo-400"],
    jade: ["from-jade-600/20", "text-jade-400"],
    jasper: ["from-jasper-600/20", "text-jasper-400"],
    kunzite: ["from-kunzite-600/20", "text-kunzite-400"],
    lime: ["from-lime-600/20", "text-lime-400"],
    moonstone: ["from-moonstone-600/20", "text-moonstone-400"],
    orange: ["from-orange-600/20", "text-orange-400"],
    peridot: ['from-peridot-600/20', 'text-peridot-400'],
    pink: ["from-pink-600/20", "text-pink-400"],
    purple: ["from-purple-600/20", "text-purple-400"],
    red: ["from-red-600/20", "text-red-400"],
    rose: ["from-rose-600/20", "text-rose-400"],
    ruby: ["from-ruby-600/20", "text-ruby-400"],
    russian: ["from-russian-600/20", "text-russian-400"],
    scarlet: ["from-scarlet-600/20", "text-scarlet-400"],
    stratos: ["from-stratos-600/20", "text-stratos-400"],
    sunstone: ["from-sunstone-600/20", "text-sunstone-400"],
    sylver: ["from-sylver-600/20", "text-sylver-400"],
    teal: ["from-teal-600/20", "text-teal-400"],
    violet: ["from-violet-600/20", "text-violet-400"],
    yellow: ["from-yellow-600/20", "text-yellow-400"]
  }