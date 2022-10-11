import { ButtonHTMLAttributes, ReactNode } from "react";
import { color } from "../types/Generics";

type variant = "filled" | "ghost" | "text" | "icon"
type size = "sm" | "lg"

export interface RuiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    /** Render an SVG icon to the left side of your button */
    leftIcon?: ReactNode
    /** Render an SVG icon to the right side of your button */
    rightIcon?: ReactNode
    /** Available colour ways to style your Button */
    color?: color;
    /** Provide a `size` for your Button */ 
    size: size
    /** Select a `variant` for your Button */
    variant: variant
}

export const sizing: {[key in size]: string} = {
    "sm": "h-9 px-3 py-1.5",
    "lg": "h-11 px-5 py-2.5",
}

export const threeDeeColor: { [key in color]: string[] } = {
    amber: ["bg-amber-500", "bg-amber-400"],
    amethyst: ["bg-amethyst-500", "bg-amethyst-400"],
    aqua: ["bg-aqua-500", "bg-aqua-400"],
    azure: ["bg-azure-500", "bg-azure-400"],
    blue: ["bg-blue-500", "bg-blue-400"],
    cyan: ["bg-cyan-500", "bg-cyan-400"],
    emerald: ["bg-emerald-500", "bg-emerald-400"],
    fuchsia: ["bg-fuchsia-500", "bg-fuchsia-400"],
    green: ["bg-green-500", "bg-green-400"],
    indigo: ["bg-indigo-500", "bg-indigo-400"],
    jade: ["bg-jade-500", "bg-jade-400"],
    jasper: ["bg-jasper-500", "bg-jasper-400"],
    kunzite: ["bg-kunzite-500", "bg-kunzite-400"],
    lime: ["bg-lime-500", "bg-lime-400"],
    moonstone: ["bg-moonstone-500", "bg-moonstone-400"],
    orange: ["bg-orange-500", "bg-orange-400"],
    peridot: ["bg-peridot-500", "bg-peridot-400"],
    pink: ["bg-pink-500", "bg-pink-400"],
    purple: ["bg-purple-500", "bg-purple-400"],
    red: ["bg-red-500", "bg-red-400"],
    rose: ["bg-rose-500", "bg-rose-400"],
    ruby: ["bg-ruby-500", "bg-ruby-400"],
    russian: ["bg-russian-500", "bg-russian-400"],
    scarlet: ["bg-scarlet-500", "bg-scarlet-400"],
    stratos: ["bg-stratos-500", "bg-stratos-400"],
    sunstone: ["bg-sunstone-500", "bg-sunstone-400"],
    sylver: ["bg-sylver-500", "bg-sylver-400"],
    teal: ["bg-teal-500", "bg-teal-400"],
    violet: ["bg-violet-500", "bg-violet-400"],
    yellow: ["bg-yellow-500", "bg-yellow-400"],
}
export const baseButtonStyles: { [key in color]: string } = {
    amber: "bg-amber-500 active:bg-amber-600",
    amethyst: "bg-amethyst-500 active:bg-amethyst-600",
    aqua: "bg-aqua-500 active:bg-aqua-600",
    azure: "bg-azure-500 active:bg-azure-600",
    blue: "bg-blue-500 active:bg-blue-600",
    cyan: "bg-cyan-500 active:bg-cyan-600",
    emerald: "bg-emerald-500 active:bg-emerald-600",
    fuchsia: "bg-fuchsia-500 active:bg-fuchsia-600",
    green: "bg-green-500 active:bg-green-600",
    indigo: "bg-indigo-500 active:bg-indigo-600",
    jade: "bg-jade-500 active:bg-jade-600",
    jasper: "bg-jasper-500 active:bg-jasper-600",
    kunzite: "bg-kunzite-500 active:bg-kunzite-600",
    lime: "bg-lime-500 active:bg-lime-600",
    moonstone: "bg-moonstone-500 active:bg-moonstone-600",
    orange: "bg-orange-500 active:bg-orange-600",
    peridot: "bg-peridot-500 active:bg-peridot-600",
    pink: "bg-pink-500 active:bg-pink-600",
    purple: "bg-purple-500 active:bg-purple-600",
    red: "bg-red-500 active:bg-red-600",
    rose: "bg-rose-500 active:bg-rose-600",
    ruby: "bg-ruby-500 active:bg-ruby-600",
    russian: "bg-russian-500 active:bg-russian-600",
    scarlet: "bg-scarlet-500 active:bg-scarlet-600",
    stratos: "bg-stratos-500 active:bg-stratos-600",
    sunstone: "bg-sunstone-500 active:bg-sunstone-600",
    sylver: "bg-sylver-500 active:bg-sylver-600",
    teal: "bg-teal-500 active:bg-teal-600",
    violet: "bg-violet-500 active:bg-violet-600",
    yellow: "bg-yellow-500 active:bg-yellow-600",
}
  
