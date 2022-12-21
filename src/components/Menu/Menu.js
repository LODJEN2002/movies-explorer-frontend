import './Menu.css';
import myProfileImg from '../../images/icon__COLOR_icon-main.svg';


function Menu(props) {
    const { open } = props; 

    return (
        <div className={open ? 'Menu-opened' : 'Menu'}>
            <div className='Menu__content'>
                {/* СДЕЛАЙ СЕМНТИЧЕСКИЕ ТЕГИ! */}
                <div className='Menu__content-link'>Главная</div>
                <div className='Menu__content-link'>Фильмы</div>
                <div className='Menu__content-link'>Сохранённые фильмы</div>
                <a className='Menu__myProfile' href='profile'>
                    <img className='Menu__myProfile-img' src={myProfileImg} alt='profile-img'></img>
                    Аккаунт
                </a>
            </div>
        </div>
    );
};

export default Menu;