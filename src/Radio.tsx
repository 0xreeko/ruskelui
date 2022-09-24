import React from "react"
import { RuiRadioProps } from "./types/Radio"
// @ts-ignore
import styles from './modules/Radio.module.css'

export const RuiRadio = ({ label, value, name, variant }: RuiRadioProps) => {
    switch (variant) {
        case "base":
            return (
                <label className={`relative inline-block ${styles.radio}`}>
                    <input type="radio" name={name} id={name} value={value} className="sr-only" />
                    <span className="text-russian-600 dark:text-sylver-100">{label}</span>
                </label>
            );
        case "ghost":
            return (
                <input type="radio" name={name} id={name} value={value} className="sr-only peer" />
            );
        default:
            return (
                <input type="radio" name={name} id={name} value={value} className="sr-only peer" />
            )
    }
}