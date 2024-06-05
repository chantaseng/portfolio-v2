import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import CardComidaEats from './components/cards/CardComidaEats';
import CardWeather from './components/cards/CardWeather';
import Footer from './components/Footer';
import CardNetflex from './components/cards/CardNetflex';
import CardPigGame from './components/cards/CardPigGame';
import CardOuva from './components/cards/CardOuva';
import GetInTouch from './components/GetInTouch';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Introduction />
        <CardComidaEats />
        <CardWeather />
        <CardNetflex />
        <CardPigGame />
        <CardOuva />

        <GetInTouch />
        <Footer />
      </Router>
    </>
  );
}

export default App;
