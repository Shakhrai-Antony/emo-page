import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {getTeeAndLongSleevesMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";
import s from './teeAndLongSleeve.module.scss'

export const TeeAndLongSleevesMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const teeAndLongSleevesList = useSelector(getTeeAndLongSleevesMerch)
    return (
        <div className={s.tee_long_sleeves_section}>
            {teeAndLongSleevesList.map((item: any) => {
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