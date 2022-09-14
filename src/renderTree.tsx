import {addPost, DialogPropsType, PostType, ProfilePageType, RootStateType} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";



export const renderTree = (state: ProfilePageType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}

            }/>
        </BrowserRouter>,
        document.getElementById('root'));
}