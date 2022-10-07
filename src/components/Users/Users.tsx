import React from "react"
import s from './Users.module.css'
import {initialStatePropsType, UsersPropsType} from "../../Redux/users-reducer";

export type UserType = {
    usersPage: UsersPropsType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users:initialStatePropsType[])=>void
}


let Users = (props:UserType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am boss zorro',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/550x/31/23/2f/31232fe4b51b47763282524f008d9081.jpg',
                followed: true,
                fullName: 'Ilya',
                status: 'I am boss wan',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://play-lh.googleusercontent.com/CWzqShf8hi-AhV9dUjzsqk2URzdIv8Vk2LmxBzf-Hc8T-oGkLVXe6pMpcXv36ofpvtc',
                followed: false,
                fullName: 'Angel',
                status: 'I am boss ty',
                location: {city: 'Kiev', country: 'Belarus'}
            },
            {
                id: 4,
                photoUrl: 'https://photoscissors.com/images/samples/1-before.jpg',
                followed: true,
                fullName: 'Ola',
                status: 'I am boss sri',
                location: {city: 'Minsk', country: 'Ukraine'}
            },
        ])
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.usersPhoto}/>
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