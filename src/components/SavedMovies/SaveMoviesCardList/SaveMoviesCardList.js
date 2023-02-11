import './SaveMoviesCardList.css';
import SaveMoviesCard from '../SaveMoviesCard/SaveMoviesCard';

function SaveMoviesCardList(props) {
    const { cards } = props

    return (
        <section className='SaveMoviesCardList'>
            {cards.map((card) => (
                <SaveMoviesCard
                    key={card.movieId}
                    movieId={card.movieId}
                    country={card.country}
                    description={card.description}
                    director={card.director}
                    duration={card.duration}
                    nameEN={card.nameEN}
                    image={card.image}
                    nameRU={card.nameRU}
                    trailerLink={card.trailerLink}
                    year={card.year}
                    _id={card._id}
                    onCardDelete={props.onCardDelete}
                />
            ))}
        </section>
    );
};

export default SaveMoviesCardList;