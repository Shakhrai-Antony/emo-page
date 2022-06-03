import React, {useEffect} from 'react'
import s from './headwearAndAccessories.module.scss'
import {useSelector} from "react-redux";
import {getHeadwearAndAccessoriesMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const HeadwearAndAccessoriesMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const headwearAndAccessoriesList = useSelector(getHeadwearAndAccessoriesMerch)
    return (
        <div className={s.headwear_and_accessories_section}>
            {headwearAndAccessoriesList.map((item: any) => {
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