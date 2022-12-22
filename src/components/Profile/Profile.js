import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css'

function Profile() {
    return (
        <section className='Profile'>
            <Header />
            <h2 className='Profile__greeting'>
                Привет, UserName
            </h2>
            <div className='Profile__ifco-Container'>
                <div className='Profile__info-name'>
                    <p className='Profile__info-text'>
                        Имя
                    </p>
                    <p className='Profile__info-text'>
                        UserName
                    </p>
                </div>
                <div className='Profile__info-email'>
                    <p className='Profile__info-text'>
                        E-mail
                    </p>
                    <p className='Profile__info-text'>
                        email@mail.com
                    </p>
                </div>
            </div>
            <div className='Profile__footer'>
                <Link className='Profile__footer-edit'>Редактировать </Link>
                <Link className='Profile__footer-exit'>Выйти из аккаунта </Link>
            </div>
        </section>
    );
};

export default Profile;