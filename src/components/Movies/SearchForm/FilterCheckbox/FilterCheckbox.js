import './FilterCheckbox.css';

function FilterCheckbox() { 
    return (
        <div className='FilterCheckbox' data-onlabel="on" data-offlabel="off">
            <input className='FilterCheckbox__checkbox' placeholder='sd' type='checkbox'></input>
            <div className='FilterCheckbox__title'>Короткометражки</div>
        </div>
    );
};

export default FilterCheckbox;

