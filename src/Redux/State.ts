export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}
export type SidebarType = {}

export type ProfilePageType = {
    posts: PostType[]
}

export type DialogPropsType = {
    dialog: DialogPageType
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 22},
            {id: 2, message: "Hi, Im faen", likesCount: 14}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Olga'},
            {id: 4, name: 'Ilya'},
            {id: 5, name: 'Inga'},
            {id: 6, name: 'Vova'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'Hi Bro'},
            {id: 4, message: 'Im Faen'},
            {id: 5, message: 'Favoeite'},
            {id: 6, message: 'Gang'}
        ]
    },
    sidebar: {}
}
