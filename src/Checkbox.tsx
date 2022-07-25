import React, { HTMLAttributes, ReactNode } from 'react'
import { colorType } from './utils';
// @ts-ignore
import styles from './modules/Checkbox.module.css'

export interface Props extends HTMLAttributes<HTMLElement>{
    /** Provide a label for Checkbox */
    children: ReactNode;

    /** Available colour ways to style your button */
    color: colorType;
    checkmarkColor: "white" | "black"
    strikeThrough: boolean
}

export const RuiCheckbox = ({children, color = 'ruby', checkmarkColor ="white", strikeThrough= false}: Props) => {
  return (
    <label className={`${styles[color]} rounded-md w-5 h-5 min-h-fit flex items-center relative cursor-pointer`}>
            <input type="checkbox" className="sr-only peer" id="check"/>
            <div className="transition-all ease-linear scale-0 peer-checked:scale-75">
                <svg className={`w-5 h-5 ${styles[checkmarkColor]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className={`block ml-2 text-sylver-100 transition-all select-none whitespace-nowrap w-fit ${strikeThrough === true ? 'peer-checked:line-through' : ''}`}>{children}</span>
    </label>
  )
}
