import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {addPost, RootStateType} from "./Redux/State";


export type PropsType={
    state: RootStateType
    addPost: () => void
    updateNewPostText: (value: string) => void
}

const App = (props: PropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                            state={props.state.dialogsPage}
                            addPost={addPost}
                       />}/>

                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                           newPostText={props.state.profilePage.newPostText}
                       />}/>
            </div>
        </div>
    );
}

export default App;
