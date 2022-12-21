import './NavTab.css';

function NavTab() {
    return (
        <nav className="NavTab">
            <ul className="NavTab_container">
                <li><a href='AboutMe' className='NavTab_container-link'> О проекте </a></li>
                <li> <a href='sd' className='NavTab_container-link'> Технологии </a></li>
                <li><a href='sd' className='NavTab_container-link'> Студент </a></li>
            </ul>
        </nav>
    )
}

export default NavTab