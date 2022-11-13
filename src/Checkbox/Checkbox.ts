import { InputHTMLAttributes } from "react"
import { color } from "../types/Generics"

type variant = 'neropside' | 'onyx'

type checkboxColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>

export interface RuiCheckboxProps extends InputHTMLAttributes<HTMLElement>{
    color: checkboxColorType
    variant: variant
}