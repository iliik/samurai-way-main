import React from "react"
import s from './Users.module.css'
import usersPhoto
    from '../../assest/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'
import axios from "axios";
import {initialStatePropsType, UsersPropsType} from "../../Redux/users-reducer";


export type UserType = {
    users: initialStatePropsType [];
    usersPage: UsersPropsType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: initialStatePropsType[]) => void
    photos: string
}


class Users extends React.Component<UserType> {

    constructor(props) {
        super(props);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
                this.props.setUsers(response.data.items)
            })
        }

        render() {
            return <div>
                {
                    this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.usersPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}> Unfollow </button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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
    }


export default Users


// let Users = (props: UserType) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//
//     return <div>
//         <button onClick={getUsers}>Get Users</button>
//         {props.users.map(u => <div key={u.id}>
//             <span>
//                 <div>
//                     <img src={u.photos.small != null ? u.photos.small : usersPhoto} className={s.usersPhoto}/>
//                 </div>
//                 <div>
//                     {u.followed
//                         ? <button onClick={() => {
//                             props.unfollow(u.id)
//                         }}> Unfollow </button>
//                         : <button onClick={() => {
//                             props.follow(u.id)
//                         }}> Follow </button>}
//                 </div>
//             </span>
//             <span>
//                 <span>
//                     <div>{u.fullName}</div>
//                     <div>{u.status}</div>
//                 </span>
//                 <span>
//                     <div>{u.location.city}</div>
//                     <div>{u.location.country}</div>
//                 </span>
//             </span>
//         </div>)}
//     </div>
// }
// export default Users