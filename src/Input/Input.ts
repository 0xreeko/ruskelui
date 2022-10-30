import { InputHTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type variant = "text" | "password" | "email" |"number" | "time"

export interface RuiInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    placeholder: string
    fullWidth: boolean
    isDark: boolean
    color: color
    leftIcon: ReactNode
    rightIcon: ReactNode
    name: string
    variant: variant
}

export const inputColor: { [key in color]: string[] } = {
    amber: ["group-focus-within:ring-amber-400 dark:focus:ring-amber-400", "group-focus-within:text-amber-400"],
    amethyst: ["group-focus-within:ring-amethyst-400 dark:focus:ring-amethyst-400", "group-:text-amethyst-400"],
    aqua: ["group-focus-within:ring-aqua-400 dark:focus:ring-aqua-400", "group-focus-within:text-aqua-400"],
    azure: ["group-focus-within:ring-azure-400 dark:focus:ring-azure-400", "group-focus-within:text-azure-400"],
    bayoux: ["group-focus-within:ring-bayoux-400 dark:focus:ring-bayoux-400", "group-focus-within:text-bayoux-400"],
    blue: ["group-focus-within:ring-blue-400 dark:focus:ring-blue-400", "group-focus-within:text-blue-400"],
    cyan: ["group-focus-within:ring-cyan-400 dark:focus:ring-cyan-400", "group-focus-within:text-cyan-400"],
    emerald: ["group-focus-within:ring-emerald-400 dark:focus:ring-emerald-400", "group-focus-within:text-emerald-400"],
    fuchsia: ["group-focus-within:ring-fuchsia-400 dark:focus:ring-fuchsia-400", "group-focus-within:text-fuchsia-400"],
    green: ["group-focus-within:ring-green-400 dark:focus:ring-green-400", "group-focus-within:text-green-400"],
    indigo: ["group-focus-within:ring-indigo-400 dark:focus:ring-indigo-400", "group-focus-within:text-indigo-400"],
    jade: ["group-focus-within:ring-jade-400 dark:focus:ring-jade-400", "group-focus-within:text-jade-400"],
    jasper: ["group-focus-within:ring-jasper-400 dark:focus:ring-jasper-400", "group-focus-within:text-jasper-400"],
    kunzite: ["group-focus-within:ring-kunzite-400 dark:focus:ring-kunzite-400", "group-focus-within:text-kunzite-400"],
    labrodite: ["group-focus-within:ring-labrodite-400 dark:focus:ring-labrodite-400", "group-focus-within:text-labrodite-400"],
    lime: ["group-focus-within:ring-lime-400 dark:focus:ring-lime-400", "group-focus-within:text-lime-400"],
    moonstone: ["group-focus-within:ring-moonstone-400 dark:focus:ring-moonstone-400", "group-focus-within:text-moonstone-400"],
    orange: ["group-focus-within:ring-orange-400 dark:focus:ring-orange-400", "group-focus-within:text-orange-400"],
    peridot: ["group-focus-within:ring-peridot-400 dark:focus:ring-peridot-400", "group-focus-within:text-peridot-400"],
    pink: ["group-focus-within:ring-pink-400 dark:focus:ring-pink-400", "group-focus-within:text-pink-400"],
    purple: ["group-focus-within:ring-purple-400 dark:focus:ring-purple-400", "group-focus-within:text-purple-400"],
    red: ["group-focus-within:ring-red-400 dark:focus:ring-red-400", "group-focus-within:text-red-400"],
    rose: ["group-focus-within:ring-rose-400 dark:focus:ring-rose-400", "group-focus-within:text-rose-400"],
    ruby: ["group-focus-within:ring-ruby-400 dark:focus:ring-ruby-400", "group-focus-within:text-ruby-400"],
    russian: ["group-focus-within:ring-russian-400 dark:focus:ring-russian-400", "group-focus-within:text-russian-400"],
    scarlet: ["group-focus-within:ring-scarlet-400 dark:focus:ring-scarlet-400", "group-focus-within:text-scarlet-400"],
    stratos: ["group-focus-within:ring-stratos-400 dark:focus:ring-stratos-400", "group-focus-within:text-stratos-400"],
    sunstone: ["group-focus-within:ring-sunstone-400 dark:focus:ring-sunstone-400", "group-focus-within:text-sunstone-400"],
    sylver: ["group-focus-within:ring-sylver-400 dark:focus:ring-sylver-400", "group-focus-within:text-sylver-400"],
    teal: ["group-focus-within:ring-teal-400 dark:focus:ring-teal-400", "group-focus-within:text-teal-400"],
    violet: ["group-focus-within:ring-violet-400 dark:focus:ring-violet-400", "group-focus-within:text-violet-400"],
    yellow: ["group-focus-within:ring-yellow-400 dark:focus:ring-yellow-400", "group-focus-within:text-yellow-400"]
}