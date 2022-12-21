import MainTitle from '../MainTitle/MainTitle';
import './Techs.css';

function Techs() {
    return (
        <div className='Techs'>
            <MainTitle
                title='Технологии'
            />
            <div className='Techs__main'>
                <h2 className='Techs__main-title'>7 технологий </h2>
                <p className='Techs__main-subtitle'>На курсе веб-разработки мы освоили технологии,
                    которые применили в дипломном проекте.</p>
            </div>
            <div className='Techs__seven'>
                <div className='Techs__seven-block'>HTML</div>
                <div className='Techs__seven-block'>CSS</div>
                <div className='Techs__seven-block'>JS</div>
                <div className='Techs__seven-block'>React</div>
                <div className='Techs__seven-block'>Git</div>
                <div className='Techs__seven-block'>Express.js</div>
                <div className='Techs__seven-block'>MongoDB</div>
            </div>
        </div>
    );
};

export default Techs;