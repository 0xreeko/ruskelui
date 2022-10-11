import { createContext, Dispatch, SetStateAction } from "react";
import { position } from "./Dropdown";

interface Props {
    activeDrop: string
    setActiveDrop?: Dispatch<SetStateAction<string>>
    menuHeight?: number | null
    calcHeight?: (_el: any) => void
    position: position
}

export const DropdownContext = createContext<Props>({
    activeDrop: 'main',
    position: "bottom"
})