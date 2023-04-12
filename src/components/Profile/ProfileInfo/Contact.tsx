import React from "react";

type ProfileProps = {
    contactsTitle: string
    contactValue:string
}
export const Contact = (props: ProfileProps) => {
    return <div><b>{props.contactsTitle}</b>:{props.contactValue}</div>

}

