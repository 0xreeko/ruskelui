import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type pillColorType = Extract<color, 'amethyst' | 'bayoux' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' >

export interface RuiPillProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode
    svg?: ReactNode
    color: pillColorType
}

export const colorVar: {[key in pillColorType]: string} = {
    amethyst: "bg-amethyst-400/20 text-amethyst-400 border border-amethyst-400",
    bayoux: "bg-bayoux-400/20 text-bayoux-400 border border-bayoux-400",
    lazure: "bg-lazure-400/20 text-lazure-400 border border-lazure-400",
    jade: "bg-jade-400/20 text-jade-400 border border-jade-400",
    tingual: "bg-tingual-400/20 text-tingual-400 border border-tingual-400",
    rosian: "bg-rosian-400/20 text-rosian-400 border border-rosian-400",
    scarlet: "bg-scarlet-400/20 text-scarlet-400 border border-scarlet-400",
    sunstone: "bg-sunstone-400/20 text-sunstone-400 border border-sunstone-400",
    purpalite: "bg-purpalite-400/20 text-purpalite-400 border border-purpalite-400",
    citrine: "bg-citrine-400/20 text-citrine-400 border border-citrine-400",
}