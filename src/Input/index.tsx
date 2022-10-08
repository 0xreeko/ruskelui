import React from "react";
import { RuiInputProps, inputColor } from "./Input";
// @ts-ignore
import styles from './modules/Input.module.css'

// const OTP = () => (<div className="">OTP input</div>)
const Textarea = () => (
    <textarea name="" id="" cols={40} rows={10} className="px-2 py-3 border-2 border-gray-300 rounded-lg outline-none dark:text-sylver-100 bg-white/20 dark:border-gray-800 dark:bg-black/20 focus:ring-indigo-500 focus:ring-4"></textarea>
)
// const Password = () => (<div className="">password input</div>)

export const RuiInput = ({ label, placeholder, floatingLabel, name = "username", color = "kunzite", fullWidth = false, leftIcon, rightIcon}: RuiInputProps) => {
    return (
        <div className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
            {
                floatingLabel ? (
                    <>
                        <input id={name} type="text" className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder && !floatingLabel ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                        <label htmlFor={name} className="absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6">{floatingLabel}</label>
                        <span className={`absolute inline-flex z-10 right-0 mr-2 pointer-events-none transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                    </>
                ) : (
                    <>
                        <input id={name} type="text" className={`peer p-1 ${leftIcon ? "pl-9" : "pl-2"} ${rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                        <label htmlFor={name} className="absolute text-sm select-none left-3 -top-6">{label}</label>
                        <span className={`absolute inline-flex z-10 left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{leftIcon}</span>
                        <span className={`absolute inline-flex z-10 right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                    </>
                )
            }
            <span className="sr-only">Input</span>
        </div>
    )
}

// RuiInput.Password = Password
// RuiInput.OTP = OTP
RuiInput.Textarea = Textarea

export default RuiInput