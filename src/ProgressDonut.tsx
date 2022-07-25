import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'
// @ts-ignore
import styles from './modules/ProgressDonut.module.css'
import { colorType } from './utils';

export interface Props extends HTMLAttributes<HTMLElement> {
    /**
     * Sets the percentage value for the progress bar and changes how much is filled.
     */
    percentage: number;

    /**
     * Choose from RuskelUI's neonic colours and Tailwind's native colours!
     */
    color: colorType;

    /**Progress Donut name */
    name: string;
}

const colorVar: { [key in colorType]: string } = {
    amber: "text-amber-400",
    amethyst: "text-amethyst-400",
    aqua: "text-aqua-400",
    azure: "text-azure-400",
    blue: "text-blue-400",
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    fuchsia: "text-fuchsia-400",
    green: "text-green-400",
    indigo: "text-indigo-400",
    jade: "text-jade-400",
    jasper: "text-jasper-400",
    kunzite: "text-kunzite-400",
    lime: "text-lime-400",
    moonstone: "text-moonstone-400",
    orange: "text-orange-400",
    peridot: "text-peridot-400",
    pink: "text-pink-400",
    purple: "text-purple-400",
    red: "text-red-400",
    rose: "text-rose-400",
    ruby: "text-ruby-400",
    russian: "text-russian-400",
    scarlet: "text-scarlet-400",
    stratos: "text-stratos-400",
    sunstone: "text-sunstone-400",
    sylver: "text-sylver-400",
    teal: "text-teal-400",
    violet: "text-violet-400",
    yellow: "text-yellow-400"
}

export const RuiProgressDonut = ({ name, percentage = 0, color = 'ruby' }: Props) => {
    return (
        <div title={name} id={name} className="relative inline-block">
            <span className={clsx(`absolute text-d-h3 top-[35%] font-semibold`, `${colorVar[color]}`, `${percentage < 10 ? 'right-[40%]' : 'right-[35%]'}`)}>{percentage}</span>
            <svg className={styles.svg} viewBox="0 0 120 120" >
                <circle className="text-black/30" stroke-width="4" stroke="currentColor" fill="transparent" r="54" cx="60" cy="60" />
                <circle className={clsx(`${colorVar[color]}`)} strokeWidth="10" strokeDasharray={100} style={{ strokeDashoffset: Number(100 - percentage) }} pathLength="100" strokeLinecap="round" stroke="currentColor" fill="transparent" r="54" cx="60" cy="60" />
            </svg>
        </div>
    )
};