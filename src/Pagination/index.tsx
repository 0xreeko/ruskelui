import React from 'react'
// @ts-ignore
import styles from './RuiPagination.module.css'
import { RuiPaginationProps, colorVar } from './Pagination'
 
export const RuiPagination = ({color = "ruby"}: RuiPaginationProps) => {
    return (
        <nav className="inline-flex flex-wrap items-center px-6 py-2 max-w-fit justify-evenly rounded-xl bg-russian-600/80 backdrop-blur-sm text-d-copy">
            <ul className='flex items-center gap-2'>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][1]}`}><span className="sr-only">Previous</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg></li>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][0]} hover:text-russian-600`}>1</li>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][0]} hover:text-russian-600`}>2</li>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][0]} hover:text-russian-600`}>3</li>
                <li className={`${('duration-300 transform-all rounded-lg  text-sylver-900 px-3 text-[0.615rem] select-none')}`}>...</li>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][0]} hover:text-russian-600`}>21</li>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][0]} hover:text-russian-600`}>22</li>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][0]} hover:text-russian-600`}>23</li>
                <li className={`${('duration-300 transform-all rounded-lg text-sylver-700 px-3 hover:cursor-pointer')} ${colorVar[color][1]}`}><span className="sr-only">Next</span><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></li>
            </ul>
        </nav>
    )
}