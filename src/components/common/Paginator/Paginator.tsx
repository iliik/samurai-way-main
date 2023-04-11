import React, {useState} from "react"
import s from "./UsersPaginator.module.css";

type TypeUsersPaginator = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void

}

let Paginator = (props: TypeUsersPaginator) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount=Math.ceil(pagesCount / portionSize)
    let [portionNumber , setPortionNumber] = useState( -1)
    let leftPortionPageNumber = (portionNumber -1) * portioSize +1
    let rightPortionPageNumber = portionNumber * portionSize

    return<div className={style.paginator}>
            {pages.map((p, i) => {
                return <span key={`${p}_${i}`} className={props.currentPage === p ? s.selectedPage : ''} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
}
export default Paginator