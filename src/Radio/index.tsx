import React from "react"
import { RuiRadioProps } from "./Radio"
import { radioColor } from "./utils/color";

export const RuiRadio = ({ value, name, variant, color = "teal" }: RuiRadioProps) => {
    switch (variant) {
        case "base":
            return (
                <div className={`inline-flex relative items-center justify-center`}>
                    <input type="radio" name={name} id={name} value={value} className={`relative w-5 h-5 border-2 rounded-full appearance-none peer ${radioColor[color][1]}`} />
                    <div className={`absolute w-2.5 h-2.5 ${radioColor[color][0]} rounded-full scale-0 duration-300 peer-checked:scale-100`}></div>
                </div>
            );
        case "bordered":
            return (
                <input type="radio" name={name} id={name} value={value} className={`appearance-none peer border-2 w-5 h-5 rounded-full checked:border-[6px] hover:border-opacity-80 ${radioColor[color][1]} duration-300`}></input>
            )
        case "ghost":
            return (
                <input type="radio" name={name} id={name} value={value} className="sr-only peer" />
            );
        default:
            return (
                <input type="radio" name={name} id={name} value={value} className="sr-only peer" />
            )
    }
}

export default RuiRadio