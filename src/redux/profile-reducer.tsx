import {ActionsTypes, PostType, ProfilePageType} from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export type addPostActionCreatorType = {
    type: 'ADD-POST'
    postText: string
}
export type onPostActionChangeType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type setUserProfileType = {
    type: "SET_USER_PROFILE"
    profile: null
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: "it-kamasutra",
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
        type: ADD_POST
    } as const
)
export const setUserProfile = (profile: null) => ({
        type: SET_USER_PROFILE, profile
    } as const
)

export const onPostActionChange = (text: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text ? text : ""
    } as const
)


export default profileReducer