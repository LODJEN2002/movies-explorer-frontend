import './NavTab.css';

function NavTab() {
    return (
        <nav className="NavTab">
            <ul className="NavTab_container">
                <a href='#AboutProject' className='NavTab_container-link'> О проекте </a>
                 <a href='#Techs' className='NavTab_container-link'> Технологии </a>
                <a href='#AboutMe' className='NavTab_container-link'> Студент </a>
            </ul>
        </nav>
    )
}

export default NavTab