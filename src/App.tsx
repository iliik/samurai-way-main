import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Login} from "./login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <Header isAuth={false} login={null}/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>
                    <Route path={"/profile"}>
                        <Route index element={<ProfileContainer/>}/>
                        <Route path={':userId'} element={<ProfileContainer/>}/>
                    </Route>
                    <Route path='/users'
                           element={<UsersContainer/>}/>
                    <Route path='/login'
                           element={<Login/>}/>
                </Routes>

            </div>
        </div>)
}

export default App;
