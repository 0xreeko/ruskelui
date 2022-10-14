import React, { createContext, ReactNode, useState } from "react"
import RuiToast from "."
import { RuiToastProps, RuiToastDeetsProps, position } from "./Toast"
// @ts-ignore
import styles from './Toast.module.css'

export interface RuiToastContextProps {
    addToast?: (deets: RuiToastDeetsProps) => void,
    removeToast?: (_id: string) => void,
}

export const RuiToastContext = createContext<RuiToastContextProps>({
})

export const ToastProvider = ({ children }: { children: ReactNode }) => {

    const naniteId = () => Math.random().toString(36).slice(2);

    const [toasts, setToasts] = useState<RuiToastProps[]>([])

    const [position, setPosition] = useState<position>('topRight')

    const addToast = (content: RuiToastDeetsProps) => {
        const _id = naniteId()
        const _toast = { id: _id, content }
        setPosition(_toast.content.position)
        console.log('pos:', position)
        console.log('toast', _toast)
        setToasts([...toasts, _toast])
    }

    const removeToast = (_id: string) => setToasts(newToasts => newToasts.filter(t => t.id !== _id) )
    

    return (
        <RuiToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className={styles.ruiToastContainer} data-position={'topLeft'}>
                {toasts.filter(t => t.content.position === 'topLeft').map(_t => (
                    <RuiToast key={_t.id} {..._t} />
                ))}
            </div>
            <div className={styles.ruiToastContainer} data-position={'topRight'}>
                {toasts.filter(t => t.content.position === 'topRight').map(_t => (
                    <RuiToast key={_t.id} {..._t} />
                ))}
            </div>
            <div className={styles.ruiToastContainer} data-position={'bottomRight'}>
                {toasts.filter(t => t.content.position === 'bottomRight').map(_t => (
                    <RuiToast key={_t.id} {..._t} />
                ))}
            </div>
            <div className={styles.ruiToastContainer} data-position={'bottomLeft'}>
                {toasts.filter(t => t.content.position === 'bottomLeft').map(_t => (
                    <RuiToast key={_t.id} {..._t} />
                ))}
            </div>
        </RuiToastContext.Provider>
    )
}

export default ToastProvider