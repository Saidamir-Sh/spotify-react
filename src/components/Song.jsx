import React from 'react'
import '../style/Song.css'
import { Card } from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'

const Song = ({ artists }) => {
    console.log(artists)
    return (
        <Col md={3} style={{backgroundColor: 'transparent'}}>
        <Card key={artists.id}>
            <Card.Img variant="top" src={artists.album.cover_medium}  />
            <Card.Body>
              <Card.Title>{artists.title}</Card.Title>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Song
