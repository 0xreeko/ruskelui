import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

export interface RuiDropdownProps extends HTMLAttributes<HTMLElement> {
    isSub?: boolean
    children: ReactNode 
    leftIcon?: ReactNode 
    rightIcon?: ReactNode 
    menu?: string 
    idx?: string 
    route?: string 
    color?: color
}

// type RuiDropdownWrapperProps = Pick<RuiDropdownProps, "children">
// type RuiDropdownInvokerProps = Pick<RuiDropdownProps, "children" | "menu" | "isSub">
// type RuiDropdownMenuProps = Pick<RuiDropdownProps, "children">
// type RuiDropdownItemProps = Pick<RuiDropdownProps, "leftIcon" | "rightIcon" | "children" | "isSub" | "menu">

export const hoverColor: { [key in color]: string } = {
    amber: "hover:bg-amber-400/20 hover:text-amber-400 ",
    amethyst: "hover:bg-amethyst-400/20 hover:text-amethyst-400 ",
    aqua: "hover:bg-aqua-400/20 hover:text-aqua-400 ",
    azure: "hover:bg-azure-400/20 hover:text-azure-400 ",
    blue: "hover:bg-blue-400/20 hover:text-blue-400 ",
    cyan: "hover:bg-cyan-400/20 hover:text-cyan-400 ",
    emerald: "hover:bg-emerald-400/20 hover:text-emerald-400 ",
    fuchsia: "hover:bg-fuchsia-400/20 hover:text-fuchsia-400 ",
    green: "hover:bg-green-400/20 hover:text-green-400 ",
    indigo: "hover:bg-indigo-400/20 hover:text-indigo-400 ",
    jade: "hover:bg-jade-400/20 hover:text-jade-400 ",
    jasper: "hover:bg-jasper-400/20 hover:text-jasper-400 ",
    kunzite: "hover:bg-kunzite-400/20 hover:text-kunzite-400 ",
    lime: "hover:bg-lime-400/20 hover:text-lime-400 ",
    moonstone: "hover:bg-moonstone-400/20 hover:text-moonstone-400 ",
    orange: "hover:bg-orange-400/20 hover:text-orange-400 ",
    peridot: "hover:bg-peridot-400/20 hover:text-peridot-400 ",
    pink: "hover:bg-pink-400/20 hover:text-pink-400 ",
    purple: "hover:bg-purple-400/20 hover:text-purple-400 ",
    red: "hover:bg-red-400/20 hover:text-red-400 ",
    rose: "hover:bg-rose-400/20 hover:text-rose-400 ",
    ruby: "hover:bg-ruby-400/20 hover:text-ruby-400 ",
    russian: "hover:bg-russian-400/20 hover:text-russian-400 ",
    scarlet: "hover:bg-scarlet-400/20 hover:text-scarlet-400 ",
    stratos: "hover:bg-stratos-400/20 hover:text-stratos-400 ",
    sunstone: "hover:bg-sunstone-400/20 hover:text-sunstone-400 ",
    sylver: "hover:bg-sylver-400/20 hover:text-sylver-400 ",
    teal: "hover:bg-teal-400/20 hover:text-teal-400 ",
    violet: "hover:bg-violet-400/20 hover:text-violet-400 ",
    yellow: "hover:bg-yellow-400/20 hover:text-yellow-400 "
}