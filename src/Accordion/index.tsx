import React, { useState } from 'react'
import {RuiAccordionProps, accordionColor} from './Accordion'
// @ts-ignore
import styles from './Accordion.module.css'

export const RuiAccordion = ({ data, color = "amethyst", fullWidth = false }: RuiAccordionProps) => {

    const [open, setOpen] = useState<number | null>(null)
    const toggle = (_id: number) => setOpen(open === _id ? null : _id)

    return (
        <div className={`${styles.wrapper} text-neropside dark:text-onyx ${fullWidth === true ? `w-full` : `w-full max-w-xs`}`} tabIndex={0}>
            {data.map(({ label, content }, idx: number) => (
                <div>
                    <button className={`${styles.accordionItem} ${open !== idx ? `${accordionColor[color][0]}` : `${accordionColor[color][1]}`}`} onClick={() => toggle(idx)}>
                        <span className='text-left text-d-base'>{label}</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${open !== idx ? `${styles.iconBase}` : `${styles.iconActive} ${accordionColor[color][1]}`}`} width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1={12} y1={5} x2={12} y2={19}></line>
                            <line x1={5} y1={12} x2={19} y2={12}></line>
                        </svg></span>
                    </button>
                    <p className={`${styles.content} ${open !== idx ? `${styles.contentHidden}` : `${styles.contentVisible}`}`}>{content}</p>
                </div>
            ))}
        </div>
    )
}

export default RuiAccordion