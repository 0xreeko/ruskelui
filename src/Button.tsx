import React, { HTMLAttributes, ReactNode } from 'react'
import {buttonSize, colorType} from './utils/'
// @ts-ignore
import styles from './modules/Button.module.css'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    /** Provide a text for Button */
    children: ReactNode;

    svg?: ReactNode;

    /** Available colour ways to style your Button */
    color: colorType;

    /** Provide a size for Button */
    size: buttonSize
    
}

export const RuiButton = ({children, color = 'amethyst', size = "base", ...props}: Props) => {
  return (
    <button {...props} className={`${color ? `${styles[color]} text-white inline-flex cursor-pointer w-fit items-center transition-all duration-200` : 'bg-gray-700'} ${size === 'base' ? 'mobile-small px-3 py-2 h-9 rounded-[10px]' : size === 'small' ? 'text-[11.1px] px-2 h-8 rounded-[8px]' : size === 'large' ? 'desktop-base px-4 py-3 h-10 rounded-[12px]' : size === 'xlarge' ? 'mobile-large px-5 py-4 h-11 rounded-[14px]' : ''}`}>
        {children}
    </button>
  )
}
