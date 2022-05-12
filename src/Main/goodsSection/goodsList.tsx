
import {NavLink} from "react-router-dom";
import React from "react";

export const GoodsList = (props: any) => {
    return (
        <div>
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
        <div>
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
export const CoffeeGoodsList = (props: any) => {
    return (
        <div>
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
