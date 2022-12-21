import MainTitle from '../MainTitle/MainTitle';
import photo from '../../../images/pic__COLOR_pic.png'
import './AboutMe.css'

function AboutMe() {
    return (
        <div className='AboutMe'>
            <MainTitle
                title='Студент'
            />
            <div className='AboutMe__container'>
                <div className='AboutMe__info'>
                    <h2 className='AboutMe__info-name'>Иван</h2>
                    <p className='AboutMe__info-age'>Фронтенд-разработчик, 30 лет</p>
                    <p className='AboutMe__info-myLife'>Я родился и живу в Саратове, закончил  факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <p className='AboutMe__info-git'> Github</p>
                </div>
                <img className='AboutMe__photo' src={photo} alt='MyPhoto'></img>
            </div>
        </div>
    );
};

export default AboutMe;