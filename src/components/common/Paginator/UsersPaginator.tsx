import React from "react"
import s from "./UsersPaginator.module.css";

type TypeUsersPaginator = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void

}

let UsersPaginator = (props: TypeUsersPaginator) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }

    return<div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
}
export default UsersPaginator