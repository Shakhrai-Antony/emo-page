
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import goodsReducer from "./goodsReducer";

const rootReducer = combineReducers({
    goodsPage: goodsReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>
type PropertiesType<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes <T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export default store;