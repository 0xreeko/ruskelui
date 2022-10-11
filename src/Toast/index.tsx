import React from "react"
import { RuiToastProps, colorVar } from "./Toast"

export const RuiToast = ({title = 'Transaction Unsuccessful!', content = "The transaction was unsuccessful. Check on reekoscan.com for more info.", color = "peridot"}: RuiToastProps) => {

    return (
        <div role={'alert'} tabIndex={0} className={`z-10 w-fit max-w-md p-3 border border-gray-300 border-opacity-40 overflow-auto rounded-lg h-fit bg-sylver-600 dark:bg-russian-600/80 backdrop-blur-sm  text-sylver-100`}>
          <div className="flex items-center h-full">
            {/* icon */}
          <div className={`mr-2 ${colorVar[color][1]}`}>
            <span>🔥</span>
              {/* <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg> */}
            </div>
            {/* content */}
            <div>
              <p className={`font-semibold text-sm ${colorVar[color][1]}`}>{title}</p>
              <p className="text-xs">{content}</p>
            </div>
          </div>
        </div>
    )
}