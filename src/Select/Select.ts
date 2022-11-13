import { ReactNode } from "react"
import { color } from "../types/Generics"

type selectColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>

export interface RuiSelectProps {
    label: string
    children: ReactNode
    selectedIcon: ReactNode
}

export interface RuiSelectChildProps {
    value: string
    color: selectColorType
    disabled?: boolean
}