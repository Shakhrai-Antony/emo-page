import React, {useEffect, useState} from 'react'
import s from './carousel.module.scss'

export const CarouselForCart = (props) => {
    const [imageStatus, setImageStatus] = useState(1)
    const handleClick = (item) => {
        document.getElementById(item).scrollIntoView({ behavior: "smooth", block: "center" })
    }
    return (
        <div className={s.carousel_section}>
            {props.data.images.map((item) => {
                return (
                    <div onClick={ () =>  { handleClick(item.image); setImageStatus(item.id) } }
                         key={item.id}>
                        <img className={imageStatus === item.id ? s.active_image : s.inactive_image}
                             src={item.image} alt="image"/>
                    </div>
                )
            })}
        </div>
    )
}