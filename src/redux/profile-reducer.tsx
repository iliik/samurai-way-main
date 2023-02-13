import {ActionsTypes, PostType, ProfilePageType, ProfileType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/Api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export type addPostActionCreatorType = {
    type: 'ADD-POST'
    postText: string
    newPostText: string

}
export type onPostActionChangeType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type setUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}
export type setStatusType = {
    type: "SET_STATUS"
    status: string
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: {} as ProfileType,
    status: '',
    newPostText:''
}

const profileReducer = (state: { posts: ({ likesCount: number; id: number; message: string } | { likesCount: number; id: number; message: string } | { likesCount: number; id: number; message: string } | { likesCount: number; id: number; message: string })[] }, action: { readonly newPostText: string; readonly type: string }): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: null) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)


export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    console.log('getStatus')
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    console.log('updateStatus')

    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


export default profileReducer