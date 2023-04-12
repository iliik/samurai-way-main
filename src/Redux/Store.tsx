import {sendMessageCreatorType} from "./dialogs-reducer";
import {
    addPostActionCreatorType,
    onPostActionChangeType,
    setPhotosType,
    setStatusType,
    setUserProfileType
} from "./profile-reducer";
import {PhotosType} from "./users-reducer";


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

// Profile
export type PostType = {
    id?: number,
    message: string,
    likesCount: number

}
export type ProfilePageType = {
    isOwner: boolean;
    posts: Array<PostType>
    profile:  ProfileType,
    status: string
    newPostText:string
    savePhoto:any
    saveProfile: any
}

export type ProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: PhotosType
    contacts: {
        github: string,
        vk: string
        facebook:string,
        instagram:string,
        twitter:string,
        website:string,
        youtube:string,
        mainLink:string,
    }
}

export type SidebarType = {}
export type RootStateType = {
    newPostText:string
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
    isAuth: boolean
    auth: {
        isAuth: boolean
    }
    newMessageBody: string

}

export type ActionsTypes = onPostActionChangeType | addPostActionCreatorType |
    setUserProfileType | sendMessageCreatorType  | setStatusType | setPhotosType
