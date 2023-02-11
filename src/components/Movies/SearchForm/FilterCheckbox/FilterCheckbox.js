import './FilterCheckbox.css';

function FilterCheckbox({ setCheckBox, checkBox, handleCheckBoxClick }) {
    function handleClick() {
        setCheckBox(!checkBox)

        handleCheckBoxClick()
    }

    return (
        <section className='FilterCheckbox' data-onlabel="on" data-offlabel="off">
            <label
                onClick={handleClick}
                className={checkBox ? 'FilterCheckbox__lable-true' : 'FilterCheckbox__lable'}
                htmlFor='checkbox'>
                <div className={checkBox ? 'FilterCheckbox__lable-ball-true' : 'FilterCheckbox__lable-ball'}>

                </div>
            </label>
            <input
                name='checkbox'
                onClick={handleClick}
                className={checkBox ? 'FilterCheckbox__checkbox-checked' : 'FilterCheckbox__checkbox'}
                placeholder='sd'
                type='checkbox'
            ></input>
            <div className='FilterCheckbox__title'>Короткометражки</div>
        </section>
    );
};

export default FilterCheckbox;

