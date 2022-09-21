import React from 'react'
import { RuiProgressProps, barColor, donutColor, positionVar } from './types/Progress';
// @ts-ignore
import styles from './modules/Progress.module.css'

export const RuiProgress = ({ name, percentage, isGradient, color = 'amethyst', startColor = 'blue', endColor = 'amethyst', barDirection = 'Right', variant = 'Bar' }: RuiProgressProps) => {
    switch (variant) {
        case "Bar":
            return (
                <div id={name} tabIndex={0} role={'progressbar'} className={styles.progress}>
                    <div className={`h-full absolute rounded-full duration-300 ${isGradient ? `${positionVar[barDirection]} ${barColor[startColor][1]} ${barColor[endColor][2]}` : `${barColor[color][0]}`}`} style={{ width: `${percentage}%` }}></div>
                    <span className="sr-only">Progress Bar</span>
                </div>
            );
        case "Donut":
            return (
                <div id={name} className="relative inline-flex items-center justify-center">
                    <div className={`absolute text-d-h4 font-semibold ${donutColor[color]}`}>{percentage}%</div>
                    <svg className={styles.svg} viewBox="0 0 120 120" >
                        <circle className="text-black/30" strokeWidth={4} stroke="currentColor" fill="transparent" r="54" cx="60" cy="60" />
                        <circle className={`${donutColor[color]}`} strokeWidth="10" strokeDasharray={100} style={{ strokeDashoffset: Number(100 - percentage) }} pathLength="100" strokeLinecap="round" stroke="currentColor" fill="transparent" r="54" cx="60" cy="60" />
                    </svg>
                    <span className="sr-only">Progress Donut</span>
                </div>
            )

        default:
            return (
                <div id={name} tabIndex={0} role={'progressbar'} className={styles.progress}>
                    <div className={`h-full absolute rounded-full duration-300 ${isGradient ? `${positionVar[barDirection]} ${barColor[startColor][1]} ${barColor[endColor][2]}` : `${barColor[color][0]}`}`} style={{ width: `${percentage}%` }}></div>
                    <span className="sr-only">Progress Bar</span>
                </div>
            );
    }
}

export default RuiProgress