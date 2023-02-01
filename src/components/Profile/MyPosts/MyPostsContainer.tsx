import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect, ConnectedProps} from "react-redux";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../redux/store";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

let connector = connect(mapStateToProps, mapDispatchToProps)

export type ConnectPropsType = ConnectedProps<typeof connector>

// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const MyPostsContainer = connector(MyPosts)

export default MyPostsContainer;