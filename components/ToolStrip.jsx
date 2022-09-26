import Image from 'next/image'
import React from 'react'
import style from '../styles/ToolStrip.module.css'
const ToolStrip = ({ icon, name, color }) => {
    return (
        <div>
            <style jsx>{`
                .button{
                    box-shadow: 0 5px 15px ${color};
                    background:${color};
                }
            `}</style>

            <div className={style.button} style={{
                'box-shadow': `0 5px 15px ${color}`,
                'border': `1px solid ${color}`
            }}>
                <div className={style.icon}>
                    <Image width='50px' height='50px' src={`/${name}.svg`} />
                </div>
                <div className={style.name}>
                    {name}
                </div>
            </div>

        </div >
    )
}

export default ToolStrip