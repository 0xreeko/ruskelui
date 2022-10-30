import React, { useState } from "react";
import { RuiInputProps, inputColor } from "./Input";
import { hiddenEye, visibleEye } from "./InputIcons";
// @ts-ignore
import styles from './Input.module.css'

export const RuiInput = ({ id, disabled, isDark, label, placeholder, pattern, max, min, variant, value, name, color = "kunzite", fullWidth = false, leftIcon, rightIcon, ...props }: RuiInputProps) => {
    const [visible, setVisible] = useState(false)
    switch (variant) {
        case "text":
            return (
                <div id={id} className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"} ${disabled ? 'disabled:pointer-events-none' : ''}`} >
                    <input id={name} type="text" value={value} className={`peer py-1 ${leftIcon ? "pl-9" : "pl-2"} ${rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg ${disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} disabled={disabled} />
                    <span className={`absolute inline-flex left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{leftIcon}</span>
                    <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'password':
            return (
                <div id={id} className={`relative group flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"} ${disabled ? 'disabled:pointer-events-none' : ''}`} >
                    <input id={name} type={visible ? 'text' : 'password'} className={`box-border py-1 pl-2 pr-9 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"} ${disabled ? 'disabled:pointer-events-none' : ''}`} disabled={disabled} />
                    <button onClick={() => setVisible(prev => (prev = !prev))} className={`absolute inline-flex right-0 mr-2 scale-75 ${inputColor[color][1]}`}>{!visible ? hiddenEye : visibleEye}</button>
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'number':
            return (
                <input type="number" id={id} pattern={pattern} min={min} max={max} className="box-border block px-3 py-1 border rounded-md appearance-none" />
            )
        case 'time':
            return (
                <input type="time" id={id} data-isdark={`${isDark}`} className={`${styles.clocker}`} {...props} />
            )
        default:
            return (
                <div className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"} ${disabled ? 'disabled:pointer-events-none' : ''}`} >
                    <input id={name} type="text" className={`peer p-1 ${leftIcon ? "pl-9" : "pl-2"} ${rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                    <label htmlFor={name} className="absolute text-sm select-none left-3 -top-6">{label}</label>
                    <span className={`absolute inline-flex left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{leftIcon}</span>
                    <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                    <span className="sr-only">Input</span>
                </div>
            )
    }
}

export default RuiInput