export const ghostButtonStyles: { [key in color]: string } = {
    amber: "border-amber-500 text-amber-500 hover:border-amber-400/60 hover:text-amber-400/60 active:bg-amber-400/5",
    amethyst: "border-amethyst-500 text-amethyst-500 hover:border-amethyst-400/60 hover:text-amethyst-400/60 active:bg-amethyst-400/5",
    aqua: "border-aqua-500 text-aqua-500 hover:border-aqua-400/60 hover:text-aqua-400/60 active:bg-aqua-400/5",
    azure: "border-azure-500 text-azure-500 hover:border-azure-400/60 hover:text-azure-400/60 active:bg-azure-400/5",
    blue: "border-blue-500 text-blue-500 hover:border-blue-400/60 hover:text-blue-400/60 active:bg-blue-400/5",
    cyan: "border-cyan-500 text-cyan-500 hover:border-cyan-400/60 hover:text-cyan-400/60 active:bg-cyan-400/5",
    emerald: "border-emerald-500 text-emerald-500 hover:border-emerald-400/60 hover:text-emerald-400/60 active:bg-emerald-400/5",
    fuchsia: "border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-400/60 hover:text-fuchsia-400/60 active:bg-fuchsia-400/5",
    green: "border-green-500 text-green-500 hover:border-green-400/60 hover:text-green-400/60 active:bg-green-400/5",
    indigo: "border-indigo-500 text-indigo-500 hover:border-indigo-400/60 hover:text-indigo-400/60 active:bg-indigo-400/5",
    jade: "border-jade-500 text-jade-500 hover:border-jade-400/60 hover:text-jade-400/60 active:bg-jade-400/5",
    jasper: "border-jasper-500 text-jasper-500 hover:border-jasper-400/60 hover:text-jasper-400/60 active:bg-jasper-400/5",
    kunzite: "border-kunzite-500 text-kunzite-500 hover:border-kunzite-400/60 hover:text-kunzite-400/60 active:bg-kunzite-400/5",
    lime: "border-lime-500 text-lime-500 hover:border-lime-400/60 hover:text-lime-400/60 active:bg-lime-400/5",
    moonstone: "border-moonstone-500 text-moonstone-500 hover:border-moonstone-400/60 hover:text-moonstone-400/60 active:bg-moonstone-400/5",
    orange: "border-orange-500 text-orange-500 hover:border-orange-400/60 hover:text-orange-400/60 active:bg-orange-400/5",
    peridot: "border-peridot-500 text-peridot-500 hover:border-peridot-400/60 hover:text-peridot-400/60 active:bg-peridot-400/5",
    pink: "border-pink-500 text-pink-500 hover:border-pink-400/60 hover:text-pink-400/60 active:bg-pink-400/5",
    purple: "border-purple-500 text-purple-500 hover:border-purple-400/60 hover:text-purple-400/60 active:bg-purple-400/5",
    red: "border-red-500 text-red-500 hover:border-red-400/60 hover:text-red-400/60 active:bg-red-400/5",
    rose: "border-rose-500 text-rose-500 hover:border-rose-400/60 hover:text-rose-400/60 active:bg-rose-400/5",
    ruby: "border-ruby-500 text-ruby-500 hover:border-ruby-400/60 hover:text-ruby-400/60 active:bg-ruby-400/5",
    russian: "border-russian-500 text-russian-500 hover:border-russian-400/60 hover:text-russian-400/60 active:bg-russian-400/5",
    scarlet: "border-scarlet-500 text-scarlet-500 hover:border-scarlet-400/60 hover:text-scarlet-400/60 active:bg-scarlet-400/5",
    stratos: "border-stratos-500 text-stratos-500 hover:border-stratos-400/60 hover:text-stratos-400/60 active:bg-stratos-400/5",
    sunstone: "border-sunstone-500 text-sunstone-500 hover:border-sunstone-400/60 hover:text-sunstone-400/60 active:bg-sunstone-400/5",
    sylver: "border-sylver-500 text-sylver-500 hover:border-sylver-400/60 hover:text-sylver-400/60 active:bg-sylver-400/5",
    teal: "border-teal-500 text-teal-500 hover:border-teal-400/60 hover:text-teal-400/60 active:bg-teal-400/5",
    violet: "border-violet-500 text-violet-500 hover:border-violet-400/60 hover:text-violet-400/60 active:bg-violet-400/5",
    yellow: "border-yellow-500 text-yellow-500 hover:border-yellow-400/60 hover:text-yellow-400/60 active:bg-yellow-400/5",
}
  
