import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import PromoBaner from './PromoBaner/PromoBaner';
import './Main.css';

function Main({loggedIn}) {
    return (
        <main className='main'>
            <Promo 
            loggedIn={loggedIn}
            />
            <PromoBaner />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    )
};

export default Main;