import React, { HTMLAttributes, ReactNode } from "react";
import { colorType } from "./utils";
// @ts-ignore
import styles from './modules/Input.module.css'

export interface Props extends HTMLAttributes<HTMLInputElement> {
    /** Provide a static label for Input */
    label?: string;
    /** Provide a static placeholder for Input */
    placeholder?: string;
    /** Provide a dynamic label for Input */
    floatingLabel?: string;
    /** Provide an ID for Input */
    name: string;
    fullWidth?: boolean;
    /** Choose from RuskelUI's Neonic colours + Tailwind's native colours! */
    color: colorType;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const colorVar: { [key in colorType]: string[] } = {
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

// const OTP = () => (<div className="">OTP input</div>)
// const Textarea = () => (<div className="">Textarea input</div>)
// const Password = () => (<div className="">password input</div>)

export const RuiInput = ({ label, placeholder, floatingLabel, name = "username", color = "kunzite", fullWidth = false, leftIcon, rightIcon}: Props) => {
    return (
        <div className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
            {
                floatingLabel ? (
                    <>
                        <input id={name} type="text" className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${colorVar[color][0]} ${placeholder && !floatingLabel ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                        <label htmlFor={name} className="absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6">{floatingLabel}</label>
                        <span className={`absolute inline-flex z-10 right-0 mr-2 pointer-events-none transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${color ? colorVar[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                    </>
                ) : (
                    <>
                        <input id={name} type="text" className={`peer p-1 ${leftIcon ? "pl-9" : "pl-2"} ${rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${colorVar[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                        <label htmlFor={name} className="absolute text-sm select-none left-3 -top-6">{label}</label>
                        <span className={`absolute inline-flex z-10 left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${color ? colorVar[color][1] : 'peer-focus:text-[#6387f1]'}`}>{leftIcon}</span>
                        <span className={`absolute inline-flex z-10 right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${color ? colorVar[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                    </>
                )
            }
            <span className="sr-only">Input</span>
        </div>
    )
}

// RuiInput.Password = Password
// RuiInput.OTP = OTP
// RuiInput.Textarea = Textarea

export default RuiInput