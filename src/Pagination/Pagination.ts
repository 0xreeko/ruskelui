import { HTMLAttributes } from "react";
import { color } from "../types/Generics";

export interface RuiPaginationProps extends HTMLAttributes<HTMLElement> {
    color: color
}

export const colorVar: { [key in color]: string[]} = {
    amber: ["hover:bg-amber-400", "hover:text-amber-500"],
    amethyst: ["hover:bg-amethyst-400", "hover:text-amethyst-500"],
    aqua: ["hover:bg-aqua-400", "hover:text-aqua-500"],
    azure: ["hover:bg-azure-400", "hover:text-azure-500"],
    blue: ["hover:bg-blue-400", "hover:text-blue-500"],
    cyan: ["hover:bg-cyan-400", "hover:text-cyan-500"],
    emerald: ["hover:bg-emerald-400", "hover:text-emerald-500"],
    fuchsia: ["hover:bg-fuchsia-400", "hover:text-fuchsia-500"],
    green: ["hover:bg-green-400", "hover:text-green-500"],
    indigo: ["hover:bg-indigo-400", "hover:text-indigo-500"],
    jade: ["hover:bg-jade-400", "hover:text-jade-500"],
    jasper: ["hover:bg-jasper-400", "hover:text-jasper-500"],
    kunzite: ["hover:bg-kunzite-400", "hover:text-kunzite-500"],
    lime: ["hover:bg-lime-400", "hover:text-lime-500"],
    moonstone: ["hover:bg-moonstone-400", "hover:text-moonstone-500"],
    orange: ["hover:bg-orange-400", "hover:text-orange-500"],
    peridot: ["hover:bg-peridot-400", "hover:text-peridot-500"],
    pink: ["hover:bg-pink-400", "hover:text-pink-500"],
    purple: ["hover:bg-purple-400", "hover:text-purple-500"],
    red: ["hover:bg-red-400", "hover:text-red-500"],
    rose: ["hover:bg-rose-400", "hover:text-rose-500"],
    ruby: ["hover:bg-ruby-400", "hover:text-ruby-500"],
    russian: ["hover:bg-russian-400", "hover:text-russian-500"],
    scarlet: ["hover:bg-scarlet-400", "hover:text-scarlet-500"],
    stratos: ["hover:bg-stratos-400", "hover:text-stratos-500"],
    sunstone: ["hover:bg-sunstone-400", "hover:text-sunstone-500"],
    sylver: ["hover:bg-sylver-400", "hover:text-sylver-500"],
    teal: ["hover:bg-teal-400", "hover:text-teal-500"],
    violet: ["hover:bg-violet-400", "hover:text-violet-500"],
    yellow: ["hover:bg-yellow-400", "hover:text-yellow-500"]
}