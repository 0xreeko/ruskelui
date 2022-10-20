import { HTMLAttributes } from "react"
import { color } from "../types/Generics"

export interface RuiLoaderProps extends HTMLAttributes<HTMLElement> {
    color: color
}

export const fillColor: {[key in color]: string} = {
    amber: "fill-amber-600",
    amethyst: "fill-amethyst-600",
    aqua: "fill-aqua-600",
    azure: "fill-azure-600",
    bayoux: "fill-bayoux-600",
    blue: "fill-blue-600",
    cyan: "fill-cyan-600",
    emerald: "fill-emerald-600",
    fuchsia: "fill-fuchsia-600",
    green: "fill-green-600",
    indigo: "fill-indigo-600",
    jade: "fill-jade-600",
    jasper: "fill-jasper-600",
    kunzite: "fill-kunzite-600",
    labrodite: "fill-labrodite-600",
    lime: "fill-lime-600",
    moonstone: "fill-moonstone-600",
    orange: "fill-orange-600",
    peridot: "fill-peridot-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    red: "fill-red-600",
    rose: "fill-rose-600",
    ruby: "fill-ruby-600",
    russian: "fill-russian-600",
    scarlet: "fill-scarlet-600",
    stratos: "fill-stratos-600",
    sunstone: "fill-sunstone-600",
    sylver: "fill-sylver-600",
    teal: "fill-teal-600",
    violet: "fill-violet-600",
    yellow: "fill-yellow-600"
}