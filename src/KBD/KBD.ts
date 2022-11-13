import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type kbdColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>

export interface RuiKBDProps extends HTMLAttributes<HTMLElement>{
    children: ReactNode,
    color: kbdColorType
}