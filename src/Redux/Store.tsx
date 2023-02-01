import dialogReducer, {sendMessageCreatorType, updateNewMessageBodyCreatorType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer, {
    addPostActionCreatorType,
    onPostActionChangeType,
    setStatusType,
    setUserProfileType
} from "./profile-reducer";


type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    message: string
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
type DialogsPropsType = {
    state: DialogPageType
    store: StoreType
}


// Profile
export type PostType = {
    id?: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {

    posts: Array<PostType>
    newPostText: string,
    profile: null,

}
export type PostPropsType = {
    postsData: PostType[],
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}
export type ProfilePagePropsType = {
    profilePage: ProfilePageType,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
    isAuth: boolean
    auth: {
        isAuth: boolean
    }

}

// OOP with dispatch
export type StoreType = {
    _state: RootStateType,
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void


}

//APP
export type PropsTypeForAPP = {
    state: RootStateType
    dispatch?: (action: ActionsTypes) => void
}

export type ActionsTypes = onPostActionChangeType | addPostActionCreatorType |
    setUserProfileType | sendMessageCreatorType | updateNewMessageBodyCreatorType | setStatusType

let store: StoreType = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],

            newPostText: "it-kamasutra",
            profile: null,


        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {},

    },
    _onChange() {
        console.log('Hello')
    },
    subscribe(observer) {
        this._onChange = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange();
    }
}


// @ts-ignore
window.state = store.getState()
export default store
