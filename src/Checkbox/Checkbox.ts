import { ReactNode } from "react"
import { color } from "../types/Generics"

type variant = 'black' | 'white'

export interface RuiCheckboxProps {
    children: ReactNode
    color: color
    variant: variant
    strikeThrough: boolean
    defaultChecked: boolean
}