import React, {useEffect} from 'react'
import s from './hoodiesMerch.module.scss'
import {useSelector} from "react-redux";
import {getHoodiesMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const HoodiesMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const hoodiesMerchList = useSelector(getHoodiesMerch)
    return (
        <div className={s.hoodies_merch_section}>
            {hoodiesMerchList.map((item) => {
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