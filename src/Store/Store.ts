
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import goodsReducer from "./goodsReducer";

const rootReducer = combineReducers({
    goodsPage: goodsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunk))
type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
type PropertiesType<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes <T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export default store;