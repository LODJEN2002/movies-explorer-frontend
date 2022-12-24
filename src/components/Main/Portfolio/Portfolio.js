import './Portfolio.css'
import vektorSVG from '../../../images/text__COLOR_font-main.svg'

function Portfolio() {
    return (
        <section className='Portfolio'>
            <div className='Portfolio__title'>
                Портфолио
            </div>
            <div className='Portfolio__links'>
                <a className='Portfolio__link' target='_blanck' href='https://github.com/LODJEN2002/react-mesto-api-full'>Статичный сайт
                    <img className='Portfolio__link-svg' src={vektorSVG} alt='vektor'></img>
                </a>
                <a className='Portfolio__link' target='_blanck' href='https://github.com/LODJEN2002/russian-travel'>Адаптивный сайт
                    <img className='Portfolio__link-svg' src={vektorSVG} alt='vektor'></img>
                </a>
                <a className='Portfolio__link Portfolio__link-last' target='_blanck' href='https://github.com/LODJEN2002/how-to-learn'>Одностраничное приложение
                    <img className='Portfolio__link-svg' src={vektorSVG} alt='vektor'></img>
                </a>
            </div>
        </section>
    );
};

export default Portfolio;