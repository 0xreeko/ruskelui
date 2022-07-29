import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { colorType } from './utils'


export interface RootProps {
    children: ReactNode
    leftIcon: ReactNode
    fullWidth: boolean
    placeholder?: string
    color: colorType
}

const colorVar: { [key in colorType]: string[] } = {
    amber: ["focus:border-amber-400", "peer-focus:text-amber-400"],
    amethyst: ["focus:border-amethyst-400", "peer-focus:text-amethyst-400"],
    aqua: ["focus:border-aqua-400", "peer-focus:text-aqua-400"],
    azure: ["focus:border-azure-400", "peer-focus:text-azure-400"],
    blue: ["focus:border-blue-400", "peer-focus:text-blue-400"],
    cyan: ["focus:border-cyan-400", "peer-focus:text-cyan-400"],
    emerald: ["focus:border-emerald-400", "peer-focus:text-emerald-400"],
    fuchsia: ["focus:border-fuchsia-400", "peer-focus:text-fuchsia-400"],
    green: ["focus:border-green-400", "peer-focus:text-green-400"],
    indigo: ["focus:border-indigo-400", "peer-focus:text-indigo-400"],
    jade: ["focus:border-jade-400", "peer-focus:text-jade-400"],
    jasper: ["focus:border-jasper-400", "peer-focus:text-jasper-400"],
    kunzite: ["focus:border-kunzite-400", "peer-focus:text-kunzite-400"],
    lime: ["focus:border-lime-400", "peer-focus:text-lime-400"],
    moonstone: ["focus:border-moonstone-400", "peer-focus:text-moonstone-400"],
    orange: ["focus:border-orange-400", "peer-focus:text-orange-400"],
    peridot: ["focus:border-peridot-400", "peer-focus:text-peridot-400"],
    pink: ["focus:border-pink-400", "peer-focus:text-pink-400"],
    purple: ["focus:border-purple-400", "peer-focus:text-purple-400"],
    red: ["focus:border-red-400", "peer-focus:text-red-400"],
    rose: ["focus:border-rose-400", "peer-focus:text-rose-400"],
    ruby: ["focus:border-ruby-400", "peer-focus:text-ruby-400"],
    russian: ["focus:border-russian-400", "peer-focus:text-russian-400"],
    scarlet: ["focus:border-scarlet-400", "peer-focus:text-scarlet-400"],
    stratos: ["focus:border-stratos-400", "peer-focus:text-stratos-400"],
    sunstone: ["focus:border-sunstone-400", "peer-focus:text-sunstone-400"],
    sylver: ["focus:border-sylver-400", "peer-focus:text-sylver-400"],
    teal: ["focus:border-teal-400", "peer-focus:text-teal-400"],
    violet: ["focus:border-violet-400", "peer-focus:text-violet-400"],
    yellow: ["focus:border-yellow-400", "peer-focus:text-yellow-400"]
}

export const RuiSearch = ({ fullWidth, placeholder, color }: RootProps) => {
    return (
        // <input type="text" className={`peer pl-3 py-1 ${fullWidth ? "w-full" : "w-full max-w-xs"} transition-all duration-300 outline-none bg-transparent ring-[1px] text-sylver-600 ring-sylver-600 rounded-xl`} />
        <div className={clsx("relative flex items-center justify-between text-gray-400", `${fullWidth ? 'w-full' : 'max-w-lg'}`)}>
            {/* <SearchIcon className="absolute w-5 h-5 ml-3 text-gray-600 pointer-events-none dark:text-gray-300" /> */}
            <input
                type="text"
                placeholder={placeholder ? placeholder : "Search for ..."}
                className={clsx("p-1 pr-2 pl-8 w-[100%] outline-none rounded-lg peer duration-300 bg-black/20 backdrop-blur-sm transition border border-gray-800", `${color ? colorVar[color] : 'focus:border-[#6387f1]'}`)}
            />
            <svg className={clsx("absolute z-10 w-5 h-5 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100", `${color ? colorVar[color] : 'peer-focus:text-[#6387f1]'}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
    )
}