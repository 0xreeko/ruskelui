import { ReactNode } from "react"
import { color } from "../types/Generics"

export type position = "left" | "top" | "right" | "bottom" | "bottomRight" | "bottomLeft"

export type dropdownColorType = Extract<color, 'amethyst' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' >

export interface RuiDropdownProps {
    children: ReactNode
    navToDrop?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    color: dropdownColorType
    disabled?: boolean
}

export const positioning: { [key in position]: string } = {
    left: "-top-1.5 -translate-x-full -left-3",
    top: "-translate-y-full -left-1/2",
    right: "-top-1.5 translate-x-1/2",
    bottom: "top-6 -left-1/2",
    bottomRight: "top-6 right-0",
    bottomLeft: "top-6 left-0",
}

export const hoverColor: { [key in dropdownColorType]: string } = {
    amethyst: "hover:bg-amethyst-400 dark:hover:bg-amethyst-400/20 dark:hover:text-amethyst-400",
    citrine: "hover:bg-citrine-400 dark:hover:bg-citrine-400/20 dark:hover:text-citrine-400",
    lazure: "hover:bg-lazure-400 dark:hover:bg-lazure-400/20 dark:hover:text-lazure-400",
    scarlet: "hover:bg-scarlet-400 dark:hover:bg-scarlet-400/20 dark:hover:text-scarlet-400",
    jade: "hover:bg-jade-400 dark:hover:bg-jade-400/20 dark:hover:text-jade-400",
    sunstone: "hover:bg-sunstone-400 dark:hover:bg-sunstone-400/20 dark:hover:text-sunstone-400",
    purpalite: "hover:bg-purpalite-400 dark:hover:bg-purpalite-400/20 dark:hover:text-purpalite-400",
    tingual: "hover:bg-tingual-400 dark:hover:bg-tingual-400/20 dark:hover:text-tingual-400",
    rosian: "hover:bg-rosian-400 dark:hover:bg-rosian-400/20 dark:hover:text-rosian-400",
}