import React from 'react'
import not_dead from './../imges/notdead.png'
import s from './preloader.module.scss'

export const Preloader = () => {
    return (
        <div className={s.preloader_section}>
            <img className={s.preloader_blink} src={not_dead} alt=""/>
        </div>
    )

}