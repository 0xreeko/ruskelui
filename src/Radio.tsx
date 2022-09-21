import React from "react"
import { RuiRadioProps } from "./types/Radio"

export const RuiRadio = ({ label, value, name, variant }: RuiRadioProps) => {
    switch (variant) {
        case "base":
            return (
                <label className="flex items-center gap-2 group">
                    <input type="radio" name={name} id="radio" value={value} className="sr-only peer" />
                    <div className="relative flex items-center justify-center w-5 h-5 duration-150 bg-gray-100 border rounded-full appearance-none peer-checked:border-blue-600 peer-checked:bg-blue-400">
                        <div className="absolute w-2 h-2 delay-150 rounded-full group-focus-within:bg-blue-200 backdrop-blur-sm">
                        </div>
                    </div>
                    <span>{label}</span>
                </label>
            );
        case "ghost":
            return (
                <input type="radio" name={name} id="radio" value={value} className="sr-only peer" />
            );
        default:
            return (
                <input type="radio" name={name} id="radio" value={value} className="sr-only peer" />
            )
    }
}