import { DialogHTMLAttributes, LegacyRef, ReactNode } from "react"

type size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export interface RuiModalProps extends DialogHTMLAttributes<HTMLDialogElement> {    
    name: string
    children: ReactNode
    size: size
    pointer: LegacyRef<HTMLDialogElement> | undefined
}