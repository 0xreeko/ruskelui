	import React from "react"
	import { RuiModalProps } from "./Modal";

export const RuiModal = ({ children, name, size = "sm", pointer }: RuiModalProps) => {
		return (
				<dialog ref={pointer} className={`p-4 border border-gray-200 min-w-xs w-full max-w-${size} rounded-xl bg-gray-200/70 backdrop-blur-sm`} id={name}>
				{children}
				</dialog>
		)
	}

	export default RuiModal