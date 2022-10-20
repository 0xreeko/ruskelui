import { ReactNode } from "react"
import { color } from "../types/Generics"

type variant = "current" | "previous"

export interface RuiBreadcrumbsProps {
    color?: color
    route?: string
    fullWidth?: boolean
    divider?: ReactNode
    children: ReactNode
    variant?: variant
}