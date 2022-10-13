import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { colorVar, RuiToastProps } from "./Toast"
import { success, info, warn, error } from "./ToastIcons"
// @ts-ignore
import styles from './Toast.module.css'

export interface ToastProps {
  addToast: (arg0: RuiToastProps) => void,
  removeToast: (arg0: string) => void
}

// Context
const ToastContext = createContext<ToastProps | null>(null)

// Wrapper
const Wrapper = ({ children }: { children: ReactNode }) => {

  return (
    <div className="fixed right-2.5 top-2.5 max-w-xs">
      {children}
    </div>
  )
}

// Toast
const Toast = ({ icon = '👾', variant, theme, position, content, color = "peridot" }: RuiToastProps) => {
  const [width, setWidth] = useState(0)
  const [exit, setExit] = useState(false)
  const [intervalId, setintervalId] = useState<any>(null)

  const handleStartTimer = () => {
    const _id = setInterval(() => {
      setWidth((prevState) => {
        if (prevState < 100) {
          return prevState + 0.5
        }
        clearInterval(_id)
        return prevState
      })
    }, 20);
    console.log(typeof _id)
    setintervalId(_id)
  }

  const handlePauseTimer = () => {
    clearInterval(intervalId)
  }

  const handleCloseToast = () => {
    handlePauseTimer();
    setExit(true)
    setTimeout(() => {

    }, 400)

  }

  useEffect(() => {
    handleStartTimer()
  }, [])

  useEffect(() => {
    if (width === 100) handleCloseToast()
  }, [width])

  switch (variant) {
    case "success":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? styles.exit : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border border-bayoux-300 dark:border-bayoux-500 overflow-auto rounded-lg h-fit bg-bayoux-100 dark:bg-bayoux-600/80 backdrop-blur-sm  text-russian-600 dark:text-sylver-100`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {success && <span className={`mr-2`}>{success}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "info":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? styles.exit : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border border-bayoux-300 dark:border-bayoux-500 overflow-auto rounded-lg h-fit bg-bayoux-100 dark:bg-bayoux-600/80 backdrop-blur-sm  text-russian-600 dark:text-sylver-100`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {info && <span className={`mr-2`}>{info}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "warn":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? styles.exit : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border border-bayoux-300 dark:border-bayoux-500 overflow-auto rounded-lg h-fit bg-bayoux-100 dark:bg-bayoux-600/80 backdrop-blur-sm  text-russian-600 dark:text-sylver-100`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {warn && <span className={`mr-2`}>{warn}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "error":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? styles.exit : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border border-bayoux-300 dark:border-bayoux-500 overflow-auto rounded-lg h-fit bg-bayoux-100 dark:bg-bayoux-600/80 backdrop-blur-sm  text-russian-600 dark:text-sylver-100`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {error && <span className={`mr-2`}>{error}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "colored":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? styles.exit : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border border-bayoux-300 dark:border-bayoux-500 overflow-auto rounded-lg h-fit bg-bayoux-100 dark:bg-bayoux-600/80 backdrop-blur-sm text-russian-600 dark:text-sylver-100`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {icon && <span className={`mr-2 ${colorVar[color][1]}`}>{icon}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    default:
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? styles.exit : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border border-bayoux-300 dark:border-bayoux-500 overflow-auto rounded-lg h-fit bg-bayoux-100 dark:bg-bayoux-600/80 backdrop-blur-sm  text-russian-600 dark:text-sylver-100`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {icon && <span className={`mr-2 ${colorVar[color][1]}`}>{icon}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
  }
}

const naniteId = () => Math.random().toString(36).slice(2);

// Provider
export const RuiToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<RuiToastProps[]>([])
  const addToast = (value: RuiToastProps) => {
    const _id = naniteId()
    const { theme, color, variant, content, position } = value
    setToasts([...toasts, { id: _id, theme, color, variant, content, position }])
  }
  const removeToast = (id: string) => {
    const newToasts = toasts.filter(t => t.id !== id)
    setToasts(newToasts)
  }
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Wrapper>
        {toasts.map(({ id, theme, color, variant, content, position }) => (
          <Toast key={id} variant={variant} color={color} theme={theme} content={content} position={position} />
        ))}
      </Wrapper>
    </ToastContext.Provider>
  )
}

export const useRuiToasts = () => useContext(ToastContext);