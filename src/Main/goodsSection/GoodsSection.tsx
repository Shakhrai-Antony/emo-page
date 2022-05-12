import React from 'react';
import {getCoffeeGoods, getGoods} from "../../Store/goodsSelectors";
import {CoffeeGoodsList, GoodsList} from "./goodsList";
import s from './goodsSection.module.scss';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export const GoodsSection = () => {
    const goods = useSelector(getGoods)
    const goodsList = goods.map(item =>
        <GoodsList value={<img src={item.value} alt={item.to}/>} path={item.to} description={item.description}
                   key={item.id} price={item.price}/>
    )
    return (
        <>
            <div className={s.goodsList}>
                {goodsList}
            </div>
            <div className={s.viewAll}>
                <NavLink to='/collections/all-products'>
                    <button>view all</button>
                </NavLink>
            </div>
        </>
    )
}

export const CoffeeSection = () => {
    const coffeeGoods = useSelector(getCoffeeGoods)
    const coffeeList = coffeeGoods.map(item =>
        <CoffeeGoodsList value={<img src={item.value} alt={item.to}/>} path={item.to} description={item.description}
                         key={item.id} price={item.price}/>
    )
    return (
        <>
            <div className={s.coffeeList}>
                {coffeeList}
            </div>
        </>
    )
}