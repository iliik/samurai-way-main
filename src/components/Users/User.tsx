import React from "react"
import s from "./Users.module.css";
import usersPhoto from "../../assest/images/User.png";
import {NavLink} from "react-router-dom";
import {PhotosType} from "../../redux/users-reducer";


type TypeUser = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
    user: {
        id: number
        name: string
        status: string
        photos: PhotosType
        followed: boolean
    }
}

export let User = (props: TypeUser) => {
    console.log(props.user)
    return <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                      <img src={props.user.photos.small != null ? props.user.photos.small : usersPhoto}
                           className={s.usersPhoto}/>
                    </NavLink>

                </div>
                <div>
                    {props.user.followed ? <button disabled={props.followingInProgress
                            .some(id => id === props.user.id)} onClick={() => {
                            props.unfollow(props.user.id)
                        }}> Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.follow(props.user.id)
                                  }}> Follow </button>}
                </div>
            </span>
        <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>

    </div>
}


