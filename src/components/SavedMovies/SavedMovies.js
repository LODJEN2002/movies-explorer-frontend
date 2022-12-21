import './SavedMovies.css';
import Header from '.././Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

const cards = [
    {
        link: 'https://scientificrussia.ru/images/b/teb-full.jpg',
        title: '33 слова о дизайне',
        timeMovie: '1 21',
        key: '1',
    },
    {
        link: 'https://avatars.dzeninfra.ru/get-zen_doc/34175/pub_5cea2361585c2f00b5c9cb0b_5cea310a752e5b00b25b9c01/scale_1200',
        title: 'Киноальманах «100 лет дизайна»',
        timeMovie: '1 21',
        key: '2',
    }, {
        link: 'https://madcats.ru/wp-content/uploads/2018/08/8586A23F-E3F0-4C40-98F7-2117F097AD39.jpeg',
        title: 'В погоне за Бенкси',
        timeMovie: '1 21',
        key:'3',
    },
]

function SavedMovies() {
    return (
        <div className='SavedMovies'>
            <Header />
            <SearchForm />
            <MoviesCardList
                cards={cards}
            />
        </div>
    );
};

export default SavedMovies;