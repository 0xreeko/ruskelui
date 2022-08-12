import React, { useState } from 'react'

export const RuiSideNav = () => {
    const [open, setOpen] = useState(false)
    return (
        <aside className='inset-0 flex'>
            <div className={`h-screen bg-russian-400 duration-500 relative ${open ? "w-72" : "w-20"}`} >
                <div className={`p-1 absolute cursor-pointer object-cover bg-black text-sylver-100 rounded-full -right-3 top-12 duration-300 transform transition-all ${open ? `rotate-90` : `-rotate-90`}`} onClick={() => setOpen(!open)}>
                    <svg className={`w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
                <div className="flex flex-col justify-center px-4 py-6">
                    herllo
                </div>
            </div>
            <div className={`flex-1 h-screen ${open ? `bg-russian-400/3 0 duration-300 opacity-100` : `duration-300 opacity-75`}`}></div>
        </aside>
    )
}