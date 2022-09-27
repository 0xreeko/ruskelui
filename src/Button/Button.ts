import { HTMLAttributes, ReactNode } from "react";
import { color, direction } from "../types/Generics";

type variant = "Base" | "Ghost" | "Gradient" | "Text" | "3D" | "3DGradient"

type size = "small" | "xlarge" | "large" | 'base'

export interface RuiButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

    svg?: ReactNode;

    startColor?: color

    endColor?: color

    /** Available colour ways to style your Button */
    color?: color;

    /** Provide a size for Button */
    size: size

    direction?: direction

    isDisabled?: boolean

    ripples?: boolean

    variant?: variant
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
export const baseColor: { [key in color]: string } = {
    amber: "bg-amber-500 hover:bg-amber-500/90 active:bg-amber-400/60 disabled:bg-amber-300",
    amethyst: "bg-amethyst-500 hover:bg-amethyst-500/90 active:bg-amethyst-400/60 disabled:bg-amethyst-300",
    aqua: "bg-aqua-500 hover:bg-aqua-500/90 active:bg-aqua-400/60 disabled:bg-aqua-300",
    azure: "bg-azure-500 hover:bg-azure-500/90 active:bg-azure-400/60 disabled:bg-azure-300",
    blue: "bg-blue-500 hover:bg-blue-500/90 active:bg-blue-400/60 disabled:bg-blue-300",
    cyan: "bg-cyan-500 hover:bg-cyan-500/90 active:bg-cyan-400/60 disabled:bg-cyan-300",
    emerald: "bg-emerald-500 hover:bg-emerald-500/90 active:bg-emerald-400/60 disabled:bg-emerald-300",
    fuchsia: "bg-fuchsia-500 hover:bg-fuchsia-500/90 active:bg-fuchsia-400/60 disabled:bg-fuchsia-300",
    green: "bg-green-500 hover:bg-green-500/90 active:bg-green-400/60 disabled:bg-green-300",
    indigo: "bg-indigo-500 hover:bg-indigo-500/90 active:bg-indigo-400/60 disabled:bg-indigo-300",
    jade: "bg-jade-500 hover:bg-jade-500/90 active:bg-jade-400/60 disabled:bg-jade-300",
    jasper: "bg-jasper-500 hover:bg-jasper-500/90 active:bg-jasper-400/60 disabled:bg-jasper-300",
    kunzite: "bg-kunzite-500 hover:bg-kunzite-500/90 active:bg-kunzite-400/60 disabled:bg-kunzite-300",
    lime: "bg-lime-500 hover:bg-lime-500/90 active:bg-lime-400/60 disabled:bg-lime-300",
    moonstone: "bg-moonstone-500 hover:bg-moonstone-500/90 active:bg-moonstone-400/60 disabled:bg-moonstone-300",
    orange: "bg-orange-500 hover:bg-orange-500/90 active:bg-orange-400/60 disabled:bg-orange-300",
    peridot: "bg-peridot-500 hover:bg-peridot-500/90 active:bg-peridot-400/60 disabled:bg-peridot-300",
    pink: "bg-pink-500 hover:bg-pink-500/90 active:bg-pink-400/60 disabled:bg-pink-300",
    purple: "bg-purple-500 hover:bg-purple-500/90 active:bg-purple-400/60 disabled:bg-purple-400",
    red: "bg-red-500 hover:bg-red-500/90 active:bg-red-400/60 disabled:bg-red-300",
    rose: "bg-rose-500 hover:bg-rose-500/90 active:bg-rose-400/60 disabled:bg-rose-300",
    ruby: "bg-ruby-500 hover:bg-ruby-500/90 active:bg-ruby-400/60 disabled:bg-ruby-300",
    russian: "bg-russian-500 hover:bg-russian-500/90 active:bg-russian-400/60 disabled:bg-russian-300",
    scarlet: "bg-scarlet-500 hover:bg-scarlet-500/90 active:bg-scarlet-400/60 disabled:bg-scarlet-300",
    stratos: "bg-stratos-500 hover:bg-stratos-500/90 active:bg-stratos-400/60 disabled:bg-stratos-300",
    sunstone: "bg-sunstone-500 hover:bg-sunstone-500/90 active:bg-sunstone-400/60 disabled:bg-sunstone-300",
    sylver: "bg-sylver-500 hover:bg-sylver-500/90 active:bg-sylver-400/60 disabled:bg-sylver-300",
    teal: "bg-teal-500 hover:bg-teal-500/90 active:bg-teal-400/60 disabled:bg-teal-300",
    violet: "bg-violet-500 hover:bg-violet-500/90 active:bg-violet-400/60 disabled:bg-violet-300",
    yellow: "bg-yellow-500 hover:bg-yellow-500/90 active:bg-yellow-400/60 disabled:bg-yellow-300",
}
  
