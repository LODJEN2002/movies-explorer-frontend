import './SearchForm.css'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { useRef } from 'react';
// import mainApi from '../../../utils/MainApi';

function SearchForm({ handleSearch }) {
    const searchRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()

        // console.log('Submit')

        handleSearch({
            name: searchRef.current.value
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
                        ref={searchRef}
                        placeholder='Фильм'
                        required
                    />
                    <button className='SearchForm__button'>Найти</button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );

};

export default SearchForm