import React from 'react';
import {addPostActionCreator, onPostActionChange} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {RootStateType} from "../../../Redux/store";


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
        addPost: (postText: string) => {
            dispatch(addPostActionCreator(postText));
        }
    }
}

// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;