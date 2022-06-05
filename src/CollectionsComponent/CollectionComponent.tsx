import React from 'react'
import {useSelector} from "react-redux";
import {getCurrentPage, getTotalItemsForMerchSection} from "../Store/goodsSelectors";
import {Paginator} from "../Paginator/Paginator";
import {GoodsListCollectionSection} from "./GoodsListCollectionSection";
import s from './collection.module.scss'


const CollectionComponent = () => {

    const goodsForCollectionSection = useSelector(getTotalItemsForMerchSection)
    const currentPage = useSelector(getCurrentPage)
    const array:any[] = []
    for (let i = (currentPage - 1) * 24; (i < 24 + (currentPage -1) * 24); i++ ) {
        if (goodsForCollectionSection[i]) array.push(goodsForCollectionSection[i])
    }
    const goodsListForCollectionSection = array.map((item: any) =>
        <GoodsListCollectionSection key={item.id} value={<img src={item.value} alt={item.path}/>}
                               price={item.price} description={item.description} path={item.path}/>
    )
    return (
        <div>
            <div className={s.collection_goods_list}>
                {goodsListForCollectionSection}
            </div>
            <div className={s.collection_paginator}>
                <Paginator/>
            </div>
        </div>
    )
}
export default CollectionComponent