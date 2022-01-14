import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './components/Home'
import Album from './components/Album'
import Artist from './components/Artist'
import Navbar from './components/Navbar'
import Player from './components/Player'
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Container fluid={true} className='px-0'>
      <Router> 
        <Row className='no-gutters'>
          <Col md={2} className='position-fixed ' style={{zIndex: '9999'}}>
            <Navbar />
          </Col>
          <Col md={2}>
          </Col>
          <Col md={10}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/album'  element={<Album />} />
                <Route path='/artist' element={<Artist />} /> 
            </Routes>
          </Col>
          <Col md={12} className='position-fixed' style={{bottom: '0px'}} >
            <Player />
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
