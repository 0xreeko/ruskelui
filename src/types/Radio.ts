import { HTMLAttributes } from "react"

export interface RuiRadioProps extends HTMLAttributes<HTMLInputElement> {
    label: string
    value: string
}