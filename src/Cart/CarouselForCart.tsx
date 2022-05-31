import React from 'react'
import s from './carousel.module.scss'

export const CarouselForCart = (props: any) => {

    return (
        <div className={s.carousel_section}>
            <div>
                <img src={props.firstImage} alt=""/>
            </div>
            <div>
                <img src={props.secondImage} alt=""/>
            </div>
        </div>
    )
}