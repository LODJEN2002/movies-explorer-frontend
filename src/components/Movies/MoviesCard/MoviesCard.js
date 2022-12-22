import './MoviesCard.css';
import MoviesCardLike from '../../../images/icon__COLOR_invisible.svg'
import MoviesCardLikeYes from '../../../images/icon__COLOR_main-3.svg'


import { useState } from 'react';

function MoviesCard(props) {
    const [ like, setLike ] = useState(false)

    return (
        <section className='MoviesCard'>
            <img className='MoviesCard__img' src={props.link} alt='kot' />
            <div className='MoviesCard__container'>
                <h3 className='MoviesCard__container-title'>{props.title}</h3>
                <div onClick={() => setLike(!like)} className='MoviesCard__container-like'>
                    <img className='MoviesCard__like'
                     src={like ? MoviesCardLikeYes : MoviesCardLike} alt='kot' />
                </div>
            </div>
            <p className='MoviesCard__time'>
                {props.timeMovie}
            </p>
        </section>
    );
};

export default MoviesCard;