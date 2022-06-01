import React, {useEffect, useState} from 'react'
import s from './carousel.module.scss'

export const CarouselForCart = (props: any) => {

    const [imageStatus, setImageStatus] = useState(1)

    useEffect(() => {
        const executeScroll = () => {
            if (imageStatus === 1) {
                props.firstImageLocation.current.scrollIntoView({ behavior: "smooth", block: "center" } )
            }
            if (imageStatus === 2) {
                props.secondImageLocation.current.scrollIntoView({ behavior: "smooth", block: "center" } )
            }
        }
        executeScroll()
    }, [imageStatus])

    return (
        <div className={s.carousel_section}>
            {props.images.map((item: any) => {
                return (
                    <div onClick={ () =>  setImageStatus(item.id) }
                         key={item.id}>
                        <img className={imageStatus === item.id ? s.active_image : s.inactive_image}
                             src={item.image} alt="image"/>
                    </div>
                )
            })}
        </div>
    )
}