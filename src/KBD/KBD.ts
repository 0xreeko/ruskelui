import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

export interface RuiKBDProps extends HTMLAttributes<HTMLElement>{
    children: ReactNode,
    color: color
}