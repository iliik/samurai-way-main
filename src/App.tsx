import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType, RootStateType, state} from "./Redux/State";
import {stat} from "fs";


const App = () => {


    let dialog = state.dialogsPage
    let profile = state.profilePage.posts
    let posts = state.profilePage.posts

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs dialog={dialog}/>}/>
                <Route path='/profile' render={() =>
                    <Profile profile={profile} posts={posts}/>}/>
            </div>
        </div>
    );
}

export default App;
