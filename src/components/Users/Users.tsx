import React from "react"
import s from "./Users.module.css";
import usersPhoto from "../../assest/images/User.png";
import {initialStatePropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type TypeUser = {
    users: initialStatePropsType[];
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId:number) => void
    followingInProgress: []
}

let Users = (props: TypeUser) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                      <img src={u.photos.small != null ? u.photos.small : usersPhoto}
                           className={s.usersPhoto}/>
                    </NavLink>

                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true,u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id} `, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf '
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })

                        }}> Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id} `, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf '
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
                        }}> Follow </button>}
                </div>
            </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </div>)}
    </div>
}
export default Users