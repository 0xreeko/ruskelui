import React from "react"
import { RuiCardProps } from "./Card"

export const RuiCard = ({}: RuiCardProps) => {
    return (
        <div className="relative inline-flex flex-col items-center wrapper text-sylver-100">
            <div className="overflow-hidden rounded-xl w-44 h-44">
                <img src="https://img.seadn.io/files/1120d382b4169cb55898b77930e445c1.png?fit=max&w=600" alt="" />
            </div>
        </div>
    )
}