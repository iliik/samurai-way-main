import {usersAPI} from "../api/Api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type followCreatorType = {
    type: "FOLLOW"
    userId: number
}
export type unfollowCreatorType = {
    type: "UNFOLLOW"
    userId: number
}
export type setUserCreatorType = {
    type: "SET_USERS"
    users: []
}
export type setCurrentPageCreatorType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type setUsersTotalCreatorType = {
    type: "SET_USERS_TOTAL_COUNT"
    totalUsersCount: number
}
export type toggleisFetchingCreatorType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export type toggleFollowingProgressType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    isFetching: boolean
    userId: number
}

type ActionsTypes =
    followCreatorType
    | unfollowCreatorType
    | setUserCreatorType
    | setCurrentPageCreatorType
    | setUsersTotalCreatorType
    | toggleisFetchingCreatorType
    | toggleFollowingProgressType

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
    small: string
    large: string
}
type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],

}
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS : {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE : {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT : {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default :
            return state
    }
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
} as const)


export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
            })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgress(true, userId))

        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {

        dispatch(toggleFollowingProgress(true, userId))

        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export default usersReducer

