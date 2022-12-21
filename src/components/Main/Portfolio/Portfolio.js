import './Portfolio.css'
import vektorSVG from '../../../images/text__COLOR_font-main.svg'

function Portfolio() {
    return (
        <div className='Portfolio'>
            <div className='Portfolio__title'>
                Портфолио
            </div>
            <div className='Portfolio__links'>
                <a className='Portfolio__link' href='asd'>Статичный сайт
                    <img className='Portfolio__link-svg' src={vektorSVG} alt='vektor'></img>
                </a>
                <a className='Portfolio__link' href='asd'>Адаптивный сайт
                    <img className='Portfolio__link-svg' src={vektorSVG} alt='vektor'></img>
                </a>
                <a className='Portfolio__link Portfolio__link-last' href='asd'>Одностраничное приложение
                    <img className='Portfolio__link-svg' src={vektorSVG} alt='vektor'></img>
                </a>
            </div>
        </div>
    );
};

export default Portfolio;