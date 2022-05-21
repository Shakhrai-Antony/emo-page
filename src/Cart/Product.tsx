import React from 'react'
import {useMatch} from "react-router-dom";
import data from '../config/products.json'
import s from './product.module.scss'

export const Product = (props: any) => {

    const match = useMatch('/products/:product/');
    console.log(match)
    const productName = match?.params.product
    type ObjectKey = keyof typeof data;
    const myVar = productName as ObjectKey;


    return (
        <div>
            <div className={s.productCart}>
                <img src={data[myVar].value.url} alt=""/>
            </div>
            <div>
                <p>
                    {data[myVar].description}
                </p>
                <p>
                    {data[myVar].price}
                </p>
            </div>
        </div>
    )
}