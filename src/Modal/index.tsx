	import React from "react"
	import { RuiModalProps } from "./Modal";

	export const RuiModal = ({ children, name, size = "lg" }: RuiModalProps) => {
		return (
			<>
				<dialog open className={`p-4 border border-gray-200 min-w-xs w-full max-w-${size} modal rounded-xl bg-gray-200/70 backdrop-blur-sm ${name ?? 'modalia'}`} id={name ?? 'modalia'}>
					{children}
				</dialog>
			</>
		)
	}

	export default RuiModal