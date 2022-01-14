import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Album from './components/Album'
import Artist from './components/Artist'
import Navbar from './components/Navbar'
import Player from './components/Player'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <section className="App">
      
      <Router>
        <Navbar />
          <Routes>
            <Route path='/'       element={<Home />} />
            <Route path='/album'  element={<Album />} />
            <Route path='/artist' element={<Artist />} />
          </Routes>
        <Player />
      </Router>
    </section>
  );
}

export default App;
