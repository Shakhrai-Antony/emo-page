import s from './goodsList.module.scss'
import {NavLink} from "react-router-dom";
import React from "react";

export const GoodsList = (props: any) => {
    return (
        <div className={s.goodsLinks}>
            <NavLink to={props.path}>{props.value}</NavLink>
            <p>
                {props.description}
            </p>
            <p>
                {props.price}
            </p>
        </div>
    )
}
export const GirlsGoodsList = (props: any) => {
    return (
        <div className={s.girlsGoodsLinks}>
            <NavLink to={props.path}>{props.value}</NavLink>
            <p>
                {props.description}
            </p>
            <p>
                {props.price}
            </p>
        </div>
    )
}
