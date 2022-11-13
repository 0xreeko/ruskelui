import { InputHTMLAttributes } from "react"
import { color } from "../types/Generics"

type variant = "base" | "bordered" | "ghost"
type radioColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>

export const radioColor: { [key in radioColorType]: string[] } = {
    amethyst: ["bg-amethyst-500", "border-amethyst-500"],
    bayoux: ["bg-bayoux-500", "border-bayoux-500"],
    citrine: ["bg-citrine-500", "border-citrine-500"],
    jade: ["bg-jade-500", "border-jade-500"],
    lazure: ["bg-lazure-500", "border-lazure-500"],
    purpalite: ["bg-purpalite-500", "border-purpalite-500"],
    rosian: ["bg-rosian-500", "border-rosian-500"],
    scarlet: ["bg-scarlet-500", "border-scarlet-500"],
    sunstone: ["bg-sunstone-500", "border-sunstone-500"],
    tingual: ["bg-tingual-500", "border-tingual-500"],
}

export interface RuiRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    name: string
    variant?: variant
    color?: radioColorType
}