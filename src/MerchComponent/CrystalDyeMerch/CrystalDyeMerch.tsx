import React, {useEffect} from 'react'
import s from './crystalDyeMerch.module.scss'
import {useSelector} from "react-redux";
import {getCrystalDyeMerch} from "../../Store/goodsSelectors";
import {NavLink} from "react-router-dom";

export const CrystalDyeMerch = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const crystalMerch = useSelector(getCrystalDyeMerch)
    return (
        <div className={s.crystal_dye_merch_collection}>
            {crystalMerch.map((item) => {
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