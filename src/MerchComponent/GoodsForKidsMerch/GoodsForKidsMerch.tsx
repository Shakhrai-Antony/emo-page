import React, {useEffect} from 'react'
import s from './goodsForKids.module.scss'
import {useSelector} from "react-redux";
import {getGoodsForKidsMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const GoodsForKidsMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const goodsForKidsList = useSelector(getGoodsForKidsMerch)
    return (
        <div className={s.goods_for_kids_section}>
            {goodsForKidsList.map((item: any) => {
                return (
                    <div key={item.id}>
                        <NavLink to={item.path}>
                            <img src={item.value} alt={item.path}/>
                        </NavLink>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })}
        </div>
    )
}