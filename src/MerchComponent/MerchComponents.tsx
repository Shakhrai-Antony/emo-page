import React from 'react'
import {Paginator} from "../Paginator/Paginator";
import {useSelector} from "react-redux";
import {getCurrentPage, getTotalItemsForMerchSection} from "../Store/goodsSelectors";
import {GoodsListMerchSection} from "./GoodsListMerchSection";
import s from './merchgoods.module.scss'

export const MerchComponent = () => {

    const goodsForMerchSection = useSelector(getTotalItemsForMerchSection)
    const currentPage = useSelector(getCurrentPage)
    const array:any[] = []
        for (let i = (currentPage - 1) * 24; (i < 24 + (currentPage -1) * 24); i++ ) {
            if (goodsForMerchSection[i]) array.push(goodsForMerchSection[i])
        }
    const goodsListForMerchSection = array.map((item: any) =>
        <GoodsListMerchSection key={item.id} value={<img src={item.value} alt={item.path}/>}
        price={item.price} description={item.description} path={item.path}/>
    )
    return (
        <div>
            <div className={s.merch_goods_list}>
                {goodsListForMerchSection}
            </div>
            <div className={s.merch_paginator}>
                <Paginator/>
            </div>
        </div>
    )
}