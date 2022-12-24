import './MoviesCard.css';


import { useState } from 'react';

function MoviesCard(props) {
    const [like, setLike] = useState(false)

    return (
        <section className='MoviesCard'>
            <img className='MoviesCard__img' src={props.link} alt='kot' />
            <div className='MoviesCard__container'>
                <h3 className='MoviesCard__container-title'>{props.title}</h3>
                <button onClick={() => setLike(!like)} className={like ? 'MoviesCard__button-like' : 'MoviesCard__button-dislike'}>
                </button>
            </div>
            <p className='MoviesCard__time'>
                {props.timeMovie}
            </p>
        </section>
    );
};

export default MoviesCard;