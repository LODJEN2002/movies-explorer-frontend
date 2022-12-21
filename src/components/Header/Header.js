import './Header.css';
import logo from '../../images/logo.svg';
import myProfileImg from '../../images/icon__COLOR_icon-main.svg';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import { useState } from 'react';



function Header() {
  const [ MenuOpen, setMenuOpen] = useState(false);

    return (
        <header className='Header'>
            <img className='Header__logo' src={logo} alt='logo_header'></img>
            <div className='Header__navigation'>
                <a className='Header__navigation-film' href='movies'>Фильмы</a>
                <a className='Header__navigation-saveFilm' href='saved-movies'>Сохранённые фильмы</a>
            </div>
            <a className='Header__myProfile' href='profile'>
                <img className='Header__myProfile-img' src={myProfileImg} alt='profile-img'></img>
                Аккаунт
            </a>
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