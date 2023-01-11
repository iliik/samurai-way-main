import React from 'react';
import {addPostActionCreator, onPostActionChange} from "../../../redux/profile-reducer";
import {connect, ConnectedProps} from "react-redux";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/store";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            let action = onPostActionChange(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps)

export type ConnectPropsType = ConnectedProps<typeof connector>

// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const MyPostsContainer = connector(MyPosts)

export default MyPostsContainer;