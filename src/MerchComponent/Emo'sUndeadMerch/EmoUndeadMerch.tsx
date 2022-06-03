import React, {useEffect} from 'react'
import s from './emoUndeadMerch.module.scss'
import {useSelector} from "react-redux";
import {getEmosUndeadMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const EmoUndeadMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const undeadMerch = useSelector(getEmosUndeadMerch)
    return (
        <div className={s.undead_merch_collection}>
            {undeadMerch.map((item: any) => {
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