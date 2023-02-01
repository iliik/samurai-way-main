import React from "react"
import s from "./Users.module.css";
import usersPhoto from "../../assest/images/User.png";

import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/users-reducer";

type TypeUser = {
    users: UserType[];
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
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
                    {u.followed ? <button disabled={props.followingInProgress
                            .some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}> Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}> Follow </button>}
                </div>
            </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>

            </div>)}
    </div>
}
export default Users