import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import { PropsTypeForAPP, RootStateType} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type PropsType={
    state: RootStateType
    addPost: () => void
    updateNewPostText: (value: string) => void
}

const App: React.FC<PropsTypeForAPP> = () => {
    // debugger
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />

            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() =>  <DialogsContainer />
                       }/>

                <Route path='/profile'
                       render={ ()  => <Profile />
                       }/>
            </div>

        </div>)
}

export default App;
