import React, { useState } from "react";
import { RuiInputProps, inputColor } from "./Input";
import { hiddenEye, visibleEye } from "./InputIcons";
// @ts-ignore
import styles from './Input.module.css'

export const RuiInput = ({ id, disabled, isDark, label, placeholder, pattern, max, min, variant, value, name, color = "amethyst", fullWidth = false, icon, iconPosition = 'right', ...props }: RuiInputProps) => {
    const [visible, setVisible] = useState(false)
    switch (variant) {
        case "text":
            return (
                // <div id={name} className={`relative ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                //     {/* <input id={id} type="text" value={value} className={`peer py-2  px-4 ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg ${disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} disabled={disabled} /> */}
                //     <input type="email" id="UserEmail" placeholder="flea@rhcp.com" autoComplete="off" className={`peer w-full rounded-md border border-obsidian-200 py-2 px-4 ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""} ${disabled ? 'disabled:pointer-events-none' : ''} ${inputColor[color][0]} backdrop-blur-sm bg-onyx/20 dark:bg-neropside/20 shadow-sm outline-none duration-200 placeholder:text-obsidian-500 group-hover:border-jade-500 sm:text-sm`} disabled={disabled} />
                //     <span className="absolute inset-y-0 right-0 grid w-0 duration-200 pointer-events-none place-content-center text-obsidian-500 group-hover:text-jade-500">
                //         <svg xmlns="http://www.w3.org/2000/svg" className="" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                //             <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                //             <circle cx="12" cy="12" r="4"></circle>
                //             <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                //         </svg>
                //     </span>
                //     <span className={`absolute inline-flex left-0 ml-2 pointer-events-none transition duration-300 scale-75  ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{leftIcon}</span>
                //     <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                //     <span className="sr-only">Input</span>
                // </div>
                <div className={`relative ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    {/* <input id={id} type="text" value={value} className={`peer py-2  px-4 ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg ${disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} disabled={disabled} /> */}
                    <span className="sr-only">Input</span>
                    <input type="text" id={id} placeholder="example@rhcp.com" autoComplete="off" className={`peer w-full rounded-md border border-obsidian-300 dark:border-obsidian-800 hover:border-jade-500 text-neropside dark:text-onyx py-2 px-4 ${iconPosition === "left" ? "pl-10" : "pr-10"} ${disabled ? 'disabled:pointer-events-none' : ''} ${inputColor[color][0]} backdrop-blur-sm bg-onyx/40 dark:bg-neropside/40 shadow-sm outline-none duration-200 placeholder:text-obsidian-400 group-hover:border-jade-500 sm:text-sm`} disabled={disabled} />
                    <span className={`absolute inset-y-0 ${iconPosition === 'left' ? 'left-0' : 'right-0'} grid w-0 duration-200 pointer-events-none place-content-center text-obsidian-500 group-hover:text-jade-500`}>
                        {icon && (
                            icon
                        )}
                    </span>
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'password':
            return (
                <div className={`relative group flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"} ${disabled ? 'disabled:pointer-events-none' : ''}`} >
                    <input id={id} type={visible ? 'text' : 'password'} className={`box-border py-1 pl-2 pr-9 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"} ${disabled ? 'disabled:pointer-events-none' : ''}`} disabled={disabled} />
                    <button onClick={() => setVisible(prev => (prev = !prev))} className={`absolute inline-flex right-0 mr-2 scale-75 ${inputColor[color][1]}`}>{!visible ? hiddenEye : visibleEye}</button>
                    <span className="sr-only">Input: Password</span>
                </div>
            )
        case 'email':
            return (
                <div className={`relative ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    {/* <input id={id} type="text" value={value} className={`peer py-2  px-4 ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg ${disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} disabled={disabled} /> */}
                    <input type="email" id={id} placeholder="example@rhcp.com" autoComplete="off" className={`peer w-full rounded-md border border-obsidian-300 dark:border-obsidian-800 hover:border-jade-500 text-neropside dark:text-onyx py-2 px-4 ${iconPosition === "left" ? "pl-10" : "pr-10"} ${disabled ? 'disabled:pointer-events-none' : ''} ${inputColor[color][0]} backdrop-blur-sm bg-onyx/40 dark:bg-neropside/40 shadow-sm outline-none duration-200 placeholder:text-obsidian-400 sm:text-sm`} disabled={disabled} />
                    <span className="absolute inset-y-0 right-0 grid w-10 duration-200 pointer-events-none place-content-center peer-placeholder-shown:text-obsidian-400 text-jade-500">
                        <svg xmlns="http:ww.w3.org/2000/svg" className="" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'number':
            return (
                <input type="number" id={id} min={min} max={max} className="px-3 py-1 border border-gray-300 rounded-md outline-none appearance-none dark:border-gray-600 text-russian-600 dark:text-sylver-200 bg-white/20 dark:bg-black/20 backdrop-blur-sm" />
            )
        case 'time':
            return (
                <input type="time" id={id} data-isdark={`${isDark}`} className={`${styles.clocker}`} {...props} />
            )
        default:
            return (
                <div className={`relative ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    {/* <input id={id} type="text" value={value} className={`peer py-2  px-4 ${leftIcon ? "pl-10" : ""} ${rightIcon ? "pr-10" : ""} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg ${disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} disabled={disabled} /> */}
                    <input type="email" id="UserEmail" placeholder="example@rhcp.com" autoComplete="off" className={`peer w-full rounded-md border border-obsidian-300 dark:border-obsidian-800  py-2 px-4 ${iconPosition === "left" ? "pl-10" : "pr-10"} ${disabled ? 'disabled:pointer-events-none' : ''} ${inputColor[color][0]} backdrop-blur-sm bg-onyx/40 dark:bg-neropside/40 shadow-sm outline-none duration-200 placeholder:text-obsidian-400 group-hover:border-jade-500 sm:text-sm`} disabled={disabled} />
                    <span className="absolute inset-y-0 right-0 grid w-10 duration-200 pointer-events-none place-content-center text-obsidian-400 group-hover:text-jade-500">
                        <svg xmlns="http:ww.w3.org/2000/svg" className="" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Input</span>
                </div>
            )
    }
}

export default RuiInput