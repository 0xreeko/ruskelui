import React, { useContext, useState } from 'react'
import { SelectContext } from './SelectContext'
import { RuiSelectChildProps, RuiSelectProps } from './Select'
import { selectColor } from './utils/Select'

export const SelectItem = ({ value, color = "amethyst", disabled }: RuiSelectChildProps) => {
    const { handleChange, selectedIcon, currentValue } = useContext(SelectContext)

    return (
        <li tabIndex={0} className={`flex justify-between duration-150 hover:text-sylver-100 hover:cursor-pointer py-2 px-4 ${disabled !== true  ? selectColor[color] : "text-sylver-800 pointer-events-none select-none"}`} onClick={() => handleChange?.(value)}>
            <span>{value}</span>
            <span>{currentValue === value ? selectedIcon : ""}</span>
        </li>
    )
}

export const RuiSelect = ({ label, children, selectedIcon = "🔥" }: RuiSelectProps) => {
    const [currentValue, setCurrentValue] = useState('');
    const [open, setOpen] = useState(false);

    const onChange = () => {
        if (open === true) {
            setOpen(false)
            return;
        };
        setOpen(true)
    }

    const handleChange = (value: string) => {
        setCurrentValue(value)
        setOpen(false)
    };

    return (
        <SelectContext.Provider value={{ label, currentValue, handleChange, selectedIcon }}>
            <div className="relative w-72 group">
                <span className='sr-only'>Select Dropdown</span>
                <button className={`peer flex w-full items-center justify-between border border-gray-300 dark:border-gray-800 rounded-lg bg-gray-200 dark:bg-russian-400/40 py-1 px-3`} onClick={() => onChange()}>
                    <span className="whitespace-nowrap text-russian-600 dark:text-sylver-100">{currentValue !== "" ? currentValue : label}</span>
                    <div className="pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${open === true ? "group-focus-within:rotate-180" : "rotate-0"} duration-300 text-red-400`} width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </button>
                <ul role="list" className={`appearance-none absolute z-10 mt-1.5 text-d-base transform transition-all duration-300 text-russian-600 dark:text-sylver-100 ${open === true ? 'group-focus-within:translate-y-0 opacity-100 flex flex-col' : '-translate-y-2 opacity-0 hidden'} overflow-hidden duration-300 h-fit w-full rounded-xl bg-gray-200/80 dark:bg-russian-400/40 backdrop-blur-sm`} tabIndex={0} >
                    <span className='sr-only'>Select Dropdown Items</span>
                    {children}
                </ul>
            </div>
        </SelectContext.Provider>
    )
}

RuiSelect.Item = SelectItem

export default RuiSelect.Item