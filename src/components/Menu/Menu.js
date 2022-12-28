import './Menu.css';
import myProfileImg from '../../images/icon__COLOR_icon-main.svg';
import { Link } from 'react-router-dom';


function Menu(props) {
    const { open } = props;

    return (
        <section className={open ? 'Menu-opened' : 'Menu'}>
            <ul className='Menu__content'>
                <li className='Menu__content-li'><Link to='/' className='Menu__content-link'>Главная</Link></li>
                <li className='Menu__content-li'><Link to='/movies' className='Menu__content-link'>Фильмы</Link></li>
                <li className='Menu__content-li'><Link to='/saved-movies' className='Menu__content-link'>Сохранённые фильмы</Link></li>
                <li><Link className='Menu__myProfile' to='/profile'>
                    <img className='Menu__myProfile-img' src={myProfileImg} alt='profile-img'></img>
                    Аккаунт
                </Link>
                </li>
            </ul>
        </section>
    );
};

export default Menu;