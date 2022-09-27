import React from "react"
import { RuiToastProps, colorVar } from "./Toast"

export const RuiToast = ({title = 'Transaction Unsuccessful!', content, color = "peridot"}: RuiToastProps) => {

    return (
        <div role={'alert'} tabIndex={0} title="toast" className={`z-10 max-w-md p-3 rounded-lg h-fit sm:h-24 bg-opacity-40 bg-gradient-to-r via-stratos-400/20 to-stratos-400/10 text-sylver-100 ${colorVar[color][0]}`}>
          <div className="flex items-center h-full">
            {/* icon */}
            <div className={`mr-2 ${colorVar[color][1]}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
            </div>
            {/* content */}
            <div>
              <p className={`font-semibold ${colorVar[color][1]}`}>{title}</p>
              <p>{content}</p>
            </div>
          </div>
        </div>
    )
}