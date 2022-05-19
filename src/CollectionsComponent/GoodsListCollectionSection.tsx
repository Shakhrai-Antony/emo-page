import React from 'react'
import {NavLink} from "react-router-dom";

export const GoodsListCollectionSection = (props: any) => {
    return (
        <div>
            <NavLink to={props.path}>
                {props.value}
            </NavLink>
            <p>
                {props.description}
            </p>
            <p>
                {props.price}
            </p>
        </div>
    )
}