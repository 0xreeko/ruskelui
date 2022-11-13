import { HTMLAttributes } from "react"
import { color } from "../types/Generics"

type barDirection = 'left' | 'right'
type variant = 'bar' | 'donut'
type progressColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>

export interface RuiProgressProps extends HTMLAttributes<HTMLElement> {
    percentage: number
    color: progressColorType
    name: string
    isGradient?: boolean
    startColor?: progressColorType
    endColor?: progressColorType
    barDirection?: barDirection
    variant: variant
}

export const barColor: {[key in progressColorType]: string[]} = {
    amethyst: ["bg-amethyst-400", "from-amethyst-400", "to-amethyst-600"],
    bayoux: ["bg-bayoux-400", "from-bayoux-400", "to-bayoux-600"],
    citrine: ["bg-citrine-400", "from-citrine-400", "to-citrine-600"],
    jade: ["bg-jade-400", "from-jade-400", "to-jade-600"],
    lazure: ["bg-lazure-400", "from-lazure-400", "to-lazure-600"],
    purpalite: ["bg-purpalite-400", "from-purpalite-400", "to-purpalite-600"],
    rosian: ["bg-rosian-400", "from-rosian-400", "to-rosian-600"],
    scarlet: ["bg-scarlet-400", "from-scarlet-400", "to-scarlet-600"],
    sunstone: ["bg-sunstone-400", "from-sunstone-400", "to-sunstone-600"],
    tingual: ["bg-tingual-400", "from-tingual-400", "to-tingual-600"],
}
  
export const donutColor: { [key in progressColorType]: string } = {
    amethyst: "text-amethyst-400",
    bayoux: "text-bayoux-400",
    citrine: "text-citrine-400",
    jade: "text-jade-400",
    lazure: "text-lazure-400",
    purpalite: "text-purpalite-400",
    rosian: "text-rosian-400",
    scarlet: "text-scarlet-400",
    sunstone: "text-sunstone-400",
    tingual: "text-tingual-400",
}

export const positionVar: {[key in barDirection]: string} = {
    right: "bg-gradient-to-r",
    left: "bg-gradient-to-l",
}