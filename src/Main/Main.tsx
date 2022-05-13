import React from 'react'
import {NavLink} from "react-router-dom";
import newDrop from './../imges/new_drop.png';
import s from './main.module.scss'
import {CoffeeSection, GoodsSection} from "./goodsSection/GoodsSection";
import {SimpleSliderSection} from "./SwiperSection/SimpleSlider";
import {EmoVideo, SecondEmoVideo, StreamVideo, ThirdEmoVideo} from "./VideoSection/VideoComponents";
import {GoodsSectionForLadies} from "./goodsSection/SectionForLadies/goodsSectionForLadies";
import {FemaleSimpleSliderSection} from "./SwiperSection/FemaleSlider";
import {LatestVideosSection} from "./LatestVideosSection/latestVideos";

export const Main = () => {
    return (
        <div className={s.main}>
            <NavLink to='collections/all-products'>
                <img className={s.newDrop} src={newDrop} alt="newDrop"/>
            </NavLink>
            <section className={s.goodsSection}>
                <GoodsSection/>
            </section>
            <SimpleSliderSection/>
            <section className={s.emovideo}>
                <EmoVideo/>
            </section>
            <section className={s.girlsGoodsSection}>
                <GoodsSectionForLadies/>
            </section>
            <FemaleSimpleSliderSection/>
            <section className={s.emovideo}>
                <SecondEmoVideo/>
            </section>
            <section>
                <CoffeeSection/>
            </section>
            <section>
                <ThirdEmoVideo/>
            </section>
            <section>
                <StreamVideo/>
            </section>
            <section>
                <LatestVideosSection/>
            </section>
        </div>
    )
}