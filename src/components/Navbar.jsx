import React from 'react'
import Logo from '../assets/Logo.png'
import '../style/Navbar.css'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar w-100 d-flex flex-column justify-content-between p-0' style={{height: '90vh'}}>
            <div>
                <img src={Logo} style={{width: '7em'}} className='d-block py-3'/>
                <Link to='/'>
                    <div className='nav-link'><i class="bi bi-house-door-fill"></i> Home</div>
                </Link>
                <Link to='/album'>
                    <div className='nav-link'><i class="bi bi-music-note-list"></i> Album</div>
                </Link>
                <Link to='/artist'>
                    <div className='nav-link'><i class="bi bi-person"></i> Artist</div>    
                </Link>
            </div>
            <div className='d-flex flex-column justify-content-center' style={{width: '85%'}}>
                <Button variant="light mb-3" style={{borderRadius: '15px'}}>Sign up</Button>
                <Button variant="outline-secondary">Login</Button>
                <div className='footer-link mx-auto'>
                    <a className='text-muted'>Cookie | </a>
                    <a className='text-muted'>Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
