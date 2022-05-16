import React, {useEffect, useRef, useState} from 'react'
import s from './emovideo.module.scss'
import girlsCollectionBanner from '../../imges/web_banner_girls_collection.png'
import free_socks_banner from '../../imges/emogoods/emogoodsladies/free_socks_banner.png'
import {NavLink} from "react-router-dom";
import ReactPlayer from "react-player";




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
export const SecondEmoVideo = () => {
    return (
        <div>
            <div className={s.emovideo}>
                <iframe width="1166"
                        height="656"
                        src="https://www.youtube.com/embed/BhS_T3lRu04"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={s.girls_collection_banner}>
                <NavLink to='/collections/coffee'>
                    <img src={free_socks_banner} alt="/collections/emo-girl"/>
                </NavLink>
            </div>
        </div>

    )
}
export const ThirdEmoVideo = () => {
    return (
        <div>
            <div className={s.emovideo}>
                <iframe width="1166"
                        height="656"
                        src="https://www.youtube.com/embed/NAcbFQsnwMM"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>

    )
}
export const StreamVideo = () => {
    const [videoVisibility, setVideoVisibility] = useState<boolean>()
    const myRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
    console.log(videoVisibility)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setVideoVisibility(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
    return (
        <div ref={myRef} className={s.player_wrapper}>
            <div>
                <ReactPlayer className={s.video__container}
                             playing={videoVisibility}
                             muted={true}
                             url="https://www.youtube.com/embed/GEQFwln-aqc"

                >
                </ReactPlayer>
            </div>

        </div>
    )
}