import React from 'react'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from "swiper/react";
import {useSelector} from "react-redux";
import {getGoodsForCarousel} from "../../Store/goodsSelectors";
import s from './slider.module.scss'
import './swiperSlider.scss'
import {NavLink} from "react-router-dom";


export const SimpleSliderSection = () => {


    const goodsForCarousel = useSelector(getGoodsForCarousel)

    return (
        <section className={s.carouselSection}>
        <Swiper
            className='swiper__slider'
            modules={[Navigation, Pagination]}
            spaceBetween={1}
            slidesPerView={3}
            navigation={{ clickable: true }}



        >
            {goodsForCarousel.map(item =>
                <SwiperSlide key={item.id}>
                    <div className={s.carouselSection_content}>
                        <div>
                            <NavLink to={item.to}>
                                <img src={item.value} alt={item.to}/>
                            </NavLink>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
        </section>
    );
};