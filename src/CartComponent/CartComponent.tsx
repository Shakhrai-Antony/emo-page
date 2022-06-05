import React from 'react'
import {useSelector} from "react-redux";
import s from './cartComponent.module.scss'
import {getAmountOfGood, getGoodsForCart, getGoodsPrice, getGoodsSize} from "../Store/goodsSelectors";

export const CartComponent = (props: any) => {

    const clientGoods = useSelector(getGoodsForCart)
    const goodsAmount = useSelector(getAmountOfGood)
    const goodsSize = useSelector(getGoodsSize)
    const goodsPrice = useSelector(getGoodsPrice)
    const totalBill = goodsPrice.length >= 1
        ? goodsPrice.reduce((a: number, b: number) =>  a + b).toFixed(2)
        : 0

    return (
        <div className={s.cart_section}>
            {clientGoods.map((item: any, index: number) => {
                return (
                    <div key={index} className={s.cart_content_section}>
                        <div>
                            <img src={item.value[0].image} alt=""/>
                        </div>
                        <div>
                            <h3>{item.description}</h3>
                            <p>Size: {goodsSize[index]}</p>
                            <p>Amount: {goodsAmount[index]}</p>
                            <p>Price: {item.price}</p>
                        </div>
                        <div className={s.total_price_good_section}>
                            <h3>Total price: ${goodsPrice[index]}</h3>
                        </div>
                    </div>
                )
            })}
            <div className={s.subtotal_section}>
                {goodsPrice.length >= 1 ? <h3>Subtotal: ${totalBill}</h3> : <h3>Cart is empty</h3>}
            </div>
        </div>
    )
}