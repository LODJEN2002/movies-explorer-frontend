import './Movies.css';
import Header from '.././Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonPluse from './ButtonPluse/ButtonPluse';
import Footer from '../Footer/Footer';

import {cards} from '../../utils/utils'


function Movies() {
    return (
        <section className='Movies'>
            <Header />
            <SearchForm />
            <MoviesCardList 
            cards={cards}
            />
            <ButtonPluse />
            <Footer />
        </section>
    );
};

export default Movies;
