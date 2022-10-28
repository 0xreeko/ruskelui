import React from 'react'
import { RuiToggleProps } from './Toggle';
// @ts-ignore
import styles from './Toggle.module.css'
import { checkedColor } from './utils/Toggle';

export const RuiToggle = ({ id, defaultChecked, defaultValue, color = 'amethyst', name, disabled }: RuiToggleProps) => {
    return (
        <label id={id} tabIndex={0} className={`relative group flex items-center w-12 h-6 overflow-hidden rounded-full ${disabled !== true ? "cursor-pointer backdrop-blur-sm bg-gray-400/80" : "bg-sylver-800 pointer-events-none select-none"}`} >
            <input role={'switch'} aria-checked="false" aria-label={name ? name : 'toggle placeholder'} type="checkbox" defaultChecked={defaultChecked} defaultValue={defaultValue} className="sr-only peer" id={name} />
            <span className={`w-full h-full bg-stratos-400/20 ${checkedColor[color]} duration-300 transition-all`}></span>
            <span className={`w-4 h-4 left-1 group-active:left-1.5 absolute duration-150 transition-all rounded-full peer-checked:left-7 peer-checked:active:left-6 group-active:scale-x-125 bg-stratos-100 dark:bg-russian-600`}></span>
        </label>
    )
}