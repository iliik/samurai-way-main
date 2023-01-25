import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


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

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)


let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

// @ts-ignore
let WithUrlDataContainerComponent = withRouter<MapStateToProps, MapDispatchToProps>(AuthRedirectComponent)


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)