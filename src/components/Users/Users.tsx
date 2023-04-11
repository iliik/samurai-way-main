import React from "react"
import {PhotosType, UserType} from "../../redux/users-reducer";

import {User} from "./User";
import {Paginator} from "./../common/Paginator/Paginator";




type TypeUser = {
    users: UserType[];
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]

    user: {
        id: number
        name: string
        status: string
        photos: PhotosType
        followed: boolean
    }
}

let Users = (props: TypeUser) => {
    return <div>

        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Paginator currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount}
       />
        <div>
            {props.users.map(u => <User follow={props.follow}
                                        unfollow={props.unfollow}
                                        followingInProgress={props.followingInProgress}
                                        user={u} key={u.id}/>)}
        </div>
    </div>
}
export default Users