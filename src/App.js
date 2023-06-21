import Home from './Home/home';
import './App.css';
import Footer from './footer/footer';
import Container from './container/container';
import Navbar from './Navbar/Navbar';
import Crousel from './Crousel/Crousel';
import Slider from './slider/slider';
function App() {
  return (
  <>
  <div className="app">
  <Navbar/>
  <Home/>
  <Crousel/>
  <Container/>
  <Slider/>
  <Footer/>
  </div>
</>
  );
}

export default App;
