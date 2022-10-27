import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {initialStatePropsType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";


// export type ProfileContainerType = {
//     setUserProfile: (profile: null) => void
//     profile: null
// }
export type ProfileContainerType = MapStateToProps & MapDispatchToProps


class ProfileContainer extends React.Component <ProfileContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
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

}
type MapStateToProps = {
    profile: null
}
let mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.profile
})

export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileContainer)