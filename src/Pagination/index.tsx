import React, { useState } from 'react'

export const RuiPagination = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [maxPage, _] = useState(13)

    const handlePagination = (args: string) => {
        if (args === 'INCREASE' && currentPage <= maxPage) {
            setCurrentPage(prev => prev++)
        }
        if (args === 'DECREASE' && currentPage >= 1) {
            setCurrentPage(prev => prev--)
        }
    }

    return (
        <div className="inline-flex items-center justify-center gap-3">
            <a onClick={() => handlePagination('DECREASE')} className="inline-flex items-center justify-center border rounded border-obsidian-300 dark:border-obsidian-800 h-9 w-9">
                <span className="sr-only">Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neropside dark:text-onyx" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </a>

            <p className="text-xs">
                {currentPage}
                <span className="mx-0.25">/</span>
                {maxPage}
            </p>

            <a onClick={() => handlePagination('INCREASE')} className="inline-flex items-center justify-center border rounded border-obsidian-300 dark:border-obsidian-800 h-9 w-9">
                <span className="sr-only">Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neropside dark:text-onyx" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    )
}