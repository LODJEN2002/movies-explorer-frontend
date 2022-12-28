import './Footer.css'

function Footer() {
    return (
        <footer className='Footer'>
            <p className='Footer__text'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className='Footer__container'>
            <p className='Footer__year'>
                © 2022
            </p>
            <div className='Footer__container-right'>
                <a href='https://practicum.yandex.ru/' target='_blank' className='Footer__yandex' rel="noreferrer">Яндекс.Практикум</a>
                <a href='https://github.com/LODJEN2002' target='_blank' className='Footer__github' rel="noreferrer">Github</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;