import React, {useEffect} from 'react'
import s from './revivalTourMerch.module.scss'
import {useSelector} from "react-redux";
import {getRevivalTourMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const RevivalTourMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const revivalMerch = useSelector(getRevivalTourMerch)
    return (
        <div className={s.revival_merch_collection}>
            {revivalMerch.map((item: any) => {
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