import React from 'react'
import { Card } from 'react-bootstrap'

const Song = ({ artist }) => {
    console.log(artist.data[0])
    console.log(artist.data[0].album.cover)
    return (
        <Card>
            <Card.Img variant="top" style={{width: '8rem'}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Song
