import React, { useState } from "react";
import { RuiInputProps, inputColor } from "./Input";
import { hiddenEye, visibleEye } from "./InputIcons";
// @ts-ignore
import styles from './Input.module.css'

export const RuiInput = ({ id, disabled, isDark, placeholder = 'example@rhcp.com', pattern, max, min, variant, value, color = "amethyst", fullWidth = false, icon, iconPosition = 'right', ...props }: RuiInputProps) => {
    const [visible, setVisible] = useState(false)
    switch (variant) {
        case "text":
            return (
                <div className={`relative group ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    <span className="sr-only">Input</span>
                    <input type="text" id={id} placeholder={placeholder} value={value} autoComplete="off" {...props} className={`peer w-full rounded-lg border border-obsidian-300 dark:border-obsidian-800 ${inputColor[color][0]} text-neropside dark:text-onyx py-2 px-3 h-9 ${iconPosition === "left" ? "pl-10" : "pr-10"} ${disabled ? 'disabled:pointer-events-none disabled:select-none disabled:group-focus-within:border-obsidian-300 disabled:group-hover:border-obsidian-300 dark:disabled:group-hover:border-obsidian-800' : ''} backdrop-blur-sm bg-onyx/40 dark:bg-neropside/40 outline-none duration-200 placeholder:text-obsidian-500 dark:placeholder:text-obsidian-400 sm:text-sm`} disabled={disabled} />
                    <span className={`absolute inset-y-0 ${iconPosition === 'left' ? 'left-0' : 'right-0'} grid w-10 duration-300 pointer-events-none place-content-center ${inputColor[color][1]} peer-placeholder-shown:text-obsidian-500 dark:peer-placeholder-shown:text-obsidian-400`}>
                        {icon && (
                            icon
                        )}
                    </span>
                    <span className="sr-only">Input</span>
                </div>
            )
        case 'password':
            return (
                <div className={`relative group ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    <span className="sr-only">Password Input</span>
                    <input id={id} type={visible ? 'text' : 'password'} value={value} className={`peer py-2 px-3 h-9 pr-10 w-full border border-obsidian-300 dark:border-obsidian-800 duration-200 text-neropside dark:text-onyx outline-none bg-onyx/40 dark:bg-neropside/40 backdrop-blur-sm ${inputColor[color][0]} ${placeholder ? "" : "placeholder-transparent"} rounded-lg sm:text-sm ${disabled ? 'disabled:pointer-events-none disabled:select-none disabled:group-focus-within:border-obsidian-300 disabled:group-hover:border-obsidian-300 dark:disabled:group-hover:border-obsidian-800' : ''}`} placeholder={placeholder} disabled={disabled} />
                    <button onClick={() => setVisible(prev => (prev = !prev))} title={!visible ? "Click to show password" : "Click to hide password"} className={`absolute inset-y-0 grid place-content-center right-0 w-10 ${inputColor[color][1]} peer-placeholder-shown:text-obsidian-500 dark:peer-placeholder-shown:text-obsidian-400`}>
                        {!visible ? hiddenEye : visibleEye}
                    </button>
                </div>
            )
        case 'email':
            return (
                <div className={`relative ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    <span className="sr-only">Email Input</span>
                    <input type="email" id={id} placeholder="example@rhcp.com" value={value} autoComplete="off" className={`appearance-none peer w-full rounded-lg border border-obsidian-300 dark:border-obsidian-800 text-neropside dark:text-onyx py-2 px-3 h-9 ${iconPosition === "left" ? "pl-10" : "pr-10"} ${disabled ? 'disabled:pointer-events-none disabled:select-none disabled:group-focus-within:border-obsidian-300 disabled:group-hover:border-obsidian-300 dark:disabled:group-hover:border-obsidian-800' : ''} ${inputColor[color][0]} backdrop-blur-sm bg-onyx/40 dark:bg-neropside/40 outline-none duration-200 placeholder:text-obsidian-400 sm:text-sm`} disabled={disabled} />
                    <span className={`${inputColor[color][1]} absolute inset-y-0 right-0 grid w-10 duration-200 pointer-events-none place-content-center peer-placeholder-shown:text-obsidian-500 dark:peer-placeholder-shown:text-obsidian-400`}>
                        <svg xmlns="http:ww.w3.org/2000/svg" className="rui-mail" width="16" height="16" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                        </svg>
                    </span>
                </div>
            )
        case 'number':
            return (
                <div className={`relative ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    <input type="number" id={id} min={min} max={max} value={value} placeholder={'123'} autoComplete={'off'} {...props} className={`peer w-full px-3 h-9 py-2 pr-10 border rounded-lg outline-none ${inputColor[color][0]} ${disabled ? 'disabled:pointer-events-none disabled:select-none disabled:group-focus-within:border-obsidian-300 disabled:group-hover:border-obsidian-300 dark:disabled:group-hover:border-obsidian-800':''} sm:text-sm border-obsidian-300 dark:border-obsidian-800 text-neropside dark:text-onyx bg-onyx/40 dark:bg-neropside/40 backdrop-blur-sm`} disabled={disabled} />
                    
                    <span className={`${inputColor[color][1]} ${disabled ? 'disabled:pointer-events-none disabled:select-none disabled:group-focus-within:border-obsidian-300 disabled:group-hover:border-obsidian-300 dark:disabled:group-hover:border-obsidian-800' : ''} absolute inset-y-0 place-content-center grid right-0 w-10 duration-200 pointer-events-none peer-placeholder-shown:text-obsidian-500 dark:peer-placeholder-shown:text-obsidian-400`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="rui-123" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 10l2 -2v8"></path>
                            <path d="M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
                            <path d="M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5"></path>
                        </svg>
                    </span>
                </div>
            )
        case 'time':
            return (
                <div className={`relative ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    <input type="time" id={id} data-isdark={`${isDark}`} value={value} className={`appearance-none ${styles.clocker} ${inputColor[color][0]} border-obsidian-300 dark:border-obsidian-800 disabled:pointer-events-none disabled:select-none disabled:border-obsidian-300 dark:disabled:border-obsidian-800`} disabled={disabled} {...props} />
                </div>
            )
        default:
            return (
                <div className={`relative group ${fullWidth ? "w-full" : "w-full max-w-xs"}`} >
                    <span className="sr-only">Input</span>
                    <input type="text" id={id} placeholder={placeholder} value={value} autoComplete="off" {...props} className={`peer w-full rounded-lg border border-obsidian-300 dark:border-obsidian-800 ${inputColor[color][0]} text-neropside dark:text-onyx py-2 px-4 ${iconPosition === "left" ? "pl-10" : "pr-10"} ${disabled ? 'disabled:pointer-events-none' : ''} backdrop-blur-sm bg-onyx/40 dark:bg-neropside/40 outline-none duration-200 placeholder:text-obsidian-500 dark:placeholder:text-obsidian-400 sm:text-sm disabled:border-obsidian-800 dark:disabled:border-obsidian-800 disabled:pointer-events-none`} disabled={disabled} />
                    <span className={`absolute inset-y-0 ${iconPosition === 'left' ? 'left-0' : 'right-0'} grid w-10 duration-300 pointer-events-none place-content-center ${inputColor[color][1]} peer-placeholder-shown:text-obsidian-500 dark:peer-placeholder-shown:text-obsidian-400`}>
                        {icon && (
                            icon
                        )}
                    </span>
                    <span className="sr-only">Input</span>
                </div>
            )
    }
}

export default RuiInput