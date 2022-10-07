
import React from 'react'
import { tools } from '../data/data'
import style from '../styles/ToolStrip.module.css'
import Tool from './Tool'
import { useTheme } from '@mui/material'

const ToolStrip = () => {
    const theme = useTheme()

    return (
        <>
            <div className={style.marquee}>
                <div className={style.marquee__group}>
                    {
                        tools.map((tool, index) => {
                            return <Tool key={index} tool={tool} />
                        })
                    }
                </div>

                <div aria-hidden="true" className={style.marquee__group}>
                    {
                        tools.map((tool, index) => {
                            return <Tool key={index} tool={tool} />
                        })
                    } </div>
            </div>



        </>

    )
}

export default ToolStrip