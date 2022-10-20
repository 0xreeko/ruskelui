import { HTMLAttributes } from "react"
import { color } from "../types/Generics"

export type toggleColor = Extract<color, 'amber' | 'amethyst' | 'aqua' | 'azure' | 'bayoux' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'indigo' | 'jade' | 'jasper' | 'kunzite' | 'labrodite' | 'lime' | 'orange' | 'peridot' | 'pink' | 'purple' | 'red' | 'rose' | 'ruby' | 'russian' | 'scarlet' | 'stratos' | 'sunstone' | 'teal' | 'violet' | 'yellow'>

export interface RuiToggleProps extends HTMLAttributes<HTMLElement> {
    color: toggleColor
    name: string
    disabled?: boolean
}