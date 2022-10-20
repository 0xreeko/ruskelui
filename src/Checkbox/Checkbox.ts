import { InputHTMLAttributes } from "react"
import { color } from "../types/Generics"

type variant = 'black' | 'white'

type checkboxColor = Extract<color, 'amber' | 'amethyst' | 'aqua' | 'azure' | 'bayoux' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'indigo' | 'jade' | 'jasper' | 'kunzite' | 'labrodite' | 'lime' | 'orange' | 'peridot' | 'pink' | 'purple' | 'red' | 'rose' | 'ruby' | 'russian' | 'scarlet' | 'stratos' | 'sunstone' | 'teal' | 'violet' | 'yellow'>

export interface RuiCheckboxProps extends InputHTMLAttributes<HTMLElement>{
    color: color
    variant: variant
}