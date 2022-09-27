import React, { useContext, useState } from 'react'
import { SelectContext } from '../context/SelectContext'
import { RuiSelectChildProps, RuiSelectProps } from './Select'
import { selectColor } from './utils/Select'

export const SelectItem = ({ value = "d", color = "amethyst" }: RuiSelectChildProps) => {
    const { handleChange } = useContext(SelectContext)

    return (
        // <li className="flex justify-between w-full px-3 py-2 duration-75 cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-400 hover:text-white" tabIndex={0}>
        //             <span>Polygon</span>
        //             <span>🔥</span>
        //         </li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-400 hover:text-white" tabIndex={0}>Ethereum</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-amber-200 dark:hover:bg-amber-400 hover:text-white" tabIndex={0}>Bitcoin</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-red-200 dark:hover:bg-red-400 hover:text-white" tabIndex={0}>Tron</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-green-200 dark:hover:bg-green-400 hover:text-white" tabIndex={0}>Celo</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-pink-200 dark:hover:bg-pink-400 hover:text-white" tabIndex={0}>Kadena</li>
        <li tabIndex={0} className={`flex justify-between py-2 px-4 ${selectColor[color]}`} onClick={() => handleChange?.(value)}>
            {value}
        </li>
    )
}

export const RuiSelect = ({ label, children }: RuiSelectProps) => {
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

    // return (
    //     <div className={`relative antialiased w-fit text-sylver-100 focus:ring-2 focus:ring-${color}-400`}>
    //         <button className="flex items-center justify-between px-3 py-2 space-x-3 duration-500 rounded-lg bg-russian-500" onClick={() => setHidden(!hidden)}>
    //             <span>{label}</span>
    //             <svg className={`w-4 h-4 ${hidden ? 'rotate-0 duration-300' : 'rotate-180 duration-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    //         </button>
    //         <ul tabIndex={0} className={`absolute origin-top text-[1rem] w-full z-10 mt-1.5 h-40 rounded-md overflow-scroll bg-russian-500 ${hidden ? 'transform transition-all scale-0 opacity-0 duration-300' : 'transform transition-all opacity-100 duration-300'}`} role="list">
    //             <SelectItem color='amethyst'>
    //                 <span>XRP</span>
    //                 <span>{<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    //                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    //                     <path d="M5 12l5 5l10 -10"></path>
    //                 </svg>}</span>
    //             </SelectItem>
    //             <SelectItem color='green'>
    //                 XLM
    //             </SelectItem>
    //             <SelectItem color="amber">
    //                 ALGO
    //             </SelectItem>
    //             <SelectItem color="peridot">
    //                 IOTA
    //             </SelectItem>
    //             <SelectItem color="azure">
    //                 XDC
    //             </SelectItem>
    //             <SelectItem color="red">
    //                 BTC
    //             </SelectItem>
    //         </ul>
    //     </div >
    // )

    return (
        <SelectContext.Provider value={{ label, currentValue, handleChange }}>
            <div className="relative w-72 group">
                <span className='sr-only'>Select Dropdown</span>
                <button className={`peer flex w-full items-center justify-between rounded-lg bg-gray-200 dark:bg-transparent py-1 px-3 border border-red-400`} onClick={() => onChange()}>
                    <span className="whitespace-nowrap text-russian-600 dark:text-sylver-100">{currentValue !== "" ? currentValue : label}</span>
                    <div className="pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${open === true ? "group-focus-within:rotate-180" : "rotate-0"} duration-300 text-red-400`} width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </button>
                <ul role="list" className={`appearance-none absolute z-10 mt-1.5 transform transition-all duration-300 ${open === true ? 'group-focus-within:translate-y-0 opacity-100 flex flex-col' : '-translate-y-2 opacity-0 hidden'} overflow-hidden duration-300 h-fit w-full rounded-xl bg-gray-200/80 backdrop-blur-sm`} tabIndex={0} >
                    <span className='sr-only'>Select Dropdown Items</span>
                    {children}
                </ul>
            </div>
        </SelectContext.Provider>
    )
}

RuiSelect.Item = SelectItem

export default RuiSelect.Item