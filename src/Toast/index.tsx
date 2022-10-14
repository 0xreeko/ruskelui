import React, { useContext, useEffect, useState } from "react"
import { RuiToastProps, colorVar } from "./Toast"
// @ts-ignore
import styles from './Toast.module.css'
import { ToastContext } from "./ToastProvider"

export const success = <svg xmlns="http://www.w3.org/2000/svg" className="text-green-400" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx={12} cy={12} r={9}></circle>
  <path d="M9 12l2 2l4 -4"></path>
</svg>
export const info = <svg xmlns="http://www.w3.org/2000/svg" className="text-azure-400" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx={12} cy={12} r={9}></circle>
  <line x1={12} y1={8} x2="12.01" y2={8}></line>
  <polyline points="11 12 12 12 12 16 13 16"></polyline>
</svg>
export const warn = <svg xmlns="http://www.w3.org/2000/svg" className="text-amber-400" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 9v2m0 4v.01"></path>
  <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
</svg>
export const error = <svg xmlns="http://www.w3.org/2000/svg" className="text-scarlet-400" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx={12} cy={12} r={9}></circle>
  <path d="M10 10l4 4m0 -4l-4 4"></path>
</svg>

export const RuiToast = ({ id, content: { closeOnClick = false, timer = 6000, icon = '👾', variant, theme, message = "The transaction was successful. Check on reekoscan.com for more info.", color = "peridot" } }: RuiToastProps) => {
  const { removeToast } = useContext(ToastContext)

  const [width, setWidth] = useState(0)
  const [exit, setExit] = useState(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>()

  const handleStartTimer = () => {
    const _id = setInterval(() => {
      setWidth((prevState) => {
        if (prevState < 100) {
          return prevState + 0.5
        }
        clearInterval(_id)
        return prevState
      });
    }, (timer / 200));
    setIntervalId(_id)
  }

  const handlePauseTimer = () => {
    clearInterval(intervalId)
  }

  const handleCloseToast = () => {
    handlePauseTimer();
    setExit(true)
    setTimeout(() => {
      removeToast?.(id)
    }, 400)
  }

  useEffect(() => {
    if (width === 100) {
      handleCloseToast()
    }
  }, [width])

  useEffect(() => {
    handleStartTimer()
  }, [])
  switch (variant) {
    case "success":
      return (
        <div role={'alert'} onClick={closeOnClick === true ? () => removeToast?.(id) : undefined} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiToast} ${exit ? `${styles.exit}` : ""}  ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100/80 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'}`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {<span className={`mr-2`}>{success}</span>}
            <p className="text-d-base">{message}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "info":
      return (
        <div role={'alert'} onClick={closeOnClick === true ? () => removeToast?.(id) : undefined} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiToast} ${exit ? `${styles.exit}` : ""}  ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100/80 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'}`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {<span className={`mr-2`}>{info}</span>}
            <p className="text-d-base">{message}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "warn":
      return (
        <div role={'alert'} onClick={closeOnClick === true ? () => removeToast?.(id) : undefined} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiToast} ${exit ? `${styles.exit}` : ""}  ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100/80 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'}`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {<span className={`mr-2`}>{warn}</span>}
            <p className="text-d-base">{message}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "error":
      return (
        <div role={'alert'} onClick={closeOnClick === true ? () => removeToast?.(id) : undefined} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiToast} ${exit ? `${styles.exit}` : ""}  ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100/80 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'}`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {<span className={`mr-2`}>{error}</span>}
            <p className="text-d-base">{message}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "colored":
      return (
        <div role={'alert'} onClick={closeOnClick === true ? () => removeToast?.(id) : undefined} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiToast} ${exit ? `${styles.exit}` : ""}  ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100/80 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'} overflow-auto rounded-lg h-fit backdrop-blur-`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {icon && <span className={`mr-2 ${colorVar[color][1]}`}>{icon}</span>}
            <p className="text-d-base">{message}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    default:
      return (
        <div role={'alert'} onClick={closeOnClick === true ? () => removeToast?.(id) : undefined} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiToast} ${exit ? `${styles.exit}` : ""}  ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100/80 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'}`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {icon && <span className={`mr-2 ${colorVar[color][1]}`}>{icon}</span>}
            <p className="text-d-base">{message}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
  }
}

export default RuiToast;