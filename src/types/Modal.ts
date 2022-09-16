import { HTMLAttributes, ReactNode } from "react"

export interface RuiModalProps extends HTMLAttributes<HTMLElement> {
    open: boolean
    onClose: () => void
    children?: ReactNode
}