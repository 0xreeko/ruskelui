import React, { HTMLAttributes, useState } from 'react'
import clsx from 'clsx'
import { colorType } from './utils';
// @ts-ignore
import styles from  './modules/Accordion.module.css'


interface AccordionData {
    title: string
    content: string
}

export interface Props extends HTMLAttributes<HTMLElement> {
    data: AccordionData[]
    color: colorType
}

// const colorVar: {[key in colorType]: string} = {
//     amber: "text-amber-400",
//     amethyst: "text-amethyst-400",
//     aqua: "text-aqua-400",
//     azure: "text-azure-400",
//     blue: "text-blue-400",
//     cyan: "text-cyan-400",
//     emerald: "text-emerald-400",
//     fuchsia: "text-fuchsia-400",
//     green: "text-green-400",
//     indigo: "text-indigo-400",
//     jade: "text-jade-400",
//     jasper: "text-jasper-400",
//     kunzite: "text-kunzite-400",
//     lime: "text-lime-400",
//     moonstone: "text-moonstone-400",
//     orange: "text-orange-400",
//     peridot: "text-peridot-400",
//     pink: "text-pink-400",
//     purple: "text-purple-400",
//     red: "text-red-400",
//     rose: "text-rose-400",
//     ruby: "text-ruby-400",
//     russian: "text-russian-400",
//     scarlet: "text-scarlet-400",
//     stratos: "text-stratos-400",
//     sunstone: "text-sunstone-400",
//     sylver: "text-sylver-400",
//     teal: "text-teal-400",
//     violet: "text-violet-400",
//     yellow: "text-yellow-400"
// }

export const RuiAccordion = ({ data = [{ title: "What is Web3?", content: "Web3 is a new paradigm!" }, { title: "What is XRP?", content: "The world's bridge currency👁" }] }: Props) => {
    const [hidden, setHidden] = useState<boolean | number | null>(true);

    const toggle = (idx: number) => {
        hidden === idx ? setHidden(null) : setHidden(idx)
    }

    return (
        <div className={clsx(styles.wrapper)} tabIndex={0}>
            {data.map((item, idx) => (
                <>
                    <button className={clsx(styles.accordionItem)} onClick={() => toggle(idx)}>
                        <span>{item.title}</span>
                        <svg className={clsx(`w-4 h-4`, `${hidden !== idx ? `${styles.iconBase}` : `${styles.iconActive}`}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <p className={clsx(styles.content, `${hidden !== idx ? `${styles.contentHidden}` : `${styles.contentVisible}`}`)}>{item.content}</p>
                </>
            ))}
        </div>
    )
}