import React from "react";
type ProfileProps ={
    contacts: {
        github: string,
        vk: string
        facebook:string,
        instagram:string,
        twitter:string,
        website:string,
        youtube:string,
        mainLink:string,
    }
}
export const Contact = (props:ProfileProps) => {
    return <div><b>{props.contacts.youtube}</b></div>

}

