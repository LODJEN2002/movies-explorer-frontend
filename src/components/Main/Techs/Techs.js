import MainTitle from '../MainTitle/MainTitle';
import './Techs.css';

function Techs() {
    return (
        <section className='Techs' id="Techs">
            <MainTitle
                title='Технологии'
            />
            <div className='Techs__main'>
                <h2 className='Techs__main-title'>7 технологий </h2>
                <p className='Techs__main-subtitle'>На курсе веб-разработки мы освоили технологии,
                    которые применили в дипломном проекте.</p>
            </div>
            <ul className='Techs__seven'>
                <li className='Techs__seven-block'>HTML</li>
                <li className='Techs__seven-block'>CSS</li>
                <li className='Techs__seven-block'>JS</li>
                <li className='Techs__seven-block'>React</li>
                <li className='Techs__seven-block'>Git</li>
                <li className='Techs__seven-block'>Express.js</li>
                <li className='Techs__seven-block Techs__seven-block-mongo'>MongoDB</li>
            </ul>
        </section>
    );
};

export default Techs;