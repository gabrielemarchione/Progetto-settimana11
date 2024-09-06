import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import MyNavbar from './components/MyNavbar';
import Main from './components/Main';
import Player from './components/Player';

function App() {
  return (
   <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={2} className='d-none d-md-block'>
            <MyNavbar />
          </Col>
          <Col xs={12} md={9} className='offset-md-3 main-page'>
          <Routes>
            <Route path='/' element={<Main />}></Route>
          
          </Routes>
          </Col>
        </Row>
      </Container>
      <Container fluid className='fixed-bottom bg-container pt-1'>
        <Player />
      </Container>
   </BrowserRouter>
  );
}

export default App;
