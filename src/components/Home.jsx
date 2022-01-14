import React from 'react'
import {useState, useEffect} from 'react'
import Song from './Song'
import '../style/Home.css'
import { Spinner } from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const Home = () => {

    const [isLoading, setisLoading] = useState(true)
    const [artists, setArtists] = useState(null)

    useEffect( async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
            if(response.ok) {
                let data = await response.json()
                setArtists(data.data)
                setisLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <Container className='home'>
            <div className='home-links'>
                <a>TRENDING</a>
                <a>PODCAST</a>
                <a>MOODS AND GENRES</a>
                <a>NEW RELEASES</a>
                <a>DISCOVER</a>
            </div>
            <h1 className='font-weight-bold text-white pt-5'>#THROWBACKTHURSDAY</h1>
            <Row className='pt-4'>
                {
                    isLoading ? <Loader /> : artists.map((artist) => {
                       return <Song artists={artist} />
                    })
                }

            </Row>
        </Container>
    )
}

export default Home
