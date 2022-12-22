import './Footer.css'

function Footer() {
    return (
        <section className='Footer'>
            <p className='Footer__text'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className='Footer__container'>
            <p className='Footer__year'>
                © 2022
            </p>
            <div className='Footer__container-right'>
                <a href='https://practicum.yandex.ru/' className='Footer__yandex'>Яндекс.Практикум</a>
                <a href='https://github.com/LODJEN2002' className='Footer__github'>Github</a>
            </div>
            </div>
        </section>
    );
};

export default Footer;