import { InputHTMLAttributes } from "react"

type variant = "base" | "ghost"

export interface RuiRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    value: string
    name: string
    variant?: variant
}