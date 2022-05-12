import {AppStateType} from "./Store";

export const getGoods = (state: AppStateType) => {
    return state.goodsPage.goods
}
export const getGoodsForCarousel = (state: AppStateType) => {
    return state.goodsPage.goodsForCarousel
}
export const getGirlsGoods = (state: AppStateType) => {
    return state.goodsPage.goodsForLadies
}