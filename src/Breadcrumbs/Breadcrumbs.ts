import { ReactNode } from "react"
import { color } from "../types/Generics"

type variant = "current" | "previous"
type breadCrumbsColor = Extract<color, 'amethyst' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' >

export interface RuiBreadcrumbsProps {
    color?: breadCrumbsColor
    route?: string
    fullWidth?: boolean
    divider?: ReactNode
    children: ReactNode
    variant?: variant
}