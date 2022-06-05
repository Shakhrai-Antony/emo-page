import React from 'react'
import s from './player.module.scss'

const PlayerComponent = () => {
    return (
        <div className={s.player}>
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="450"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src="https://embed.music.apple.com/us/playlist/emos-not-dead/pl.u-KVXBkl3TLKvL5VM">
            </iframe>
        </div>
    )
}

export default PlayerComponent