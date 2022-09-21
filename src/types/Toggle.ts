import { HTMLAttributes } from "react"
import { color } from "./Generics"

export interface RuiToggleProps extends HTMLAttributes<HTMLElement> {
    color: color
    name: string
}