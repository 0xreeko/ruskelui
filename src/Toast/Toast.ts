import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

export type position = 
    | "topLeft"
    | "topRight"
    | "bottomRight"
    | "bottomLeft"
type theme = 
    | "light"
    | "dark"
type variant = 
    | "success"
    | "info"
    | "warn"
    | "error"
    | "colored"
type toastColorType = Extract<color, 'amethyst' | 'bayoux' | 'citrine' | 'jade' | 'lazure' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual'>


    export interface RuiToastProps {
        id: string,
        content: RuiToastDeetsProps
    }
    
    export interface RuiToastDeetsProps extends HTMLAttributes<HTMLElement> {
        icon?: ReactNode
        variant: variant
        message: ReactNode
        color?: toastColorType
        theme: theme
        position: position
        closeOnClick?: boolean
        timer?: number
    }

export const colorVar: {[key in toastColorType]: string[]} = {
    amethyst: ["bg-amethyst-600/20", "border-amethyst-400"],
    bayoux: ["bg-bayoux-600/20", "border-bayoux-400"],
    citrine: ["bg-citrine-600/20", "border-citrine-400"],
    jade: ["bg-jade-600/20", "border-jade-400"],
    lazure: ["bg-lazure-600/20", "border-lazure-400"],
    purpalite: ["bg-purpalite-600/20", "border-purpalite-400"],
    rosian: ["bg-rosian-600/20", "border-rosian-400"],
    scarlet: ["bg-scarlet-600/20", "border-scarlet-400"],
    sunstone: ["bg-sunstone-600/20", "border-sunstone-400"],
    tingual: ["bg-tingual-600/20", "border-tingual-400"],
  }