import { ReactNode } from "react"
import { color } from "../types/Generics"

type variant = "current" | "previous"
type breadCrumbsColor = Extract<color, 'amethyst' | 'lazure' | 'citrine' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>
type divider = "arrow" | 'slash'

export interface RuiBreadcrumbParentProps {
    route?: string
    fullWidth?: boolean
    children: ReactNode
    variant?: variant
}

export interface RuiBreadcrumbItemProps {
    /**
     * Choose a color from the RuskeUI palette
     */
    color?: breadCrumbsColor
    route?: string
    /**
     * Declare the divider between 'arrow' and 'slash'
     */
    divider: divider
    children: ReactNode
    /**
     * Declare the position of the item whether they are 'previous' routes to the 'current'
     */
    variant?: variant
    /**
     * A 16x16 SVG icon that represents the route the best.
     */
    icon?: ReactNode
}