import React from 'react'
import {useMatch} from "react-router-dom";
export const WatchBlog = () => {

    const match = useMatch('blogs/felt-emo-might-delete/:felt');
    const blogName = match?.params.felt
    return (
        <div>
            <p>

            </p>
            <p>

            </p>
        </div>
    )
}