const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

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
}
export type UsersPropsType = {
    users: initialStatePropsType
}

let initialState = {
    users: [
        // {
        //     id: 1, photoUrl:'https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg', followed: false, fullName: 'Dmitry', status: 'I am boss zorro',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2, photoUrl:'https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg', followed: true, message: 'Ilya', fullName: 'I am boss wan',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3, photoUrl:'https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc', followed: false, message: 'Angel', fullName: 'I am boss ty',
        //     location: {city: 'Kiev', country: 'Belarus'}
        // },
        // {
        //     id: 4, photoUrl:'https://photoscissors.com/images/samples/1-before.jpg', followed: true, message: 'Ola', fullName: 'I am boss sri',
        //     location: {city: 'Minsk', country: 'Ukraine'}
        // },
    ],
}

const usersReducer = (state: any = initialState, action: any) => {
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
            return {...state, users: [...state.users, ...action.users]}
        }

        default :
            return state
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: number) => ({type: SET_USERS, users})

export default usersReducer