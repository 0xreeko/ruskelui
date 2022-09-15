import { ReactNode } from "react"
import { color } from "./Generics"

export interface RuiBreadcrumbsProps {
    color?: color
    route?: string
    fullWidth?: boolean
    isInactive?: boolean
    divider?: ReactNode
    children: ReactNode
}

export const hoverColor: { [key in color]: string } = {
    amber: "hover:text-amber-600",
    amethyst: "hover:text-amethyst-600",
    aqua: "hover:text-aqua-600",
    azure: "hover:text-azure-600",
    blue: "hover:text-blue-600",
    cyan: "hover:text-cyan-600",
    emerald: "hover:text-emerald-600",
    fuchsia: "hover:text-fuchsia-600",
    green: "hover:text-green-600",
    indigo: "hover:text-indigo-600",
    jade: "hover:text-jade-600",
    jasper: "hover:text-jasper-600",
    kunzite: "hover:text-kunzite-600",
    lime: "hover:text-lime-600",
    moonstone: "hover:text-moonstone-600",
    orange: "hover:text-orange-600",
    peridot: "hover:text-peridot-600",
    pink: "hover:text-pink-600",
    purple: "hover:text-purple-600",
    red: "hover:text-red-600",
    rose: "hover:text-rose-600",
    ruby: "hover:text-ruby-600",
    russian: "hover:text-russian-600",
    scarlet: "hover:text-scarlet-600",
    stratos: "hover:text-stratos-600",
    sunstone: "hover:text-sunstone-600",
    sylver: "hover:text-sylver-600",
    teal: "hover:text-teal-600",
    violet: "hover:text-violet-600",
    yellow: "hover:text-yellow-600"
}