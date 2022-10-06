import { InputHTMLAttributes } from "react"
import { color } from "../types/Generics"

type variant = "base" | "bordered" | "ghost"

export interface RuiRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string
    name: string
    variant?: variant
    color?: color
}