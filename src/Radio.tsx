import React from "react"
import { RuiRadioProps } from "./types/Radio"

export const RuiRadio = ({label, value}: RuiRadioProps) => (
    <label className="flex items-center gap-2">
    <input type="radio" name="valid_ninja" id="radio" value={value} className="sr-only peer"/>
    <div className="w-5 h-5 duration-150 bg-gray-100 border rounded-full appearance-none peer-checked:border-blue-600 peer-checked:bg-blue-400"></div>
        <span>{label}</span>
  </label>
    )