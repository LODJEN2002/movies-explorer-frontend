import './MoviesCard.css';
import { useState } from 'react';
import mainApi from '../../../utils/MainApi';

function MoviesCard(props) {
    const { country,
        description,
        director,
        duration,
        key,
        movieId,
        nameEN,
        nameRU,
        link,
        trailerLink,
        updated_at,
        year,
        // _id,
    } = props
    const [like, setLike] = useState(false)

    function handleLikeCard() {
        setLike(!like)
        let image = 'https://api.nomoreparties.co' + props.link
        let thumbnail = 'https://api.nomoreparties.co' + props.link

        mainApi.saveMovie(
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            thumbnail,
            movieId,
            nameRU,
            nameEN,
            // _id,
        )
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    function onCardDelete() {
        setLike(!like)
        mainApi.getSavedMovies()
            .then((res) => {
                res.forEach((element) => {
                    if (element.movieId === movieId) {
                        console.log(element)
                        mainApi.deliteMovies(element._id)
                    }
                })

            })
    }

    return (
        <section className='MoviesCard'>
            <a
                href={props.trailerLink}
                target='_blank' rel="noreferrer"
            >
                <img
                    className='MoviesCard__img'
                    src={'https://api.nomoreparties.co' + props.link}
                    alt={props.nameRU} />
            </a>
            <div className='MoviesCard__container'>
                <h3 className='MoviesCard__container-title'>{props.nameRU}</h3>
                <button
                    onClick={like ? onCardDelete : handleLikeCard}
                    className={like ? 'MoviesCard__button-like' : 'MoviesCard__button-dislike'}>
                </button>
            </div>
            <p className='MoviesCard__time'>
                {props.duration}
            </p>
        </section>
    );
};

export default MoviesCard;