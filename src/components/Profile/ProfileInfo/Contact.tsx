import React from "react";
import {ProfileType} from "../../../redux/store";

type ProfileProps = {
    contactsTitle: {}
    contactValue:{}
    profile: ProfileType
}
export const Contact = (props: ProfileProps) => {
    return <div> <b> {props.contactsTitle}</b>:{props.contactValue}</div>

}