export const ghostColor: { [key in color]: string } = {
    amber: "border-amber-600 text-amber-600 hover:text-amber-600/80 hover:border-amber-600/80 border active:ring-2 active:ring-amber-400/10",
    amethyst: "border-amethyst-600 text-amethyst-600 hover:text-amethyst-600/80 hover:border-amethyst-600/80 border active:ring-2 active:ring-amethyst-400/10",
    aqua: "border-aqua-600 text-aqua-600 hover:text-aqua-600/80 hover:border-aqua-600/80 border active:ring-2 active:ring-aqua-400/10",
    azure: "border-azure-600 text-azure-600 hover:text-azure-600/80 hover:border-azure-600/80 border active:ring-2 active:ring-azure-400/10",
    blue: "border-blue-600 text-blue-600 hover:text-blue-600/80 hover:border-blue-600/80 border active:ring-2 active:ring-blue-400/10",
    cyan: "border-cyan-600 text-cyan-600 hover:text-cyan-600/80 hover:border-cyan-600/80 border active:ring-2 active:ring-cyan-400/10",
    emerald: "border-emerald-600 text-emerald-600 hover:text-emerald-600/80 hover:border-emerald-600/80 border active:ring-2 active:ring-emerald-400/10",
    fuchsia: "border-fuchsia-600 text-fuchsia-600 hover:text-fuchsia-600/80 hover:border-fuchsia-600/80 border active:ring-2 active:ring-fuchsia-400/10",
    green: "border-green-600 text-green-600 hover:text-green-600/80 hover:border-green-600/80 border active:ring-2 active:ring-green-400/10",
    indigo: "border-indigo-600 text-indigo-600 hover:text-indigo-600/80 hover:border-indigo-600/80 border active:ring-2 active:ring-indigo-400/10",
    jade: "border-jade-600 text-jade-600 hover:text-jade-600/80 hover:border-jade-600/80 border active:ring-2 active:ring-jade-400/10",
    jasper: "border-jasper-600 text-jasper-600 hover:text-jasper-600/80 hover:border-jasper-600/80 border active:ring-2 active:ring-jasper-400/10",
    kunzite: "border-kunzite-600 text-kunzite-600 hover:text-kunzite-600/80 hover:border-kunzite-600/80 border active:ring-2 active:ring-kunzite-400/10",
    lime: "border-lime-600 text-lime-600 hover:text-lime-600/80 hover:border-lime-600/80 border active:ring-2 active:ring-lime-400/10",
    moonstone: "border-moonstone-600 text-moonstone-600 hover:text-moonstone-600/80 hover:border-moonstone-600/80 border active:ring-2 active:ring-moonstone-400/10",
    orange: "border-orange-600 text-orange-600 hover:text-orange-600/80 hover:border-orange-600/80 border active:ring-2 active:ring-orange-400/10",
    peridot: "border-peridot-600 text-peridot-600 hover:text-peridot-600/80 hover:border-peridot-600/80 border active:ring-2 active:ring-peridot-400/10",
    pink: "border-pink-600 text-pink-600 hover:text-pink-600/80 hover:border-pink-600/80 border active:ring-2 active:ring-pink-400/10",
    purple: "border-purple-600 text-purple-600 hover:text-purple-600/80 hover:border-purple-600/80 border active:ring-2 active:ring-purple-400/10",
    red: "border-red-600 text-red-600 hover:text-red-600/80 hover:border-red-600/80 border active:ring-2 active:ring-red-400/10",
    rose: "border-rose-600 text-rose-600 hover:text-rose-600/80 hover:border-rose-600/80 border active:ring-2 active:ring-rose-400/10",
    ruby: "border-ruby-600 text-ruby-600 hover:text-ruby-600/80 hover:border-ruby-600/80 border active:ring-2 active:ring-ruby-400/10",
    russian: "border-russian-600 text-russian-600 hover:text-russian-600/80 hover:border-russian-600/80 border active:ring-2 active:ring-russian-400/10",
    scarlet: "border-scarlet-600 text-scarlet-600 hover:text-scarlet-600/80 hover:border-scarlet-600/80 border active:ring-2 active:ring-scarlet-400/10",
    stratos: "border-stratos-600 text-stratos-600 hover:text-stratos-600/80 hover:border-stratos-600/80 border active:ring-2 active:ring-stratos-400/10",
    sunstone: "border-sunstone-600 text-sunstone-600 hover:text-sunstone-600/80 hover:border-sunstone-600/80 border active:ring-2 active:ring-sunstone-400/10",
    sylver: "border-sylver-600 text-sylver-600 hover:text-sylver-600/80 hover:border-sylver-600/80 border active:ring-2 active:ring-sylver-400/10",
    teal: "border-teal-600 text-teal-600 hover:text-teal-600/80 hover:border-teal-600/80 border active:ring-2 active:ring-teal-400/10",
    violet: "border-violet-600 text-violet-600 hover:text-violet-600/80 hover:border-violet-600/80 border active:ring-2 active:ring-violet-400/10",
    yellow: "border-yellow-600 text-yellow-600 hover:text-yellow-600/80 hover:border-yellow-600/80 border active:ring-2 active:ring-yellow-400/10",
}
  
