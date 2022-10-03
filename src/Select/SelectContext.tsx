import { createContext, ReactNode } from "react";

interface Props {
    currentValue: string
    label: string
    handleChange?: (args: string) => void
    selectedIcon?: ReactNode
}

export const SelectContext = createContext<Props>({
    currentValue: '',
    label: '',
})