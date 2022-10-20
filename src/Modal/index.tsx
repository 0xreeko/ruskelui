import React from "react"
import { RuiModalProps } from "./Modal";
// @ts-ignore
import styles from './Modal.module.css'

export const RuiModal = ({ id, children, size = "md", pointer }: RuiModalProps) => {
	return (
		<dialog id={id} ref={pointer} className={`p-4 min-w-xs ${styles.modal} max-w-${size}`}>
				{children}
			</dialog>
	)
}

export default RuiModal