import React from 'react';
import { RuiKBDProps } from './KBD';
// @ts-ignore
import styles from './KBD.module.css'

 const RuiKBD = ({id, children, color = "tingual"}: RuiKBDProps) => {
    return (
        <div id={id} className={`${styles.kbd} border-obsidian-800 bg-obsidian-600 dark:border-obsidian-600 dark:bg-obsidian-800 ${styles[color]}`}>
            {children}
        </div>
    )
 }

 export default RuiKBD

