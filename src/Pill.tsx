import React, { HTMLAttributes, ReactNode } from 'react'
import {colorType} from './utils/'
// @ts-ignore
import styles from './modules/Pill.module.css'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
    /** Provide a text for pill */
    children: ReactNode;
    /** Provide an SVG with dimensions of 16x16 px */
    svg?: ReactNode;

    /**
     * Choose from RuskelUI's Neonic colours + native Tailwind colours!
     */
    color: colorType;
      
}

export const RuiPill = ({children, color = "ruby", svg}: Props) => {

    return (
        <div className={`${styles[color]} flex items-center duration-300 select-none w-fit px-2 py-0.5 mobile-overline rounded-[6px]`}>
            <slot name='svg'>{svg}</slot>
            <span>{children}</span>
        </div>
    )
}