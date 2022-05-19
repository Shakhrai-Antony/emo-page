import React from 'react'
import {NavLink} from "react-router-dom";

export const WatchComponentList = (props: any) => {
    return (
        <div>
            <NavLink to={props.path}>{props.value}</NavLink>
            <p>{props.description}</p>
        </div>
    )
}