import React, {useEffect} from 'react'
import s from './coffeeMugsMerch.module.scss'
import {useSelector} from "react-redux";
import {getCoffeeMugsMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const CoffeeMugsMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const coffeeMugsList = useSelector(getCoffeeMugsMerch)
    return (
        <div className={s.coffee_mugs_merch_section}>
            {coffeeMugsList.map((item) => {
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