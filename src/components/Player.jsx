import React from 'react'
import '../style/Player.css'
import { Link } from 'react-router-dom'

const Player = () => {
    return (
        <div className='player d-flex flex-column align-items-center'>
            <div className='player-icons d-flex justify-content-between align-items-center'>
                <i class="bi bi-shuffle"></i>
                <i class="bi bi-caret-left-fill"></i>
                <i class="bi bi-play-circle"></i>
                <i class="bi bi-caret-right-fill"></i>
                <i class="bi bi-arrow-repeat"></i>
            </div>
            <div className='player-slide'>
                 <div className='slider mt-2'></div>
            </div>
        </div>
    )
}

export default Player
