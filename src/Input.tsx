import React, { HTMLAttributes } from "react";
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
    fullWidth: boolean;
    /**
     * Choose from RuskelUI's Neonic colours!
     */
    color: colorType;

}

export const RuiInput = ({ label, placeholder, floatingLabel, name = "username", color = "kunzite", fullWidth = false}: Props) => {
    return (
        <div className="relative my-1" >
            {
                floatingLabel ? (
                    <>
                        <input id={name} type="text" className={`peer pl-3 py-1 ${fullWidth ? "w-full" : "w-full max-w-xs"} transition-all duration-300 outline-none bg-transparent ring-[1px] text-sylver-600 ring-sylver-600 focus:${styles[color]} ${placeholder && !floatingLabel ? "" : "placeholder-transparent"} rounded-xl`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                        <label htmlFor={name} className="absolute text-sm text-gray-400 transition-all duration-300 bg-transparent select-none left-3 -top-6 peer-placeholder-shown:text-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6">{floatingLabel}</label>
                    </>
                ) : (
                    <>
                        <input id={name} type="text" className={`peer pl-3 py-1 ${fullWidth ? "w-full" : "w-full max-w-xs"} transition-all duration-300 outline-none bg-transparent ring-[1px] text-sylver-600 ring-sylver-600 focus:${styles[color]} ${placeholder ? "" : "placeholder-transparent"} rounded-xl`} placeholder={`${placeholder ? placeholder : "estoesunejemplo@es.com"}`} />
                        <label htmlFor={name} className="absolute text-sm select-none left-3 -top-6">{label}</label>
                    </>
                )
            }
        </div>
    )
}