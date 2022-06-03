import React from 'react'
import {useSelector} from "react-redux";
import {getGirlsGoods} from "../../../Store/goodsSelectors";
import {GirlsGoodsList} from "../goodsList";
import s from './goodsForLadies.module.scss'

export const GoodsSectionForLadies = () => {
    const girlsGoods = useSelector(getGirlsGoods)
    const girlsGoodsList = girlsGoods.map((item:any) =>
        <GirlsGoodsList value={<img src={item.value} alt={item.to}/>} path={item.to} description={item.description}
                        key={item.id} price={item.price}/>
    )
    return (
        <div className={s.goodsForLadies}>
            {girlsGoodsList}
        </div>
    )
}