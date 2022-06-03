import React, {useState} from 'react'
import face_down from '../../../public/music/face_down.mp3'



const MusicStore = () => {
    const [songs, setSongs] = useState([
        {
            title: 'Misery Business',
            artist: 'Machine Gun Kelly',
            src: face_down
        }
    ])
}