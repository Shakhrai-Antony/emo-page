import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getTotalItemsForMerchSectionLength
} from "../Store/goodsSelectors";
import {actions} from "../Store/goodsReducer";
import s from './pages.module.scss'

export const Paginator = () => {
    const dispatch = useDispatch()
    const setCurrentPage = (page: number) => {
        dispatch(actions.setNewPage(page))
    }
    const totalItems = useSelector(getTotalItemsForMerchSectionLength)
    const currentPage = useSelector(getCurrentPage)
    const totalPages = Math.ceil(totalItems / 24);
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    useEffect(() => {
        window.scrollTo({top: 0})
    }, [currentPage])


    return (
        <div className={s.paginationSection}>

            {
                currentPage > 1 && <button className={s.paginator_button_left}
                                           onClick={() => {
                                               setCurrentPage(currentPage - 1)
                                           }}>
                </button>
            }

            {pages.map((item, index) => {
                return (
                    <span className={currentPage === item ? s.selectedPage : s.pages}
                          onClick={() => setCurrentPage(item)} key={index}>{item}</span>
                )
            })}
            {
                currentPage < totalPages && <button className={s.paginator_button_right}
                                                    onClick={() => {
                                                        setCurrentPage(currentPage + 1)
                                                    }}>
                </button>
            }
        </div>
    )
}