export const textColor: { [key in color]: string } = {
    amber: "text-amber-600 dark:text-amber-400 hover:bg-amber-400/10 active:bg-amber-400/20 dark:hover:bg-amber-400/20 dark:active:bg-amber-400/30",
    amethyst: "text-amethyst-600 dark:text-amethyst-400 hover:bg-amethyst-400/10 active:bg-amethyst-400/20 dark:hover:bg-amethyst-400/20 dark:active:bg-amethyst-400/30",
    aqua: "text-aqua-600 dark:text-aqua-400 hover:bg-aqua-400/10 active:bg-aqua-400/20 dark:hover:bg-aqua-400/20 dark:active:bg-aqua-400/30",
    azure: "text-azure-600 dark:text-azure-400 hover:bg-azure-400/10 active:bg-azure-400/20 dark:hover:bg-azure-400/20 dark:active:bg-azure-400/30",
    blue: "text-blue-600 dark:text-blue-400 hover:bg-blue-400/10 active:bg-blue-400/20 dark:hover:bg-blue-400/20 dark:active:bg-blue-400/30",
    cyan: "text-cyan-600 dark:text-cyan-400 hover:bg-cyan-400/10 active:bg-cyan-400/20 dark:hover:bg-cyan-400/20 dark:active:bg-cyan-400/30",
    emerald: "text-emerald-600 dark:text-emerald-400 hover:bg-emerald-400/10 active:bg-emerald-400/20 dark:hover:bg-emerald-400/20 dark:active:bg-emerald-400/30",
    fuchsia: "text-fuchsia-600 dark:text-fuchsia-400 hover:bg-fuchsia-400/10 active:bg-fuchsia-400/20 dark:hover:bg-fuchsia-400/20 dark:active:bg-fuchsia-400/30",
    green: "text-green-600 dark:text-green-400 hover:bg-green-400/10 active:bg-green-400/20 dark:hover:bg-green-400/20 dark:active:bg-green-400/30",
    indigo: "text-indigo-600 dark:text-indigo-400 hover:bg-indigo-400/10 active:bg-indigo-400/20 dark:hover:bg-indigo-400/20 dark:active:bg-indigo-400/30",
    jade: "text-jade-600 dark:text-jade-400 hover:bg-jade-400/10 active:bg-jade-400/20 dark:hover:bg-jade-400/20 dark:active:bg-jade-400/30",
    jasper: "text-jasper-600 dark:text-jasper-400 hover:bg-jasper-400/10 active:bg-jasper-400/20 dark:hover:bg-jasper-400/20 dark:active:bg-jasper-400/30",
    kunzite: "text-kunzite-600 dark:text-kunzite-400 hover:bg-kunzite-400/10 active:bg-kunzite-400/20 dark:hover:bg-kunzite-400/20 dark:active:bg-kunzite-400/30",
    lime: "text-lime-600 dark:text-lime-400 hover:bg-lime-400/10 active:bg-lime-400/20 dark:hover:bg-lime-400/20 dark:active:bg-lime-400/30",
    moonstone: "text-moonstone-600 dark:text-moonstone-400 hover:bg-moonstone-400/10 active:bg-moonstone-400/20 dark:hover:bg-moonstone-400/20 dark:active:bg-moonstone-400/30",
    orange: "text-orange-600 dark:text-orange-400 hover:bg-orange-400/10 active:bg-orange-400/20 dark:hover:bg-orange-400/20 dark:active:bg-orange-400/30",
    peridot: "text-peridot-600 dark:text-peridot-400 hover:bg-peridot-400/10 active:bg-peridot-400/20 dark:hover:bg-peridot-400/20 dark:active:bg-peridot-400/30",
    pink: "text-pink-600 dark:text-pink-400 hover:bg-pink-400/10 active:bg-pink-400/20 dark:hover:bg-pink-400/20 dark:active:bg-pink-400/30",
    purple: "text-purple-600 dark:text-purple-400 hover:bg-purple-400/10 active:bg-purple-400/20 dark:hover:bg-purple-400/20 dark:active:bg-purple-400/30",
    red: "text-red-600 dark:text-red-400 hover:bg-red-400/10 active:bg-red-400/20 dark:hover:bg-red-400/20 dark:active:bg-red-400/30",
    rose: "text-rose-600 dark:text-rose-400 hover:bg-rose-400/10 active:bg-rose-400/20 dark:hover:bg-rose-400/20 dark:active:bg-rose-400/30",
    ruby: "text-ruby-600 dark:text-ruby-400 hover:bg-ruby-400/10 active:bg-ruby-400/20 dark:hover:bg-ruby-400/20 dark:active:bg-ruby-400/30",
    russian: "text-russian-600 dark:text-russian-400 hover:bg-russian-400/10 active:bg-russian-400/20 dark:hover:bg-russian-400/20 dark:active:bg-russian-400/30",
    scarlet: "text-scarlet-600 dark:text-scarlet-400 hover:bg-scarlet-400/10 active:bg-scarlet-400/20 dark:hover:bg-scarlet-400/20 dark:active:bg-scarlet-400/30",
    stratos: "text-stratos-600 dark:text-stratos-400 hover:bg-stratos-400/10 active:bg-stratos-400/20 dark:hover:bg-stratos-400/20 dark:active:bg-stratos-400/30",
    sunstone: "text-sunstone-600 dark:text-sunstone-400 hover:bg-sunstone-400/10 active:bg-sunstone-400/20 dark:hover:bg-sunstone-400/20 dark:active:bg-sunstone-400/30",
    sylver: "text-sylver-600 dark:text-sylver-400 hover:bg-sylver-400/10 active:bg-sylver-400/20 dark:hover:bg-sylver-400/20 dark:active:bg-sylver-400/30",
    teal: "text-teal-600 dark:text-teal-400 hover:bg-teal-400/10 active:bg-teal-400/20 dark:hover:bg-teal-400/20 dark:active:bg-teal-400/30",
    violet: "text-violet-600 dark:text-violet-400 hover:bg-violet-400/10 active:bg-violet-400/20 dark:hover:bg-violet-400/20 dark:active:bg-violet-400/30",
    yellow: "text-yellow-600 dark:text-yellow-400 hover:bg-yellow-400/10 active:bg-yellow-400/20 dark:hover:bg-yellow-400/20 dark:active:bg-yellow-400/30",
}
  
