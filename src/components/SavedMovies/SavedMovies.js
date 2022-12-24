import './SavedMovies.css';
import Header from '.././Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import SaveMoviesCardList from './SaveMoviesCardList/SaveMoviesCardList';
import Footer from '../Footer/Footer';
import {saveCards} from '../../utils/utils'




function SavedMovies() {
    return (
        <section className='SavedMovies'>
            <Header />
            <SearchForm />
            <SaveMoviesCardList
                cards={saveCards}
            />
            <div className='SavedMovies__space'></div>
            <Footer />
        </section>
    );
};

export default SavedMovies;