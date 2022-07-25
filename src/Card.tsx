import React, {HTMLAttributes} from "react"
// @ts-ignore
import styles from './modules/Card.module.css'

export interface Props extends HTMLAttributes<HTMLInputElement> {
    width?: number;
    height?: number;
    name?: string;
}

export const RuiCard = ({}: Props) => {
    return (
        <div className="relative inline-flex flex-col items-center wrapper text-sylver-100">
            <div className="absolute w-48 p-1 bg-white/5 -bottom-8 h-14 rounded-xl backdrop-blur-sm text-d-copy">PolygonPunks - #4596</div>
            <div className="overflow-hidden rounded-xl w-44 h-44">
                <img src="https://lh3.googleusercontent.com/iraaNTwrh6d3hDC9VhZ7wAkvpKcb7Bp9gE68a5QP7u5AGeArl8yzvAo-6QTTPmBYQ2qNSXhdAOHRSuYtbA92P3Sj3zSgFvhnSpff=w600" alt="" />
            </div>
        </div>
    )
}