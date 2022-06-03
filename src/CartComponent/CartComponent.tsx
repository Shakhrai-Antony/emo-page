import React from 'react'
import {useSelector} from "react-redux";
import s from './cartComponent.module.scss'
import {getAmountOfGood, getGoodsForCart} from "../Store/goodsSelectors";

export const CartComponent = (props: any) => {


    const clientGoods = useSelector(getGoodsForCart)
    const goodsAmount = useSelector(getAmountOfGood)
    console.log(goodsAmount)

    return (
        <div className={s.cart_section}>
            <div className={s.cart_content_section}>
                <div>
                    <img src={clientGoods.value[0].image} alt=""/>
                </div>
                <div>
                    <h3>{clientGoods.description}</h3>
                    <p>Size: {clientGoods.size}</p>
                    <p>Price: {clientGoods.price}</p>
                    <p>Amount: {goodsAmount}</p>
                </div>
                <div className={s.total_price_good_section}>
                    <h3>Total price: ${(parseFloat(clientGoods.price.slice(1)) * goodsAmount).toFixed(2)}</h3>
                </div>
            </div>
        </div>
    )
}