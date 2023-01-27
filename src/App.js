import { Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home'
import Coaching from './Pages/Coaching'
import Facilitation from './Pages/Facilitation'
import Management from './Pages/Management'
import About from './Pages/About'

// CSS
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>GHOZT CONSULTANCY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/coaching">Coaching</Link>
            <Link className="nav-link" to="/facilitation">Facilitation</Link>
            <Link className="nav-link" to="/management">Management</Link>
            <Link className="nav-link" to="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/facilitation" element={<Facilitation />} />
      <Route path="/management" element={<Management />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;