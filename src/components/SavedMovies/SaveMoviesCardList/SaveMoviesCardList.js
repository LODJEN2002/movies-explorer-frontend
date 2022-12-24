import './SaveMoviesCardList.css';
import SaveMoviesCard from '../SaveMoviesCard/SaveMoviesCard';

function SaveMoviesCardList(props) {
    const { cards } = props


    return (
        <section className='SaveMoviesCardList'>
            {cards.map((card) => (
                <SaveMoviesCard
                    key={card.key}
                    link={card.link}
                    title={card.title}
                    timeMovie={card.timeMovie}
                />
            ))}
        </section>
    );
};

export default SaveMoviesCardList;