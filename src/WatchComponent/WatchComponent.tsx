import React from 'react'
import {useSelector} from "react-redux";
import {getCollectionForWatchSection, getCurrentPage, getWatchList} from "../Store/goodsSelectors";
import {WatchComponentList} from "./WatchComponentList";
import {Paginator} from "../Paginator/Paginator";
import s from './watchcomponent.module.scss'
import {NavLink} from "react-router-dom";

export const WatchComponent = () => {
    const watchSection = useSelector(getWatchList)
    const currentPage = useSelector(getCurrentPage)
    const arr:any[]=[]
    for (let i = (currentPage - 1) * 12; (i < 12 + (currentPage - 1) * 12); i++) {
        if(watchSection[i]) arr.push(watchSection[i])
    }
    const watchSectionList = arr.map((item: any) =>
    <WatchComponentList value={ <img src={item.value}  alt={item.path}/> } key={item.id} id={item.id}
                        description={item.description} path={item.path} />
    )
    const watchSectionCollection = useSelector(getCollectionForWatchSection)


    return (
        <div>
            <div className={s.emo_might_delete}>
                <p>
                    felt emo might delete...
                </p>
            </div>
            <div className={s.watch_section}>
                {watchSectionList}
            </div>
            <div className={s.watch_paginator}>
                <Paginator/>
            </div>
            <div className={s.watch_collection}>
                {watchSectionCollection.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <NavLink to={item.path}>
                                <img src={item.value} alt={item.path}/>
                                <p>{item.description}</p>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}