export const gradientColor: { [key in color]: string[] } = {
    amber: ["from-amber-400", "to-amber-600"],
    amethyst: ["from-amethyst-400", "to-amethyst-600"],
    aqua: ["from-aqua-400", "to-aqua-600"],
    azure: ["from-azure-400", "to-azure-600"],
    blue: ["from-blue-400", "to-blue-600"],
    cyan: ["from-cyan-400", "to-cyan-600"],
    emerald: ["from-emerald-400", "to-emerald-600"],
    fuchsia: ["from-fuchsia-400", "to-fuchsia-600"],
    green: ["from-green-400", "to-green-600"],
    indigo: ["from-indigo-400", "to-indigo-600"],
    jade: ["from-jade-400", "to-jade-600"],
    jasper: ["from-jasper-400", "to-jasper-600"],
    kunzite: ["from-kunzite-400", "to-kunzite-600"],
    lime: ["from-lime-400", "to-lime-600"],
    moonstone: ["from-moonstone-400", "to-moonstone-600"],
    orange: ["from-orange-400", "to-orange-600"],
    peridot: ["from-peridot-400", "to-peridot-600"],
    pink: ["from-pink-400", "to-pink-600"],
    purple: ["from-purple-400", "to-purple-600"],
    red: ["from-red-400", "to-red-600"],
    rose: ["from-rose-400", "to-rose-600"],
    ruby: ["from-ruby-400", "to-ruby-600"],
    russian: ["from-russian-400", "to-russian-600"],
    scarlet: ["from-scarlet-400", "to-scarlet-600"],
    stratos: ["from-stratos-400", "to-stratos-600"],
    sunstone: ["from-sunstone-400", "to-sunstone-600"],
    sylver: ["from-sylver-400", "to-sylver-600"],
    teal: ["from-teal-400", "to-teal-600"],
    violet: ["from-violet-400", "to-violet-600"],
    yellow: ["from-yellow-400", "to-yellow-600"],
}

