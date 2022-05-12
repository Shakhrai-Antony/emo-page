import React from 'react'
import s from './emovideo.module.scss'
import girlsCollectionBanner from './../imges/web_banner_girls_collection.png'
import {NavLink} from "react-router-dom";

export const EmoVideo = () => {
    return (
        <div>
            <div className={s.emovideo}>
                <iframe width="1166"
                        height="656"
                        src="https://www.youtube.com/embed/vAs5_LFEF0M"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={s.girls_collection_banner}>
                <NavLink to='/collections/emo-girls'>
                    <img src={girlsCollectionBanner} alt="/collections/emo-girl"/>
                </NavLink>
            </div>
        </div>

    )
}