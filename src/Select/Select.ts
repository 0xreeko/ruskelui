import { ReactNode } from "react"
import { color } from "../types/Generics"

type selectColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>

export interface RuiSelectProps {
    label: string
    children: ReactNode
    selectedIcon: ReactNode
    markerColor: selectColorType
}

export interface RuiSelectChildProps {
    value: string
    color: selectColorType
    disabled?: boolean
}

export const selectItemColor: { [key in selectColorType]: string } = {
    amethyst: "hover:bg-amethyst-400",
    bayoux: "hover:bg-bayoux-400",
    citrine: "hover:bg-citrine-400",
    lazure: "hover:bg-lazure-400",
    jade: "hover:bg-jade-400",
    purpalite: "hover:bg-purpalite-400",
    rosian: "hover:bg-rosian-400",
    scarlet: "hover:bg-scarlet-400",
    sunstone: "hover:bg-sunstone-400",
    tingual: "hover:bg-tingual-400",
}

export const selectMarkerColor: { [key in selectColorType]: string } = {
    amethyst: "text-amethyst-400",
    bayoux: "text-bayoux-400",
    citrine: "text-citrine-400",
    lazure: "text-lazure-400",
    jade: "text-jade-400",
    purpalite: "text-purpalite-400",
    rosian: "text-rosian-400",
    scarlet: "text-scarlet-400",
    sunstone: "text-sunstone-400",
    tingual: "text-tingual-400",
}