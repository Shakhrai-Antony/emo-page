import React from 'react'
import {useSelector} from "react-redux";
import {getVideos} from "../../Store/goodsSelectors";
import {VideosList} from "./VideosList";
import {NavLink} from "react-router-dom";
import s from './latestVideos.module.scss'

export const LatestVideosSection = () => {
    const videos = useSelector(getVideos)
    const videosList = videos.map((item: any) =>
        <VideosList value={<img src={item.value} alt={item.to}/>} key={item.id} path={item.to}
                    description={item.description} date={item.date}/>
    )
    return (
        <>
            <div className={s.latest_video_description}>
                <p>
                    latest felt emo might delete
                </p>
                <div>
                    <NavLink to='/blogs/felt-emo-might-delete'>
                        <p>View all</p>
                    </NavLink>
                </div>
            </div>
            <div className={s.latest_video_section}>
                {videosList}
            </div>
        </>

    )
}