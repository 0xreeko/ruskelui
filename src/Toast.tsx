import React, {HTMLAttributes, ReactNode} from "react"
import clsx from 'clsx'
import { colorType } from "./utils";

export interface Props extends HTMLAttributes<HTMLElement> {
    color: colorType;
    position: "tl" | 't' | 'tr' | 'br' | 'b' | 'bl'
    title: string;
    content: ReactNode
}

const colorVar: {[key in colorType]: string[]} = {
  amber: ["from-amber-600/20", "text-amber-400"],
  amethyst: ["from-amethyst-600/20", "text-amethyst-400"],
  aqua: ["from-aqua-600/20", "text-aqua-400"],
  azure: ["from-azure-600/20", "text-azure-400"],
  blue: ["from-blue-600/20", "text-blue-400"],
  cyan: ["from-cyan-600/20", "text-cyan-400"],
  emerald: ["from-emerald-600/20", "text-emerald-400"],
  fuchsia: ["from-fuchsia-600/20", "text-fuchsia-400"],
  green: ["from-green-600/20", "text-green-400"],
  indigo: ["from-indigo-600/20", "text-indigo-400"],
  jade: ["from-jade-600/20", "text-jade-400"],
  jasper: ["from-jasper-600/20", "text-jasper-400"],
  kunzite: ["from-kunzite-600/20", "text-kunzite-400"],
  lime: ["from-lime-600/20", "text-lime-400"],
  moonstone: ["from-moonstone-600/20", "text-moonstone-400"],
  orange: ["from-orange-600/20", "text-orange-400"],
  peridot: ['from-peridot-600/20', 'text-peridot-400'],
  pink: ["from-pink-600/20", "text-pink-400"],
  purple: ["from-purple-600/20", "text-purple-400"],
  red: ["from-red-600/20", "text-red-400"],
  rose: ["from-rose-600/20", "text-rose-400"],
  ruby: ["from-ruby-600/20", "text-ruby-400"],
  russian: ["from-russian-600/20", "text-russian-400"],
  scarlet: ["from-scarlet-600/20", "text-scarlet-400"],
  stratos: ["from-stratos-600/20", "text-stratos-400"],
  sunstone: ["from-sunstone-600/20", "text-sunstone-400"],
  sylver: ["from-sylver-600/20", "text-sylver-400"],
  teal: ["from-teal-600/20", "text-teal-400"],
  violet: ["from-violet-600/20", "text-violet-400"],
  yellow: ["from-yellow-600/20", "text-yellow-400"]
}

export const RuiToast = ({title = 'Transaction Unsuccessful!', content, color = "peridot"}: Props) => {

    return (
        <div role={'alert'} tabIndex={0} title="toast" className={clsx("z-10 max-w-md p-3 rounded-lg h-fit sm:h-24 bg-opacity-40 bg-gradient-to-r via-stratos-400/20 to-stratos-400/10 text-sylver-100", `${colorVar[color][0]}`)}>
          <div className="flex items-center h-full">
            {/* icon */}
            <div className={clsx("mr-2", `${colorVar[color][1]}`)}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
            </div>
            {/* content */}
            <div>
              <p className={clsx("font-semibold", `${colorVar[color][1]}`)}>{title}</p>
              <p>{content}</p>
            </div>
          </div>
        </div>
    )
}