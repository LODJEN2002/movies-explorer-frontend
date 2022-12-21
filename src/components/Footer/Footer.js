import './Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <p className='Footer__text'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className='Footer__container'>
            <p className='Footer__year'>
                © 2022
            </p>
            <div className='Footer__container-right'>
                <p className='Footer__yandex'>Яндекс.Практикум</p>
                <p className='Footer__github'>Github</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;