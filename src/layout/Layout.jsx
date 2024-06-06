import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import Cards from '../components/cards/Cards';
import GetInTouch from '../components/GetInTouch';
import BackToTopButton from '../components/BackToTopButton';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Introduction />

      <Cards />

      <GetInTouch />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
