import React, {useState} from "react"
import styles from "./UsersPaginator.module.css";
import cn from 'classnames'

type TypeUsersPaginator = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: TypeUsersPaginator, portionSize = 10) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = []
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
        {/*.filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)*/}
        {pages
            .map((p, i) => {

                return <span className={cn(
                    {[styles.selectedPage]: props.currentPage === p}, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {props.onPageChanged(p)}}>{p}</span>})}
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}
