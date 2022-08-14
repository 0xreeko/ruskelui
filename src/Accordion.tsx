import React, { HTMLAttributes, useState } from 'react'
// @ts-ignore
import styles from './modules/Accordion.module.css'


interface AccordionData {
    title: string
    content: string
}

export interface Props extends HTMLAttributes<HTMLElement> {
    data: AccordionData[]
    open: boolean
    onClick: () => void
}


const AccordionHeader = () => {
    return(
        <div className="">hey</div>
    )
}
const AccordionBody = () => {
    return(
        <div className="">this is my body</div>
    )
}

export const RuiAccordion = ({ open, data = [{ title: "What is Web3?", content: "Web3 is a new paradigm!" }, { title: "What is XRP?", content: "The world's bridge currency👁" }] }: Props) => {
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
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 duration-300 ${hidden !== idx ? `${styles.iconBase}` : `${styles.iconActive}`}`} width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1={12} y1={5} x2={12} y2={19}></line>
                            <line x1={5} y1={12} x2={19} y2={12}></line>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 duration-300 ${hidden !== idx ? `hidden` : `flex`}`} width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1={5} y1={12} x2={19} y2={12}></line>
                        </svg>
                    </button>
                    <p className={` ${styles.content} ${hidden !== idx ? `${styles.contentHidden}` : `${styles.contentVisible}`}`}>{item.content}</p>
                </>
            ))}
        </div>
    )
}

RuiAccordion.Header = AccordionHeader
RuiAccordion.Body = AccordionBody

export default RuiAccordion