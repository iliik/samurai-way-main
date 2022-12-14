import React from "react"
import s from "./Users.module.css";
import usersPhoto from "../../assest/images/User.png";
import {initialStatePropsType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type TypeUser = {
    users: initialStatePropsType[];
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
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
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}> Unfollow </button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}> Follow </button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
            </div>)}
    </div>
}
export default Users