export const textButtonStyles: { [key in color]: string } = {
    amber: "text-amber-400 hover:bg-amber-400/10 hover:text-amber-400 active:bg-amber-400/20",
    amethyst: "text-amethyst-400 hover:bg-amethyst-400/10 hover:text-amethyst-400 active:bg-amethyst-400/20",
    aqua: "text-aqua-400 hover:bg-aqua-400/10 hover:text-aqua-400 active:bg-aqua-400/20",
    azure: "text-azure-400 hover:bg-azure-400/10 hover:text-azure-400 active:bg-azure-400/20",
    blue: "text-blue-400 hover:bg-blue-400/10 hover:text-blue-400 active:bg-blue-400/20",
    cyan: "text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 active:bg-cyan-400/20",
    emerald: "text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400 active:bg-emerald-400/20",
    fuchsia: "text-fuchsia-400 hover:bg-fuchsia-400/10 hover:text-fuchsia-400 active:bg-fuchsia-400/20",
    green: "text-green-400 hover:bg-green-400/10 hover:text-green-400 active:bg-green-400/20",
    indigo: "text-indigo-400 hover:bg-indigo-400/10 hover:text-indigo-400 active:bg-indigo-400/20",
    jade: "text-jade-400 hover:bg-jade-400/10 hover:text-jade-400 active:bg-jade-400/20",
    jasper: "text-jasper-400 hover:bg-jasper-400/10 hover:text-jasper-400 active:bg-jasper-400/20",
    kunzite: "text-kunzite-400 hover:bg-kunzite-400/10 hover:text-kunzite-400 active:bg-kunzite-400/20",
    lime: "text-lime-400 hover:bg-lime-400/10 hover:text-lime-400 active:bg-lime-400/20",
    moonstone: "text-moonstone-400 hover:bg-moonstone-400/10 hover:text-moonstone-400 active:bg-moonstone-400/20",
    orange: "text-orange-400 hover:bg-orange-400/10 hover:text-orange-400 active:bg-orange-400/20",
    peridot: "text-peridot-400 hover:bg-peridot-400/10 hover:text-peridot-400 active:bg-peridot-400/20",
    pink: "text-pink-400 hover:bg-pink-400/10 hover:text-pink-400 active:bg-pink-400/20",
    purple: "text-purple-400 hover:bg-purple-400/10 hover:text-purple-400 active:bg-purple-400/20",
    red: "text-red-400 hover:bg-red-400/10 hover:text-red-400 active:bg-red-400/20",
    rose: "text-rose-400 hover:bg-rose-400/10 hover:text-rose-400 active:bg-rose-400/20",
    ruby: "text-ruby-400 hover:bg-ruby-400/10 hover:text-ruby-400 active:bg-ruby-400/20",
    russian: "text-russian-400 hover:bg-russian-400/10 hover:text-russian-400 active:bg-russian-400/20",
    scarlet: "text-scarlet-400 hover:bg-scarlet-400/10 hover:text-scarlet-400 active:bg-scarlet-400/20",
    stratos: "text-stratos-400 hover:bg-stratos-400/10 hover:text-stratos-400 active:bg-stratos-400/20",
    sunstone: "text-sunstone-400 hover:bg-sunstone-400/10 hover:text-sunstone-400 active:bg-sunstone-400/20",
    sylver: "text-sylver-400 hover:bg-sylver-400/10 hover:text-sylver-400 active:bg-sylver-400/20",
    teal: "text-teal-400 hover:bg-teal-400/10 hover:text-teal-400 active:bg-teal-400/20",
    violet: "text-violet-400 hover:bg-violet-400/10 hover:text-violet-400 active:bg-violet-400/20",
    yellow: "text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-400 active:bg-yellow-400/20",
}