import {AppStateType} from "./Store";

export const getGoods = (state) => {
    return state.goodsPage.goods
}
export const getGoodsForCarousel = (state) => {
    return state.goodsPage.goodsForCarousel
}
export const getGirlsGoods = (state) => {
    return state.goodsPage.goodsForLadies
}
export const getFemaleGoodsForCarousel = (state) => {
    return state.goodsPage.femaleGoodsForCarousel
}
export const getCoffeeGoods = (state) => {
    return state.goodsPage.coffeeGoods
}
export const getVideos = (state) => {
    return state.goodsPage.videosSection
}
export const getTotalItemsForMerchSection = (state) => {
    return state.goodsPage.merchSection
}
export const getTotalItemsForMerchSectionLength = (state) => {
    return state.goodsPage.totalItemsCount
}
export const getCurrentPage = (state) => {
    return state.goodsPage.currentPage
}
export const getWatchList = (state) => {
    return state.goodsPage.watchSection
}
export const getCollectionForWatchSection = (state) => {
    return state.goodsPage.collectionForWatchSection
}
export const getClassicEndMerch = (state) => {
    return state.goodsPage.classicEndMerch
}
export const getCrystalDyeMerch = (state) => {
    return state.goodsPage.crystalDyeMerch
}
export const getRevivalTourMerch = (state) => {
    return state.goodsPage.revivalTourMerch
}
export const getEmosUndeadMerch = (state) => {
    return state.goodsPage.emosUndeadMerch
}
export const getCoffeeMugsMerch = (state) => {
    return state.goodsPage.coffeeMugsMerch
}
export const getTeeAndLongSleevesMerch = (state) => {
    return state.goodsPage.teesAndLongSleevesMerch
}
export const getHoodiesMerch = (state) => {
    return state.goodsPage.hoodiesMerch
}
export const getHeadwearAndAccessoriesMerch = (state) => {
    return state.goodsPage.headwearAndAccessoriesMerch
}
export const getGoodsForKidsMerch = (state) => {
    return state.goodsPage.goodsForKids
}
export const getGoodsForCart = (state) => {
    return state.goodsPage.goodsInCart
}
export const getAmountOfGood = (state) => {
    return state.goodsPage.goodsCount
}
export const getGoodsSize = (state) => {
    return state.goodsPage.goodsSize
}
export const getGoodsPrice = (state) => {
    return state.goodsPage.goodsPrice
}
export const getAmountOfGoods = (state) => {
    return state.goodsPage.amountOfGoodsInCart
}