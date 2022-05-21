import React from 'react'
import {useMatch} from "react-router-dom";
import data from "../config/watch.json";

export const WatchBlog = () => {

    const match = useMatch('blogs/felt-emo-might-delete/:felt');
    const blogName = match?.params.felt
    type ObjectKey = keyof typeof data;
    const myVar = blogName as ObjectKey;
    console.log(blogName)
    console.log(match)
console.log(myVar)

    return (
        <div>
            <p>
                {data[myVar].date}
            </p>
            <p>
                {data[myVar].description}
            </p>
        </div>
    )
}