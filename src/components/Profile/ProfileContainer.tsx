import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {Router} from "react-router-dom";


export type ProfileContainerType = MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component <ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

type MapDispatchToProps = {
    setUserProfile: (profile: null) => void
    getUserProfile: (userId: number) => void
    userId: number
    isAuth: boolean
    updateStatus: () => void
    params: { userId: number }
    getStatus: (userId: number) => void
    status: (status:string) => void
}
type MapStateToProps = {
    profile: null
    status: (status:string) => void

}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    Router, WithAuthRedirect)(ProfileContainer)

