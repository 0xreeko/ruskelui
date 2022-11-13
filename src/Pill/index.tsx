import React from 'react'
import { RuiPillProps, colorVar } from './Pill'

export const RuiPill = ({id, children, color = "rosian", svg}: RuiPillProps) => {

    return (
        <div id={id} className={`${colorVar[color]} flex items-center duration-300 select-none w-fit py-1.5 px-3 mobile-overline rounded-[9px]`}>
            <slot name='svg'>{svg}</slot>
            <span>{children}</span>
        </div>
    )
}