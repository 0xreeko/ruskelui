import { InputHTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type variant = "text" | "password" | "email" | "number" | "time" | "date"
type position = 'left' | 'right'
type inputColorType = Extract<color, 'amethyst' | 'lazure' | 'bayoux' | 'jade' | 'purpalite' | 'rosian' | 'scarlet' | 'sunstone' | 'tingual' | 'citrine' | 'neropside' | 'onyx'>

export interface RuiInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    placeholder: string
    fullWidth: boolean
    isDark: boolean
    color: inputColorType
    icon: ReactNode
    iconPosition?: position
    variant: variant
}

export const inputColor: { [key in inputColorType]: string[] } = {
    amethyst: ["hover:border-amethyst-500 group-focus-within:border-amethyst-500 group-hover:border-amethyst-500 selection:bg-amethyst-400/10 selection:text-amethyst-500", "peer-focus-within:text-amethyst-500 peer-hover:text-amethyst-500 text-amethyst-500"],
    lazure: ["hover:border-lazure-500 group-focus-within:border-lazure-500 group-hover:border-lazure-500 selection:bg-lazure-400/10 selection:text-lazure-500", "peer-focus-within:text-lazure-500 peer-hover:text-lazure-500 text-lazure-500"],
    bayoux: ["hover:border-bayoux-500 group-focus-within:border-bayoux-500 group-hover:border-bayoux-500 selection:bg-bayoux-400/10 selection:text-bayoux-500", "peer-focus-within:text-bayoux-500 peer-hover:text-bayoux-500 text-bayoux-500"],
    jade: ["hover:border-jade-500 group-focus-within:border-jade-500 group-hover:border-jade-500 selection:bg-jade-400/10 selection:text-jade-500", "peer-focus-within:text-jade-500 peer-hover:text-jade-500 text-jade-500"],
    purpalite: ["hover:border-purpalite-500 group-focus-within:border-purpalite-500 group-hover:border-purpalite-500 selection:bg-purpalite-400/10 selection:text-purpalite-500", "peer-focus-within:text-purpalite-500 peer-hover:text-purpalite-500 text-purpalite-500"],
    rosian: ["hover:border-rosian-500 group-focus-within:border-rosian-500 group-hover:border-rosian-500 selection:bg-rosian-400/10 selection:text-rosian-500", "peer-focus-within:text-rosian-500 peer-hover:text-rosian-500 text-rosian-500"],
    scarlet: ["hover:border-scarlet-500 group-focus-within:border-scarlet-500 group-hover:border-scarlet-500 selection:bg-scarlet-400/10 selection:text-scarlet-500", "peer-focus-within:text-scarlet-500 peer-hover:text-scarlet-500 text-scarlet-500"],
    sunstone: ["hover:border-sunstone-500 group-focus-within:border-sunstone-500 group-hover:border-sunstone-500 selection:bg-sunstone-400/10 selection:text-sunstone-500", "peer-focus-within:text-sunstone-500 peer-hover:text-sunstone-500 text-sunstone-500"],
    tingual: ["hover:border-tingual-500 group-focus-within:border-tingual-500 group-hover:border-tingual-500 selection:bg-tingual-400/10 selection:text-tingual-500", "peer-focus-within:text-tingual-500 peer-hover:text-tingual-500 text-tingual-500"],
    citrine: ["hover:border-citrine-500 group-focus-within:border-citrine-500 group-hover:border-citrine-500 selection:bg-citrine-400/10 selection:text-citrine-500", "peer-focus-within:text-citrine-500 peer-hover:text-citrine-500 text-citrine-500"],
    neropside:  ["hover:border-neropside group-focus-within:border-neropside group-hover:border-neropside selection:bg-neropside/10 selection:text-neropside", "group-focus-within:text-neropside/60"],
    onyx: ["hover:border-onyx group-focus-within:border-onyx group-hover:border-onyx selection:bg-onyx/10 selection:text-onyx", "group-focus-within:text-onyx/60"],
}