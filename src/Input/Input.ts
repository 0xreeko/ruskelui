import { InputHTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type variant = "text" | "password" | "email" | "number" | "time" | "date"
type position = 'left' | 'right'

export interface RuiInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    placeholder: string
    fullWidth: boolean
    isDark: boolean
    color: color
    icon: ReactNode
    iconPosition?: position
    name: string
    variant: variant
}

export const inputColor: { [key in color]: string[] } = {
    amethyst: ["group-focus-within:ring-amethyst-400 dark:focus:ring-amethyst-400", "group-:text-amethyst-400"],
    lazure: ["group-focus-within:ring-lazure-400 dark:focus:ring-lazure-400", "group-focus-within:text-lazure-400"],
    bayoux: ["group-focus-within:ring-bayoux-400 dark:focus:ring-bayoux-400", "group-focus-within:text-bayoux-400"],
    jade: ["group-focus-within:ring-jade-400 dark:focus:ring-jade-400", "group-focus-within:text-jade-400"],
    purpalite: ["group-focus-within:ring-purpalite-400 dark:focus:ring-purpalite-400", "group-focus-within:text-purpalite-400"],
    rosian: ["group-focus-within:ring-rosian-400 dark:focus:ring-rosian-400", "group-focus-within:text-rosian-400"],
    scarlet: ["group-focus-within:ring-scarlet-400 dark:focus:ring-scarlet-400", "group-focus-within:text-scarlet-400"],
    obsidian: ["group-focus-within:ring-obsidian-400 dark:focus:ring-obsidian-400", "group-focus-within:text-obsidian-400"],
    sunstone: ["group-focus-within:ring-sunstone-400 dark:focus:ring-sunstone-400", "group-focus-within:text-sunstone-400"],
    tingual: ["group-focus-within:ring-tingual-400 dark:focus:ring-tingual-400", "group-focus-within:text-tingual-400"],
    citrine: ["group-focus-within:ring-citrine-400 dark:focus:ring-citrine-400", "group-focus-within:text-citrine-400"],
    neropside:  ["group-focus-within:ring-neropside/60 dark:focus:ring-neropside/60", "group-focus-within:text-neropside/60"],
    onyx: ["group-focus-within:ring-onyx/60 dark:focus:ring-onyx/60", "group-focus-within:text-onyx/60"],
}