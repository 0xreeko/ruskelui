import React from 'react'
import { RuiCheckboxProps } from './types/Checkbox'
// @ts-ignore
import styles from './modules/Checkbox.module.css'

export const RuiCheckbox = ({children, color = 'ruby', variant ="white", strikeThrough= false, defaultChecked}: RuiCheckboxProps) => {
  return (
    <label className={`${styles[color]} rounded-md w-5 h-5 min-h-fit flex items-center relative cursor-pointer`}>
            <input type="checkbox" className="sr-only peer" id="check" defaultChecked={defaultChecked ? defaultChecked : false}/>
            <div className="transition-all ease-linear scale-0 peer-checked:scale-75">
                <svg className={`w-5 h-5 ${styles[variant]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className={`block ml-2 text-russian-600 dark:text-sylver-100 transition-all select-none whitespace-nowrap w-fit ${strikeThrough === true ? 'peer-checked:line-through' : ''}`}>{children}</span>
            <span className='sr-only'>Checkbox</span>
    </label>
  )
}
