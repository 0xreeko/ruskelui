import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type pillColorType = Extract<color, 'amethyst' | 'bayoux' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' >

export interface RuiPillProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
    svg?: ReactNode
    color: pillColorType
}

export const colorVar: {[key in pillColorType]: string} = {
    amethyst: "bg-amethyst-400/20 text-amethyst-400 hover:text-amethyst-300",
    bayoux: "bg-bayoux-400/20 text-bayoux-400 hover:text-bayoux-300",
    lazure: "bg-lazure-400/20 text-lazure-400 hover:text-lazure-300",
    jade: "bg-jade-400/20 text-jade-400 hover:text-jade-300",
    tingual: "bg-tingual-400/20 text-tingual-400 hover:text-tingual-300",
    rosian: "bg-rosian-400/20 text-rosian-400 hover:text-rosian-300",
    scarlet: "bg-scarlet-400/20 text-scarlet-400 hover:text-scarlet-300",
    sunstone: "bg-sunstone-400/20 text-sunstone-400 hover:text-sunstone-300",
    purpalite: "bg-purpalite-400/20 text-purpalite-400 hover:text-purpalite-300",
    citrine: "bg-citrine-400/20 text-citrine-400 hover:text-citrine-300",
}