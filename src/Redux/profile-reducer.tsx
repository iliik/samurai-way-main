import {ActionsTypes, PostType, ProfilePageType} from "./store";

export type addPostActionCreatorType = {
    type:'ADD-POST'
    postText: string
}
export type onPostActionChangeType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = (postText: string) => ({
        type: ADD_POST,
        postText } as const
)

export const onPostActionChange = (text: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text ? text : "" } as const
)

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
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state;
    }

    return state;
}



export default profileReducer