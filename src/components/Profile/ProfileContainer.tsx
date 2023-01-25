import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";


export type ProfileContainerType = MapStateToProps & MapDispatchToProps


class ProfileContainer extends React.Component <ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.children
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapDispatchToProps = {
    setUserProfile: (profile: null) => void
    getUserProfile:(userId: number)=>void
    userId:number

}
type MapStateToProps = {
    profile: null

}
let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

// @ts-ignore
let WithUrlDataContainerComponent = withRouter<MapStateToProps, MapDispatchToProps>(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)