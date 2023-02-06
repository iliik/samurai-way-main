import {Dispatch} from "redux";
import {authAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password:null,
    rememberMe:null,
}


export type InitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean  | null,
    password:null | number
    rememberMe:null | number,
}
const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }

}

export const setAuthUserData = (userId: null, email: null, login: null,isAuth: boolean) => ({type: SET_USER_DATA, payload: {userId, email, login,isAuth}} as const)
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login,true))
            }
        })
}

export const Login = (email: null, password:null,rememberMe:null) => (dispatch:Dispatch) => {
    authAPI.login(email,password,rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {

            }
        })
}
export const Logout = () => (dispatch:Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
        })
}

export default authReducer

