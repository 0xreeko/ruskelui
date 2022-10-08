import { InputHTMLAttributes } from "react"
import { color } from "../types/Generics"

type variant = 'black' | 'white'

export interface RuiCheckboxProps extends InputHTMLAttributes<HTMLElement>{
    color: color
    variant: variant
}