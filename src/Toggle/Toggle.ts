import { HTMLAttributes } from "react"
import { color } from "../types/Generics"

export type toggleColor = Extract<color, 'amethyst' | 'bayoux' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'rubelle' | 'scarlet' | 'sunstone' | 'tingual' >

export interface RuiToggleProps extends HTMLAttributes<HTMLElement> {
    color: toggleColor
    name: string
    disabled?: boolean
}

export const checkedColor: { [key in toggleColor]: string } = {
    amethyst: "peer-checked:bg-amethyst-500",
    bayoux: "peer-checked:bg-bayoux-500",
    lazure: "peer-checked:bg-lazure-500",
    citrine: "peer-checked:bg-citrine-500",
    jade: "peer-checked:bg-jade-500",
    purpalite: "peer-checked:bg-purpalite-500",
    rosian: "peer-checked:bg-rosian-500",
    rubelle: "peer-checked:bg-rubelle-500",
    scarlet: "peer-checked:bg-scarlet-500",
    sunstone: "peer-checked:bg-sunstone-500",
    tingual: "peer-checked:bg-tingual-500",
}