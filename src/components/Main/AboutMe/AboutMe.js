import './AboutMe.css'
import MainTitle from '../MainTitle/MainTitle';
import photo from '../../../images/pic__COLOR_pic.png'

function AboutMe() {
    return (
        <section className='AboutMe' id='AboutMe'>
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
                    <a className='AboutMe__info-git' href='https://github.com/LODJEN2002'> Github</a>
                </div>
                <img className='AboutMe__photo' src={photo} alt='MyPhoto'></img>
            </div>
        </section>
    );
};

export default AboutMe;