import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Login} from "./login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <Header isAuth={false} login={null}/>
            <Navbar/>
            {/*<HeaderContainer*/}
            {/*login={null}*/}
            {/*isAuth={false}*/}
            {/*toggleIsFetching={toggleIsFetching}*/}
            {/*setUsersTotalCount={setUsersTotalCount}*/}
            {/*userId={null}*/}
            {/*setAuthUserData={setAuthUserData}*/}
            {/*email={null}*/}
            {/*setUsers={setUsers} />*/}
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       element={ <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                      element={ <ProfileContainer/>} />
                <Route path='/users'
                       element={ <UsersContainer/>}/>
                <Route path='/login'
                       element={ <Login/>}/>
            </div>
        </div>)
}

export default App;
