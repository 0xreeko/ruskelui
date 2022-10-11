import React from 'react'
import { RuiCheckboxProps } from './Checkbox'
// @ts-ignore
import styles from './Checkbox.module.css'

export const RuiCheckbox = ({color = 'ruby', variant ="white", defaultChecked, disabled}: RuiCheckboxProps) => {
  return (
    <label className={`${ disabled !== true ? `${styles[color]} cursor-pointer` : "bg-sylver-800 pointer-events-none" } rounded-md w-5 h-5 min-h-fit flex items-center relative`}>
            <input type="checkbox" className="sr-only peer" id="check" defaultChecked={defaultChecked ? defaultChecked : false}/>
            <div className="transition-all ease-linear scale-0 peer-checked:scale-75">
                <svg className={`w-5 h-5 ${styles[variant]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span className='sr-only'>Checkbox</span>
    </label>
  )
}

export default RuiCheckbox
