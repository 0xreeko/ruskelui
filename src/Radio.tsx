import React, {HTMLAttributes} from "react"

export interface Props extends HTMLAttributes<HTMLInputElement> {
    /** Provide a static label for Input */
    label?: string;
    /** Provide a static placeholder for Input */
    placeholder?: string;
    /** Provide a dynamic label for Input */
    floatingLabel?: string;
    /** Provide an ID for Input */
    name: string;
}

export const Radio = ({name}: Props) => (
        <input type="radio" name={name} id="" />
    )