import React, { useState } from "react";
import { RuiInputProps, inputColor } from "./Input";
import { hiddenEye, visibleEye } from "./InputIcons";
// @ts-ignore
import styles from './modules/Input.module.css'
// { id, disabled, label, placeholder, pattern, max, min, variant, value, floatingLabel, name, color = "kunzite", fullWidth = false, leftIcon, rightIcon }
export const RuiInput = (props: RuiInputProps) => {
    const [visible, setVisible] = useState(false)
    switch (props.variant) {
        case "text":
            return (
                <div id={props.id} className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${props.fullWidth ? "w-full" : "w-full max-w-xs"} ${props.disabled ? 'disabled:pointer-events-none' : ''}`} >
                    {
                        props.floatingLabel ? (
                            <>
                                <input {...props} id={props.name} type="text" value={props.value} className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[props.color][0]} ${props.placeholder && !props.floatingLabel ? "" : "placeholder-transparent"} rounded-lg ${props.disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${props.placeholder ? props.placeholder : "estoesunejemplo@es.com"}`} disabled={props.disabled} />
                                <label htmlFor={props.name} className={`absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6 ${props.disabled ? 'disabled:pointer-events-none' : ''}`}>{!props.disabled ? props.floatingLabel : 'Disabled'}</label>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${props.color ? inputColor[props.color][1] : 'peer-focus:text-[#6387f1]'}`}>{props.rightIcon}</span>
                            </>
                        ) : (
                            <>
                                <input id={props.name} type="text" value={props.value} className={`peer p-1 ${props.leftIcon ? "pl-9" : "pl-2"} ${props.rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[props.color][0]} ${props.placeholder ? "" : "placeholder-transparent"} rounded-lg ${props.disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${props.placeholder ? props.placeholder : "estoesunejemplo@es.com"}`} disabled={props.disabled} />
                                <label htmlFor={props.name} className="absolute text-sm select-none left-3 -top-6">{props.label}</label>
                                <span className={`absolute inline-flex left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${props.color ? inputColor[props.color][1] : 'peer-focus:text-[#6387f1]'}`}>{props.leftIcon}</span>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${props.color ? inputColor[props.color][1] : 'peer-focus:text-[#6387f1]'}`}>{props.rightIcon}</span>
                            </>
                        )
                    }
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'password':
            return (
                <div id={props.id} className={`relative group flex items-center justify-between text-russian-600 dark:text-sylver-200 ${props.fullWidth ? "w-full" : "w-full max-w-xs"} ${props.disabled ? 'disabled:pointer-events-none' : ''}`} >
                    {
                        props.floatingLabel ? (
                            <>
                                <input id={props.name} type="password" className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[props.color][0]} ${props.placeholder && !props.floatingLabel ? "" : "placeholder-transparent"} rounded-lg ${props.disabled ? 'disabled:pointer-events-none' : ''}`} placeholder={`${props.placeholder ? props.placeholder : "estoesunejemplo@es.com"}`} disabled={props.disabled} />
                                <label htmlFor={props.name} className={`absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6 ${props.disabled ? 'disabled:pointer-events-none' : ''}`}>{props.floatingLabel}</label>
                                <span className={`absolute inline-flex right-0 mr-2 transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${props.color ? inputColor[props.color][1] : 'peer-focus-within:text-[#6387f1]'}`}>{props.rightIcon}</span>
                            </>
                        ) : (
                            <>
                                <input id={props.name} type={visible ? 'text' : 'password'} className={` p-1 pl-2 pr-9 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[props.color][0]} ${props.placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${props.placeholder ? props.placeholder : "estoesunejemplo@es.com"} ${props.disabled ? 'disabled:pointer-events-none' : ''}`} disabled={props.disabled} />
                                <label htmlFor={props.name} className="absolute text-sm select-none left-3 -top-6">{props.label}</label>
                                <button onClick={() => setVisible(prev => (prev = !prev))} className={`absolute inline-flex right-0 mr-2 scale-75 ${inputColor[props.color][1]}`}>{!visible ? hiddenEye : visibleEye}</button>
                            </>
                        )
                    }
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'number':
            return (
                <input type="number" id={props.id} pattern={props.pattern} min={props.min} max={props.max} className="block px-3 py-1 border rounded-md appearance-none" />
            )
        default:
            return (
                <div className={`relative flex items-center justify-between text-russian-600 dark:text-sylver-200 ${props.fullWidth ? "w-full" : "w-full max-w-xs"} ${props.disabled ? 'disabled:pointer-events-none' : ''}`} >
                    {
                        props.floatingLabel ? (
                            <>
                                <input id={props.name} type="text" className={`peer p-1 pl-2 w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[props.color][0]} ${props.placeholder && !props.floatingLabel ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${props.placeholder ? props.placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={props.name} className="absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-2 -top-6 peer-placeholder-shown:text-d-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6">{props.floatingLabel}</label>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition delay-1000 duration-300 opacity-0 scale-75 peer-focus:opacity-100 ${props.color ? inputColor[props.color][1] : 'peer-focus:text-[#6387f1]'}`}>{props.rightIcon}</span>
                            </>
                        ) : (
                            <>
                                <input id={props.name} type="text" className={`peer p-1 ${props.leftIcon ? "pl-9" : "pl-2"} ${props.rightIcon ? "pr-9" : "pr-2"} w-full transition-all duration-300 outline-none bg-white/20 dark:bg-black/20 ring-[1px] backdrop-blur-sm ring-sylver-600 dark:ring-sylver-800 ${inputColor[props.color][0]} ${props.placeholder ? "" : "placeholder-transparent"} rounded-lg`} placeholder={`${props.placeholder ? props.placeholder : "estoesunejemplo@es.com"}`} />
                                <label htmlFor={props.name} className="absolute text-sm select-none left-3 -top-6">{props.label}</label>
                                <span className={`absolute inline-flex left-0 ml-2 pointer-events-none transition duration-300 scale-75 peer-focus:scale-100 ${props.color ? inputColor[props.color][1] : 'peer-focus:text-[#6387f1]'}`}>{props.leftIcon}</span>
                                <span className={`absolute inline-flex right-0 mr-2 pointer-events-none transition duration-300 scale-75 ${props.color ? inputColor[props.color][1] : 'peer-focus:text-[#6387f1]'}`}>{props.rightIcon}</span>
                            </>
                        )
                    }
                    <span className="sr-only">Input</span>
                </div>
            )
    }
}

export default RuiInput