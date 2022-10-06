
import React from 'react'
import { tools } from '../data/data'
import style from '../styles/ToolStrip.module.css'
import Tool from './Tool'
import { useTheme } from '@mui/material'

const ToolStrip = () => {
    const theme = useTheme()

    return (
        <>
            <div className={style.marquee} style={{
                // borderTop: `1px dashed ${theme?.palette?.primary?.main}`
            }}>
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

            <div className={`${style["marquee"]} ${style["marquee-p"]} ${style["marquee--borders"]}`}>
                <div className={style.marquee__group}>
                    <p>My Weapon of choice</p>
                    <p aria-hidden="true">My Weapon of choice</p>
                    <p aria-hidden="true">My Weapon of choice</p>
                </div>

                <div aria-hidden="true" className={style.marquee__group}>
                    <p>My Weapon of choice</p>
                    <p>My Weapon of choice</p>
                    <p>My Weapon of choice</p>
                </div>
            </div>

            <div className={`${style["marquee"]} ${style["marquee--reverse"]}`}>
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
                    }
                </div>
            </div>
        </>

    )
}

export default ToolStrip