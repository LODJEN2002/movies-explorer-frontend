import Header from '../Header/Header';
import './Profile.css'

function Profile() {
    return (
        <div className='Profile'>
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
                <a className='Profile__footer-edit'>Редактировать </a>
                <a className='Profile__footer-exit'>Выйти из аккаунта </a>
            </div>
        </div>
    );
};

export default Profile;