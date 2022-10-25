import React from "react"
import s from './Users.module.css'
// @ts-ignore
import usersPhoto from '../../assest/images/User.png'
import axios from "axios";
import {initialStatePropsType, UsersPropsType} from "../../Redux/users-reducer";


export type UserType = {
    users: initialStatePropsType [];
    usersPage: UsersPropsType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: initialStatePropsType[]) => void
    photos: string

    currentPage: number
    pageSize: number
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    totalUsersCount: number
}


class Users extends React.Component<UserType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 0; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === && s.selectedPage} onClick={(e) => {
                        this.onPageChanged(p)
                    }}>{p}</span>
                })}

            </div>
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