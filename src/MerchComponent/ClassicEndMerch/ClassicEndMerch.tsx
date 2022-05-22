import React, {useEffect} from 'react'
import s from './classicEndMerch.module.scss'
import {useSelector} from "react-redux";
import {getClassicEndMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const ClassicEndMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const endMerch = useSelector(getClassicEndMerch)
    return (
        <div className={s.classic_end_merch_collection}>
            {endMerch.map((item) => {
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