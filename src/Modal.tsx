import clsx from "clsx";
import React, { HTMLAttributes, useState } from "react"
import { RuiButton } from "./Button";

export interface Props extends HTMLAttributes<HTMLInputElement> {
    /** Provide a static label for Input */
    label?: string;
    /** Provide a static placeholder for Input */
    placeholder?: string;
    /** Provide a dynamic label for Input */
    floatingLabel?: string;
    /** Provide an ID for Input */
    name: string;
    hidden: boolean
}

export const RuiModal = ({ }: Props) => {
    const [hidden, setHidden] = useState(false);
    return (
        <>
        <RuiButton color="russian" size="small" onClick={() => setHidden(!hidden)}>Purchase with Metamask</RuiButton>
        {/* <div className="relative z-10 p-5 mx-auto shadow-xl bg-gradient-to-bl bg-opacity-40 from-stratos-400/20 via-stratos-400/20 to-green-600/30 backdrop-blur-sm text-sylver-100 rounded-2xl top-20 w-96"> */}
        {hidden ? '' : (
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			{/* <!--
			  Background backdrop, show/hide based on modal state.
		  
			  Entering: "ease-out duration-300"
				From: "opacity-0"
				To: "opacity-100"
			  Leaving: "ease-in duration-200"
				From: "opacity-100"
				To: "opacity-0"
			--> */}
			<div onClick={() => setHidden(!hidden)} className={clsx("fixed inset-0 transition-opacity bg-gray-500 duration-300", `${hidden ? 'ease-in bg-opacity-0' : 'ease-out bg-opacity-75'}`)} ></div>
		  
			<div className="fixed inset-0 z-10 overflow-y-auto">
			  <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
				{/* <!--
				  Modal panel, show/hide based on modal state.
		  
				  Entering: "ease-out duration-300"
					From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					To: "opacity-100 translate-y-0 sm:scale-100"
				  Leaving: "ease-in duration-200"
					From: "opacity-100 translate-y-0 sm:scale-100"
					To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				--> */}
				<div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
				  <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start">
					  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
						{/* <!-- Heroicon name: outline/exclamation --> */}
						<svg className="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
						</svg>
					  </div>
					  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
						<div className="mt-2">
						  <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
						</div>
					  </div>
					</div>
				  </div>
				  <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
					<button type="button" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
					<button type="button" onClick={() => setHidden(!hidden)} className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
        )}
        </>
    )
}