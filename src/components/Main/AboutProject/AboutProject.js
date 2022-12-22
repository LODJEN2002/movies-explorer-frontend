import './AboutProject.css';
import MainTitle from '../MainTitle/MainTitle';

function AboutProject() {
    return (
        <section className='AboutProject' id="AboutProject">
            <MainTitle 
            title='О проекте'
            />
            <div className='AboutProject__container'>
                <div className='AboutProject__container-block'>
                    <h3 className='AboutProject__container-title'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='AboutProject__container-subTitle'>
                        Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='AboutProject__container-block'>
                    <h3 className='AboutProject__container-title'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='AboutProject__container-subTitle'>
                        У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='AboutProject__line'>
                <div className='AboutProject__line-small'>
                    1 неделя
                </div>
                <div className='AboutProject__line-big'>
                    4 недели
                </div>
            </div>
            <div className='AboutProject__line-down'>
                <div className='AboutProject__line-small-down'>
                    Back-end
                </div>
                <div className='AboutProject__line-big-down'>
                    Front-end
                </div>
            </div>
        </section>
    )
};

export default AboutProject;