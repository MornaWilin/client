import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { loggedReducer } from './islogged'


export const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})


export type RootState = ReturnType<typeof allReducers>