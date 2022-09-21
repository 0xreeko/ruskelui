import { ReactNode } from "react"
import { color } from "./Generics"

export interface RuiSelectProps {
        label: string
        children: ReactNode
}

export interface RuiSelectChildProps {
    value: string
    color: color
}