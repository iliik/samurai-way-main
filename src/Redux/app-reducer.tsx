import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
}


export type InitialStateType = {
    initialized: boolean

}
const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS,} as const)

export const initializeApp = () => (dispatch: Dispatch) => {
// @ts-ignore
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })


}

export default appReducer

