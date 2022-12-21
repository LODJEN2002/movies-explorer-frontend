import './Burger.css';

function Burger(props) {
    const { open, setOpen } = props; 


    return (
        <div className='Burger'>
            <div className='Burger__btn' onClick={() => setOpen(!open)}>
                <span className='Burger__btn-center'/>
            </div>
        </div>
    );
};

export default Burger;