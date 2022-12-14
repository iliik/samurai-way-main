const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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

type ActionsTypes =
    followCreatorType
    | unfollowCreatorType
    | setUserCreatorType
    | setCurrentPageCreatorType
    | setUsersTotalCreatorType
    | toggleisFetchingCreatorType

export type locationType = {
    city: string,
    country: string
}
export type initialStatePropsType = {
    auth: {
        isAuth: false,
        login: null
    };
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    photoUrl: string
    location: locationType
    photos: string
}

let initialState = {
    users: [] as initialStatePropsType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


const usersReducer = (state = initialState, action: ActionsTypes) => {
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
        default :
            return state
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: initialStatePropsType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export default usersReducer

