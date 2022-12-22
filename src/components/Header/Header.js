import './Header.css';
import myProfileImg from '../../images/icon__COLOR_icon-main.svg';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {
  const [ MenuOpen, setMenuOpen] = useState(false);

    return (
        <header className='Header'>
            <Link className='Header__logo' to="/"></Link>
            <div className='Header__navigation'>
                <a className='Header__navigation-film' href='movies'>Фильмы</a>
                <a className='Header__navigation-saveFilm' href='saved-movies'>Сохранённые фильмы</a>
            </div>
            <Link className='Header__myProfile' to='/profile'>
                <img className='Header__myProfile-img' src={myProfileImg} alt='profile-img'></img>
                Аккаунт
            </Link>
            <Burger 
            open={MenuOpen}
            setOpen={setMenuOpen}/>
            <Menu 
            open={MenuOpen}
            />
        </header>
    );
};

export default Header;