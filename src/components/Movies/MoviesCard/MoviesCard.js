import './MoviesCard.css';
import MoviesCardLike from '../../../images/icon__COLOR_invisible.svg'

function MoviesCard(props) {
    // const {  } = props

    return (
        <div className='MoviesCard'>
            <img className='MoviesCard__img' src={props.link} alt='kot' />
            <div className='MoviesCard__container'>
                <h3 className='MoviesCard__container-title'>{props.title}</h3>
                <div className='MoviesCard__container-like'>
                    <img className='MoviesCard__like' src={MoviesCardLike} alt='kot' />
                </div>
            </div>
            <p className='MoviesCard__time'>
                {props.timeMovie}
            </p>
        </div>
    );
};

export default MoviesCard;