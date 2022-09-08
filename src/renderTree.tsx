import {addPost, RootStateType} from "./Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";



export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root'));
}