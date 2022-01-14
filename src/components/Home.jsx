import React from 'react'
import {useState, useEffect} from 'react'
import Song from './Song'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

    const [isLoading, setisLoading] = useState(true)
    const [artist, setArtist] = useState(null)

    useEffect( async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
            if(response.ok) {
                let data = await response.json()
                setArtist(data)
                setisLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className='home'>
            {
                isLoading ? <Spinner animation="border" /> : <Song artist={artist} />
            }
        </div>
    )
}

export default Home
