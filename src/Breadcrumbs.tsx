import React from 'react'
// @ts-ignore
import styles from './modules/Breadcrumbs.module.css'

export const RuiBreadcrumbs = () => {

    return (
        <nav className={styles.wrapper}>
            <ol className={styles.innerWrap}>
                <li><a href="#" className={`text-blue-600 hover:text-blue-700`}>Home</a></li>
                <li><a href="#" className={`text-blue-600 hover:text-blue-700`}>Projects</a></li>
                <li>Mirmo Dashboard</li>
            </ol>
        </nav>
        //         <nav class="bg-grey-light rounded-md w-full">
        //   <ol class="list-reset flex">
        //     <li><a href="#" class="text-blue-600 hover:text-blue-700">Home</a></li>
        //     <li><span class="text-gray-500 mx-2"></span></li>
        //     <li><a href="#" class="text-blue-600 hover:text-blue-700">Library</a></li>
        //     <li><span class="text-gray-500 mx-2"></span></li>
        //     <li class="text-gray-500">Data</li>
        //   </ol>
        // </nav> 
    )
}