export const threeDeeGeeColor: { [key in color]: string[] } = {
    amber: ["from-amber-400", "to-amber-500", "from-amber-500" ,"to-amber-600"],
    amethyst: ["from-amethyst-400", "to-amethyst-500", "from-amethyst-500" ,"to-amethyst-600"],
    aqua: ["from-aqua-400", "to-aqua-500", "from-aqua-500" ,"to-aqua-600"],
    azure: ["from-azure-400", "to-azure-500", "from-azure-500" ,"to-azure-600"],
    blue: ["from-blue-400", "to-blue-500", "from-blue-500" ,"to-blue-600"],
    cyan: ["from-cyan-400", "to-cyan-500", "from-cyan-500" ,"to-cyan-600"],
    emerald: ["from-emerald-400", "to-emerald-500", "from-emerald-500" ,"to-emerald-600"],
    fuchsia: ["from-fuchsia-400", "to-fuchsia-500", "from-fuchsia-500" ,"to-fuchsia-600"],
    green: ["from-green-400", "to-green-500", "from-green-500" ,"to-green-600"],
    indigo: ["from-indigo-400", "to-indigo-500", "from-indigo-500" ,"to-indigo-600"],
    jade: ["from-jade-400", "to-jade-500", "from-jade-500" ,"to-jade-600"],
    jasper: ["from-jasper-400", "to-jasper-500", "from-jasper-500" ,"to-jasper-600"],
    kunzite: ["from-kunzite-400", "to-kunzite-500", "from-kunzite-500" ,"to-kunzite-600"],
    lime: ["from-lime-400", "to-lime-500", "from-lime-500" ,"to-lime-600"],
    moonstone: ["from-moonstone-400", "to-moonstone-500", "from-moonstone-500" ,"to-moonstone-600"],
    orange: ["from-orange-400", "to-orange-500", "from-orange-500" ,"to-orange-600"],
    peridot: ["from-peridot-400", "to-peridot-500", "from-peridot-500" ,"to-peridot-600"],
    pink: ["from-pink-400", "to-pink-500", "from-pink-500" ,"to-pink-600"],
    purple: ["from-purple-400", "to-purple-500", "from-purple-500" ,"to-purple-600"],
    red: ["from-red-400", "to-red-500", "from-red-500" ,"to-red-600"],
    rose: ["from-rose-400", "to-rose-500", "from-rose-500" ,"to-rose-600"],
    ruby: ["from-ruby-400", "to-ruby-500", "from-ruby-500" ,"to-ruby-600"],
    russian: ["from-russian-400", "to-russian-500", "from-russian-500" ,"to-russian-600"],
    scarlet: ["from-scarlet-400", "to-scarlet-500", "from-scarlet-500" ,"to-scarlet-600"],
    stratos: ["from-stratos-400", "to-stratos-500", "from-stratos-500" ,"to-stratos-600"],
    sunstone: ["from-sunstone-400", "to-sunstone-500", "from-sunstone-500" ,"to-sunstone-600"],
    sylver: ["from-sylver-400", "to-sylver-500", "from-sylver-500" ,"to-sylver-600"],
    teal: ["from-teal-400", "to-teal-500", "from-teal-500" ,"to-teal-600"],
    violet: ["from-violet-400", "to-violet-500", "from-violet-500" ,"to-violet-600"],
    yellow: ["from-yellow-400", "to-yellow-500", "from-yellow-500" ,"to-yellow-600"],
}
  
export const gradientFlow: { [key in direction]: string } = {
    "bottom" : "bg-gradient-to-b",
    "bottomLeft" : "bg-gradient-to-bl",
    "bottomRight" : "bg-gradient-to-br",
    "left" : "bg-gradient-to-l",
    "right" : "bg-gradient-to-r",
    "top" : "bg-gradient-to-t",
    "topLeft" : "bg-gradient-to-tl",
    "topRight" : "bg-gradient-to-tr",
  }