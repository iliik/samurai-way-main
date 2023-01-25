import {Dispatch} from "redux";
import {authAPI} from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}


const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserData = (userId: null, email: null, login: null) => ({type: SET_USER_DATA, data: {userId, email, login}} as const)
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export default authReducer

