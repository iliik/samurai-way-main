import React, {ChangeEvent, useEffect, useState} from "react";


export const ProfileStatusWithHooks = (props: any) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                  <b>Status:</b>  <span onDoubleClick={activateMode}>{props.status || '---'}</span>
                </div>
            }

            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           value={status}
                           autoFocus={true}
                           onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}

