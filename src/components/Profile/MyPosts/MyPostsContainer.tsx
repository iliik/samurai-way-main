import React from 'react';
import {addPostActionCreator, onPostActionChange} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispathcToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: any) => {
            let action = onPostActionChange(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const MyPostsContainer = connect(mapStateToProps, mapDispathcToProps)(MyPosts)


export default MyPostsContainer;