import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const { cards } = props


    return (
        <div className='MoviesCardList'>
            {cards.map((card) => (
                <MoviesCard
                    key={card.key}
                    link={card.link}
                    title={card.title}
                    timeMovie={card.timeMovie}
                />
            ))}
        </div>
    );
};

export default MoviesCardList;