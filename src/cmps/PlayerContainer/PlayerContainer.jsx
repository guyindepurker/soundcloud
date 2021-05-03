
import React from 'react'
import ReactPlayer from 'react-player'

import './PlayerContainer.scss'

const PlayerContainer = ({ selectedTrack }) => {

    if (!selectedTrack) return null
    return (
        <section className="player-container flex center-center">
            <ReactPlayer width='400px' height='200px' url={selectedTrack.uri} />
        </section>
    )


}

export default PlayerContainer
