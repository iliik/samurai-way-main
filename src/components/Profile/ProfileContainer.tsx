import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";



export type ProfileContainerType = MapStateToProps & MapDispatchToProps


class ProfileContainer extends React.Component <ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.children
        if (!userId) {
            userId = 2
        }
        if (typeof userId === "number") {
            this.props.getUserProfile(userId,)
        }
    }

    render() {
        if (!this.props.isAuth ) return <Navigate to="/login"/>
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapDispatchToProps = {
    setUserProfile: (profile: null) => void
    getUserProfile:(userId: number)=>void
    userId:number
    isAuth:boolean

}
type MapStateToProps = {
    profile: null
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

// @ts-ignore
let WithUrlDataContainerComponent = withRouter<MapStateToProps, MapDispatchToProps>(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)