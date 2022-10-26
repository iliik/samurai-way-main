const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export type locationType = {
    city: string,
    country: string
}
export type initialStatePropsType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    photoUrl: string
    location: locationType
    photos: string
}
export type UsersPropsType = {
    users: initialStatePropsType []
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


const usersReducer = (state: UsersPropsType = initialState, action: any) => {
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
            return {...state, totalUsersCount: action.count}
        } case TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        default :
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: initialStatePropsType[]) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: initialStatePropsType[]) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount: initialStatePropsType[]) => ({type: SET_USERS_TOTAL_COUNT, count:totalUsersCount })
export const toggleIsFetchingAC = (isFetching: initialStatePropsType[]) => ({type: TOGGLE_IS_FETCHING, count:isFetching })

export default usersReducer

