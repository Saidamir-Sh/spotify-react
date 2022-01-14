import React from 'react'
import Home from './Home'
import { Card } from 'react-bootstrap'

const Song = ({ artists }) => {
    
    return (
        <Card key={artists.id}>
            <Card.Img variant="top" src={artists.album.cover} style={{width: '8rem'}} />
            <Card.Body>
              <Card.Title>{artists.title} hello</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Song
