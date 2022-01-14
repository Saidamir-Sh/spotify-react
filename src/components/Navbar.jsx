import React from 'react'
import Logo from '../assets/Logo.png'
import '../style/Navbar.css'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar vh-100  w-100 d-flex flex-column justify-content-between p-0'>
            <div>
                <img src={Logo} style={{width: '7em'}} className='d-block py-3'/>
                <div className='nav-link'><i class="bi bi-house-door-fill"></i> Home</div>
                <div className='nav-link'><i class="bi bi-search"></i> Search</div>
                <div className='nav-link'><i class="bi bi-collection"></i> Library</div>
            </div>
            <div>
                <Button variant="light" style={{borderRadius: '15px'}}>Sign up</Button>
                <Button variant="outline-secondary">Login</Button>
            </div>
        </div>
    )
}

export default Navbar
