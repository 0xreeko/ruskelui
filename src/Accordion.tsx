import React, { HTMLAttributes, ReactNode, useState } from 'react'
// @ts-ignore
import styles from './modules/Accordion.module.css'
import { colorType } from './utils'

export interface Props extends HTMLAttributes<HTMLElement> {
    label?: ReactNode
    content?: ReactNode
    children?: ReactNode
    color?: colorType
}

const hoverColor: { [key in colorType]: string } = {
    amber: "hover:text-amber-400 duration-300",
    amethyst: "hover:text-amethyst-400 duration-300",
    aqua: "hover:text-aqua-400 duration-300",
    azure: "hover:text-azure-400 duration-300",
    blue: "hover:text-blue-400 duration-300",
    cyan: "hover:text-cyan-400 duration-300",
    emerald: "hover:text-emerald-400 duration-300",
    fuchsia: "hover:text-fuchsia-400 duration-300",
    green: "hover:text-green-400 duration-300",
    indigo: "hover:text-indigo-400 duration-300",
    jade: "hover:text-jade-400 duration-300",
    jasper: "hover:text-jasper-400 duration-300",
    kunzite: "hover:text-kunzite-400 duration-300",
    lime: "hover:text-lime-400 duration-300",
    moonstone: "hover:text-moonstone-400 duration-300",
    orange: "hover:text-orange-400 duration-300",
    peridot: "hover:text-peridot-400 duration-300",
    pink: "hover:text-pink-400 duration-300",
    purple: "hover:text-purple-400 duration-300",
    red: "hover:text-red-400 duration-300",
    rose: "hover:text-rose-400 duration-300",
    ruby: "hover:text-ruby-400 duration-300",
    russian: "hover:text-russian-400 duration-300",
    scarlet: "hover:text-scarlet-400 duration-300",
    stratos: "hover:text-stratos-400 duration-300",
    sunstone: "hover:text-sunstone-400 duration-300",
    sylver: "hover:text-sylver-400 duration-300",
    teal: "hover:text-teal-400 duration-300",
    violet: "hover:text-violet-400 duration-300",
    yellow: "hover:text-yellow-400 duration-300"
}

const AccordionItem = ({ label, content, color = "amethyst"}: Props) => {
    const [hidden, setHidden] = useState<boolean | number | null>(true);
    return (
        <>
            <button className={`${styles.accordionItem} ${hoverColor[color]}`} onClick={() => setHidden(!hidden)}>
                <span className='text-left text-d-base'>{label}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${hoverColor[color]} ${hidden === true ? `${styles.iconBase}` : `${styles.iconActive}`}`} width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1={12} y1={5} x2={12} y2={19}></line>
                    <line x1={5} y1={12} x2={19} y2={12}></line>
                </svg></span>
            </button>
            <p className={` ${styles.content} ${hidden === true ? `${styles.contentHidden}` : `${styles.contentVisible}`}`}>{content}</p>
        </>
    )
}

export const RuiAccordion = ({ children }: Props) => {

    return (
        <div className={`${styles.wrapper}`} tabIndex={0}>
            {children}
        </div>
    )
}

RuiAccordion.Item = AccordionItem

export default RuiAccordion


