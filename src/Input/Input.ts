import { HTMLAttributes, ReactNode } from "react"
import { color } from "../types/Generics"

type variant = "base" | "file" | "number" | "otp" | "password" | "textarea"

export interface RuiInputProps extends HTMLAttributes<HTMLInputElement>{
    label: string
    placeholder: string
    floatingLabel: string
    fullWidth: boolean
    color: color
    leftIcon: ReactNode
    rightIcon: ReactNode
    name: string
    variant: variant
}

export const inputColor: { [key in color]: string[] } = {
    amber: ["focus:ring-amber-400 dark:focus:ring-amber-400", "peer-focus:text-amber-400"],
    amethyst: ["focus:ring-amethyst-400 dark:focus:ring-amethyst-400", "peer-focus:text-amethyst-400"],
    aqua: ["focus:ring-aqua-400 dark:focus:ring-aqua-400", "peer-focus:text-aqua-400"],
    azure: ["focus:ring-azure-400 dark:focus:ring-azure-400", "peer-focus:text-azure-400"],
    blue: ["focus:ring-blue-400 dark:focus:ring-blue-400", "peer-focus:text-blue-400"],
    cyan: ["focus:ring-cyan-400 dark:focus:ring-cyan-400", "peer-focus:text-cyan-400"],
    emerald: ["focus:ring-emerald-400 dark:focus:ring-emerald-400", "peer-focus:text-emerald-400"],
    fuchsia: ["focus:ring-fuchsia-400 dark:focus:ring-fuchsia-400", "peer-focus:text-fuchsia-400"],
    green: ["focus:ring-green-400 dark:focus:ring-green-400", "peer-focus:text-green-400"],
    indigo: ["focus:ring-indigo-400 dark:focus:ring-indigo-400", "peer-focus:text-indigo-400"],
    jade: ["focus:ring-jade-400 dark:focus:ring-jade-400", "peer-focus:text-jade-400"],
    jasper: ["focus:ring-jasper-400 dark:focus:ring-jasper-400", "peer-focus:text-jasper-400"],
    kunzite: ["focus:ring-kunzite-400 dark:focus:ring-kunzite-400", "peer-focus:text-kunzite-400"],
    lime: ["focus:ring-lime-400 dark:focus:ring-lime-400", "peer-focus:text-lime-400"],
    moonstone: ["focus:ring-moonstone-400 dark:focus:ring-moonstone-400", "peer-focus:text-moonstone-400"],
    orange: ["focus:ring-orange-400 dark:focus:ring-orange-400", "peer-focus:text-orange-400"],
    peridot: ["focus:ring-peridot-400 dark:focus:ring-peridot-400", "peer-focus:text-peridot-400"],
    pink: ["focus:ring-pink-400 dark:focus:ring-pink-400", "peer-focus:text-pink-400"],
    purple: ["focus:ring-purple-400 dark:focus:ring-purple-400", "peer-focus:text-purple-400"],
    red: ["focus:ring-red-400 dark:focus:ring-red-400", "peer-focus:text-red-400"],
    rose: ["focus:ring-rose-400 dark:focus:ring-rose-400", "peer-focus:text-rose-400"],
    ruby: ["focus:ring-ruby-400 dark:focus:ring-ruby-400", "peer-focus:text-ruby-400"],
    russian: ["focus:ring-russian-400 dark:focus:ring-russian-400", "peer-focus:text-russian-400"],
    scarlet: ["focus:ring-scarlet-400 dark:focus:ring-scarlet-400", "peer-focus:text-scarlet-400"],
    stratos: ["focus:ring-stratos-400 dark:focus:ring-stratos-400", "peer-focus:text-stratos-400"],
    sunstone: ["focus:ring-sunstone-400 dark:focus:ring-sunstone-400", "peer-focus:text-sunstone-400"],
    sylver: ["focus:ring-sylver-400 dark:focus:ring-sylver-400", "peer-focus:text-sylver-400"],
    teal: ["focus:ring-teal-400 dark:focus:ring-teal-400", "peer-focus:text-teal-400"],
    violet: ["focus:ring-violet-400 dark:focus:ring-violet-400", "peer-focus:text-violet-400"],
    yellow: ["focus:ring-yellow-400 dark:focus:ring-yellow-400", "peer-focus:text-yellow-400"]
}