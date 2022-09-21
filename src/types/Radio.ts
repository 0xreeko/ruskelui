import { HTMLAttributes } from "react"

type variant = "base" | "ghost"

export interface RuiRadioProps extends HTMLAttributes<HTMLInputElement> {
    label: string
    value: string
    name: string
    variant?: variant
}