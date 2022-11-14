import React from 'react'
import { textareaColorStyles, TextareaProps } from './Textarea'

export const RuiTextarea = ({id, fullWidth, value, disabled, color = 'jade', placeholder, ...props}: TextareaProps) => {
    return (
        <textarea id={id} placeholder={placeholder} className={`${textareaColorStyles[color]} rounded-md text-neropside dark:text-onyx py-2 px-4 border border-obsidian-300 dark:border-obsidian-800 backdrop-blur-sm bg-onyx/40 dark:bg-neropside/40 outline-none duration-200 placeholder:text-obsidian-500 dark:placeholder:text-obsidian-400 sm:text-sm ${fullWidth ? "w-full" : "w-full max-w-xs"} ${disabled ? 'disabled:pointer-events-none' : ''}`} value={value} disabled={disabled} {...props} rows={3}></textarea>
    )
}