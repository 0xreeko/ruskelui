import React, { useState } from "react";
import { RuiInputProps, inputColor } from "./Input";
import { hiddenEye, visibleEye } from "./InputIcons";
// @ts-ignore
import styles from './modules/Input.module.css'

// const Textarea = () => (
//     <textarea name="" id="" cols={40} rows={10} className="px-2 py-3 border-2 border-gray-300 rounded-lg outline-none dark:text-sylver-100 bg-white/20 dark:border-gray-800 dark:bg-black/20 focus:ring-indigo-500 focus:ring-4"></textarea>
// )

export const RuiInput = ({ label, placeholder, variant, floatingLabel, name = "username", color = "kunzite", fullWidth = false, leftIcon, rightIcon}: RuiInputProps) => {
    const [visible,setVisible] = useState(false)
    switch (variant) {
        case "base":
            return (
                <div className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    {
                        floatingLabel ? (
                            <>
                                <input id={name} type="text" className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder && !floatingLabel ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={name} className="absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6">{floatingLabel}</label>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                            </>
                        ) : (
                            <>
                                <input id={name} type="text" className={`peer p-1 ${leftIcon ? "pl-9" : "pl-2"} ${rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={name} className="absolute text-sm select-none left-3 -top-6">{label}</label>
                                <span className={`absolute inline-flex left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{leftIcon}</span>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                            </>
                        )
                    }
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'password':
            return (
                <div className={`relative group flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    {
                        floatingLabel ? (
                            <>
                                <input id={name} type="password" className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder && !floatingLabel ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={name} className="absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6">{floatingLabel}</label>
                                <span className={`absolute inline-flex right-0 mr-2 transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${color ? inputColor[color][1] : 'peer-focus-within:text-[#6387f1]'}`}>{rightIcon}</span>
                            </>
                        ) : (
                            <>
                                <input id={name} type={visible ? 'text':'password'} className={` p-1 pl-2 pr-9 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={name} className="absolute text-sm select-none left-3 -top-6">{label}</label>
                                <button onClick={() => setVisible(prev => (prev = !prev))} className={`absolute inline-flex right-0 mr-2 scale-75 ${inputColor[color][1]}`}>{!visible ? hiddenEye : visibleEye}</button>
                            </>
                        )
                    }
                    <span className="sr-only">Input</span>
                </div>
            )
    
        default:
            return (
                <div className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    {
                        floatingLabel ? (
                            <>
                                <input id={name} type="text" className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder && !floatingLabel ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={name} className="absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6">{floatingLabel}</label>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                            </>
                        ) : (
                            <>
                                <input id={name} type="text" className={`peer p-1 ${leftIcon ? "pl-9" : "pl-2"} ${rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={name} className="absolute text-sm select-none left-3 -top-6">{label}</label>
                                <span className={`absolute inline-flex left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{leftIcon}</span>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${color ? inputColor[color][1] : 'peer-focus:text-[#6387f1]'}`}>{rightIcon}</span>
                            </>
                        )
                    }
                    <span className="sr-only">Input</span>
                </div>
            )
    }
}

    export default RuiInput