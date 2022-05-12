import React from 'react'
import {NavLink} from "react-router-dom";
import newDrop from './../imges/new_drop.png';
import s from './main.module.scss'
import {Goods} from "./goodsSection/GoodsSections";
import {SimpleSlider} from "./goodsSection/SimpleSlider";
import {EmoVideo} from "./feltemoindaclub";
import {GoodsSectionForLadies} from "./goodsSection/SectionForLadies/goodsSectionForLadies";

export const Main = () => {
    return (
        <div className={s.main}>
            <NavLink to='collections/all-products'>
                <img className={s.newDrop} src={newDrop} alt="newDrop"/>
            </NavLink>
            <section className={s.goodsSection}>
                <Goods/>
            </section>
            <SimpleSlider/>
            <section className={s.emovideo}>
                <EmoVideo/>
            </section>
            <section className={s.girlsGoodsSection}>
                <GoodsSectionForLadies/>
            </section>
        </div>
    )
}