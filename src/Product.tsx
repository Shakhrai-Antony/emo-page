import React from 'react'
import {useMatch} from "react-router-dom";
import data from './config/products.json'

export const Product = (props: any) => {

    const match = useMatch('/products/:product/');
    const productName = match?.params.product
    type ObjectKey = keyof typeof data;
    const myVar = productName as ObjectKey;

    return (
        <div>
            <p>
                {data[myVar].price}
                {data[myVar].description}
            </p>
         {/*   {props.productValue.price}
            {props.productValue.description}*/}
        </div>
    )
}