import React, {useEffect, useState } from "react"
import { RuiToastProps, colorVar } from "./Toast"
// @ts-ignore
import styles from './Toast.module.css'
import { error, info, success, warn } from "./ToastIcons"

/*
{
  icon: custom icon,
  variant: success, warn, info, error, colored
  content: custom text,
  color: colorType,
  theme: light or dark
  position
}
*/

export const RuiToast = ({dispatch, id, icon = '👾', variant, theme, content = "The transaction was successful. Check on reekoscan.com for more info.", color = "peridot" }: RuiToastProps) => {
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
      dispatch({
        type: 'REMOVE_TOAST',
        id
      })
    }, 400) // set as autoDelayExit prop

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
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? `${styles.exit}` : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'} overflow-auto rounded-lg h-fit backdrop-blur-sm`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {success && <span className={`mr-2`}>{success}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "info":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? `${styles.exit}` : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'} overflow-auto rounded-lg h-fit backdrop-blur-sm`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {info && <span className={`mr-2`}>{info}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "warn":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? `${styles.exit}` : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'} overflow-auto rounded-lg h-fit backdrop-blur-sm`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {warn && <span className={`mr-2`}>{warn}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "error":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? `${styles.exit}` : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'} overflow-auto rounded-lg h-fit backdrop-blur-sm`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {error && <span className={`mr-2`}>{error}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    case "colored":
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? `${styles.exit}` : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'} overflow-auto rounded-lg h-fit backdrop-blur-`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {icon && <span className={`mr-2 ${colorVar[color][1]}`}>{icon}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
    default:
      return (
        <div role={'alert'} onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} tabIndex={0} className={`${styles.ruiNoti} ${exit ? `${styles.exit}` : ""} relative z-10 mb-2.5 shadow-lg group w-full sm:w-[300px] border ${theme === 'light' ? 'border-bayoux-300 bg-bayoux-100 text-russian-600' : 'border-bayoux-500 bg-bayoux-600/80 text-sylver-100'} overflow-auto rounded-lg h-fit backdrop-blur-sm`}>
          <div className="flex items-center h-full m-4 min-w-fit">
            {icon && <span className={`mr-2 ${colorVar[color][1]}`}>{icon}</span>}
            <p className="text-d-base">{content}</p>
          </div>
          <div className={`absolute bottom-0 h-2 ${styles.timerBar}`} style={{ width: `${width}%` }}></div>
        </div>
      )
  }
}

export default RuiToast;