import React, { HTMLAttributes, useState } from 'react'
// @ts-ignore
import styles from  './modules/Accordion.module.css'


interface AccordionData {
    title: string
    content: string
}

export interface Props extends HTMLAttributes<HTMLElement> {
    data: AccordionData[]
}

export const RuiAccordion = ({ data = [{ title: "What is Web3?", content: "Web3 is a new paradigm!" }, { title: "What is XRP?", content: "The world's bridge currency👁" }] }: Props) => {
    const [hidden, setHidden] = useState<boolean | number | null>(true);

    const toggle = (idx: number) => {
        hidden === idx ? setHidden(null) : setHidden(idx)
    }

    return (
        <div className={`${styles.wrapper}`} tabIndex={0}>
            {data.map((item, idx) => (
                <>
                    <button className={`${styles.accordionItem}`} onClick={() => toggle(idx)}>
                        <span>{item.title}</span>
                        <svg className={`w-4 h-4 ${hidden !== idx ? `${styles.iconBase}` : `${styles.iconActive}`}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <p className={` ${styles.content} ${hidden !== idx ? `${styles.contentHidden}` : `${styles.contentVisible}`}`}>{item.content}</p>
                </>
            ))}
        </div>
    )
}