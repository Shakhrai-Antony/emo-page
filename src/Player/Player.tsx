import React from 'react'
import s from './player.module.scss'

export const Player = () => {
    return (
        <div className={s.player}>
            <iframe src="https://embed.music.apple.com/us/playlist/emos-not-dead/pl.u-KVXBkl3TLKvL5VM"
                    title="YouTube video player" frameBorder="0"
                    allow="autoplay; encrypted-media;"
                    sandbox='allow-forms; allow-popups; allow-same-origin; allow-scripts; allow-storage-access-by-user-activation;
                    allow-top-navigation-by-user-activasion'>

            </iframe>
        </div>
    )
}