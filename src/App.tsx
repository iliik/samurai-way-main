import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Header} from "./components/Header/Header";
import Users from "./components/Users/Users";


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
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>)
}

export default App;
