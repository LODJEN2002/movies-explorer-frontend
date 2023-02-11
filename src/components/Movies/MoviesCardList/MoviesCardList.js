import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList({ cards, preloaderVisibility, badRequest, badRequestText }) {
    return (
        <section className='MoviesCardList'>
            {preloaderVisibility && <Preloader />}
            {badRequest && <p className='MoviesCardList__bad-request-text'>{badRequestText}</p>}
            {cards.map((card) => (
                <MoviesCard
                    key={card.id}
                    movieId={card.id}
                    country={card.country}
                    description={card.description}
                    director={card.director}
                    duration={card.duration}
                    nameEN={card.nameEN}
                    link={card.image.formats.thumbnail.url}
                    nameRU={card.nameRU}
                    trailerLink={card.trailerLink}
                    updated_at={card.updated_at}
                    year={card.year}
                />
            ))}
        </section>
    );
};

export default MoviesCardList;