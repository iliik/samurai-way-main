import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import { PostType, RootStateType, state} from "./Redux/State";


export type PropsType={
    state:RootStateType
    addPost:PostType
}
const App = (props: PropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() =>
                    <Profile state={props.state.profilePage} addPost={props.addPost} />}/>
            </div>
        </div>
    );
}

export default App;
