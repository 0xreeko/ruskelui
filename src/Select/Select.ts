import { ReactNode } from "react"
import { color } from "../types/Generics"

type selectColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>

export interface RuiSelectProps {
    label: string
    children: ReactNode
    selectedIcon: ReactNode
}

export interface RuiSelectChildProps {
    value: string
    color: selectColorType
    disabled?: boolean
}

export const selectColor: { [key in selectColorType]: string } = {
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