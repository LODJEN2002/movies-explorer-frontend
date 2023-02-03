import './SaveMoviesCard.css';

function SaveMoviesCard(props) {
    function onCardDelete() {
        props.onCardDelete(props)
    }

    return (
        <section className='SaveMoviesCard'>
            <img className='SaveMoviesCard__img' src={props.image} alt='kot' />
            <div className='SaveMoviesCard__container'>
                <h3 className='SaveMoviesCard__container-title'>{props.nameRU}</h3>
                <button
                    onClick={onCardDelete}
                    className='SaveMoviesCard__button-delite'></button>
            </div>
            <p className='SaveMoviesCard__time'>
                {props.duration}
            </p>
        </section>
    );
};

export default SaveMoviesCard;