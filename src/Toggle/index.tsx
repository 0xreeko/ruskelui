import React from 'react'
import { RuiToggleProps } from './Toggle';
// @ts-ignore
import styles from './Toggle.module.css'
import { toggleColor } from './utils/Toggle';

export const RuiToggle = ({color = 'amethyst', name}: RuiToggleProps) => {
    return (
        <label tabIndex={0} className="relative flex items-center w-10 h-4 overflow-hidden rounded-md cursor-pointer">
            <input role={'switch'} aria-checked="false" aria-label={name ? name : 'toggle placeholder'} type="checkbox" className="sr-only peer" id={name} />
            <span className={`w-full h-full ${toggleColor[color]} duration-300 transition-all`}></span>
            <span className={`w-3 h-3 left-1 absolute duration-300 transition-all rounded-[32%] peer-checked:left-6 bg-stratos-100 peer-checked:bg-russian-500`}></span>
        </label>
    )
}