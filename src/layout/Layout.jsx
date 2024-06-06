import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import Introduction from '../components/Introduction';
import Navbar from '../components/Navbar';
import CardComidaEats from '../components/cards/CardComidaEats';
import CardNetflex from '../components/cards/CardNetflex';
import CardOuva from '../components/cards/CardOuva';
import CardPigGame from '../components/cards/CardPigGame';
import CardWeather from '../components/cards/CardWeather';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Introduction />

      <CardComidaEats />
      <CardWeather />
      <CardNetflex />
      <CardPigGame />
      <CardOuva />

      <GetInTouch />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
