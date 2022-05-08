import {AppStateType} from "./Store";

export const getGoods = (state: AppStateType) => {
    return state.goodsPage.goods
}