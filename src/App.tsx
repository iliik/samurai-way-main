import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Login} from "./login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {AppStateType} from "./redux/redux-store";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {getAuthUserData} from "./redux/auth-reducer";

class App extends Component<any, any> {
// const App :React.FC = () =>{
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer isAuth={false} login={null} getAuthUserData={getAuthUserData}/>
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
}


const mapStateToProps = (state: AppStateType) => ({

    initialized: state.app.initialized

})

export default compose(
    connect(mapStateToProps, {initializeApp})(App))
