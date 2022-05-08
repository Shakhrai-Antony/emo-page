import React from 'react'
import {NavLink} from "react-router-dom";
import newDrop from './../imges/new_drop.png';
import s from './main.module.scss'
import {Goods} from "./goodsSection/GoodsSections";

export const Main = () => {
    return (
        <div className={s.main}>
            <NavLink to='collections/all-products'>
                <img src={newDrop} alt="newDrop"/>
            </NavLink>
            <section className={s.goodsSection}>
                <Goods/>
            </section>
        </div>
    )
}