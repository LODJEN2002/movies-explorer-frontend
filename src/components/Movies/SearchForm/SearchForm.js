import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useState } from 'react';

function SearchForm({ handleSearch, setCheckBox, checkBox, handleCheckBoxClick, valueSearch, setValueSearch }) {
    const [value, setValue] = useState(valueSearch)

    function handleChenge(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        handleSearch({
            name: value
        })
    }

    return (
        <section>
            <form
                className='SearchForm'
                onSubmit={handleSubmit}
            >
                <div className='SearchForm__container'>
                    <input className='SearchForm__input'
                        onChange={handleChenge}
                        value={value}
                        placeholder='Фильм'
                        required
                    />
                    <button className='SearchForm__button'>Найти</button>
                </div>
                <FilterCheckbox
                    checkBox={checkBox}
                    setCheckBox={setCheckBox}
                    handleCheckBoxClick={handleCheckBoxClick}
                />
            </form>
        </section>
    );

};

export default SearchForm