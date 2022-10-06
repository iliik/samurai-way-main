import {ActionsTypes, PostType, ProfilePageType} from "./store";

export type addPostActionCreatorType = {
    type: 'ADD-POST'
    postText: string
}
export type onPostActionChangeType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: "it-kamasutra"
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
           return {
                ...state,
                posts : [...state.posts, newPost],
                newPostText:''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
          return {
                ...state,
                newPostText : action.newText
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

export const onPostActionChange = (text: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text ? text : ""
    } as const
)


export default profileReducer