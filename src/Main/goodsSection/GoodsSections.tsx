import React from 'react';
import {getGoods} from "../../Store/goodsSelectors";
import {GoodsList} from "./goodsList";
import s from './goodsSection.module.scss';
import {useSelector} from "react-redux";

export const Goods = () => {

    const goods = useSelector(getGoods)
    const goodsList = goods.map(item =>
        <GoodsList value={<img src={item.value} alt={item.to}/>} name={item.to} description={item.description} key={item.id} price={item.price}/>

    )
    return (
        <div className={s.goodsList}>
            {goodsList}
        </div>
    )
}