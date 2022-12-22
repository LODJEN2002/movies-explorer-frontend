import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const { cards } = props


    return (
        <section className='MoviesCardList'>
            {cards.map((card) => (
                <MoviesCard
                    key={card.key}
                    link={card.link}
                    title={card.title}
                    timeMovie={card.timeMovie}
                />
            ))}
        </section>
    );
};

export default MoviesCardList;