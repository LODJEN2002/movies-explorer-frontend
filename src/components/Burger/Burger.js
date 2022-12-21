import './Burger.css';

function Burger(props) {
    const { open, setOpen } = props; 


    return (
        <div className='Burger'>
            <div className={open ? 'Burger__btn-open' : 'Burger__btn'} onClick={() => setOpen(!open)}>
                <span className={open ? '' : 'Burger__btn-center'}/>
            </div>
        </div>
    );
};

export default Burger;