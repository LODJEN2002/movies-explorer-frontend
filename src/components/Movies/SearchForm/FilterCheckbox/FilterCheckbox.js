import './FilterCheckbox.css';

function FilterCheckbox() { 
    return (
        <section className='FilterCheckbox' data-onlabel="on" data-offlabel="off">
            <input className='FilterCheckbox__checkbox' placeholder='sd' type='checkbox'></input>
            <div className='FilterCheckbox__title'>Короткометражки</div>
        </section>
    );
};

export default FilterCheckbox;

