import './SaveMoviesCard.css';

function SaveMoviesCard(props) {
    return (
        <section className='SaveMoviesCard'>
            <img className='SaveMoviesCard__img' src={props.link} alt='kot' />
            <div className='SaveMoviesCard__container'>
                <h3 className='SaveMoviesCard__container-title'>{props.title}</h3>
                <button className='SaveMoviesCard__button-delite'></button>
            </div>
            <p className='SaveMoviesCard__time'>
                {props.timeMovie}
            </p>
        </section>
    );
};

export default SaveMoviesCard;