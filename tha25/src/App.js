import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Navb'
import Carousels from './Carousels'
import {Row, Col, Container, Badge} from 'react-bootstrap' 
import Cards from './Cards'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}><Badge bg="secondary">Art Gallery</Badge></h1>
      <Carousels />
      <Container>
        <Row>
          <Col>
            <Cards src="https://www.homestratosphere.com/wp-content/uploads/2019/07/Cubism-art-833x1024.jpg" title="Two Face Girl" desc="Modern Cubism which are trending nowadays made with premium color" price="₹2000.00"/>
          </Col>
          <Col>
            <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hZY6Xp3x6QVOUpwBl7ZPsBMj4-KMRtfgkg&usqp=CAU" title="Church at Auvers" desc="Famous Church at Auvers painting remake by Van Vincent Gogh" price="₹8000.00"/>
          </Col>
          <Col>
            <Cards src="https://static.toiimg.com/thumb/msid-83328821,imgsize-82178,width-400,resizemode-4/83328821.jpg" title="Fiery Evening" desc="Traditional indian adoring her son. Trendy these days" price="₹1000.00"/>
          </Col> 
          <Col>
            <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlg53498jJWrhUNwC5dYSOLkxvy4mwlnUIQ&usqp=CAU" title="Color splashes" desc="Modern drawing with different colors mixed simulatneously." price="₹2500.00"/>
          </Col> 
        </Row>
        <Row>
          <Col>
            <Cards src="https://i.pinimg.com/474x/e4/a6/bf/e4a6bf2730e133f8281faddcf681ca68.jpg" title="Waterfall" desc="Beautiful waterfall between lush green jungle" price="₹6000.00"/>
          </Col>
          <Col>
            <Cards src="https://images.saatchiart.com/saatchi/19363/art/8353088/7417761-TXQIRDEO-6.jpg" title="Modern Art" desc="Modern art with splashes of different colors" price="₹600.00"/>
          </Col>
          <Col>
            <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SPSiZpyww_HTmWQqcz4f1haVsip7AO1KkA&usqp=CAU" title="Girl Child" desc="a Nigerian Girl staring at you." price="₹4000.00"/>
          </Col>
          <Col>
            <Cards src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34T4gTuZCzkaoft7h5Qj3-s9O2KgRKhY16g&usqp=CAU" title="Colorful horse" desc="Modern Art with splashes to form horse" price="₹3000.00"/>
          </Col> 
        </Row>
      </Container>
    </div>
  );
}

export default App;
