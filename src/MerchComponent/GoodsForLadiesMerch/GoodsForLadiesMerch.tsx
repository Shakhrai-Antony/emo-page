import React, {useEffect} from 'react'
import s from './goodsForLadies.module.scss'
import {useSelector} from "react-redux";
import {getGirlsGoods} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const GoodsForLadiesMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const goodsForLadiesList = useSelector(getGirlsGoods)
    return (
        <div className={s.goods_for_ladies_section}>
            {goodsForLadiesList.map((item: any) => {
                return (
                    <div key={item.id}>
                        <NavLink to={item.to}>
                            <img src={item.value} alt={item.to}/>
                        </NavLink>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}