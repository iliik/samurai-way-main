import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


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
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapDispatchToProps = {
    setUserProfile: (profile: null) => void
    getUserProfile: (userId: number) => void
    userId: number
    isAuth: boolean

}
type MapStateToProps = {
    profile: null
}

let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter, WithAuthRedirect)(ProfileContainer)

