import './SearchForm.css'
import FilterCheckbox from  './FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section>
            <form className='SearchForm'>
                <div className='SearchForm__container'>
                    <input className='SearchForm__input' placeholder='Фильм'></input>
                    <button className='SearchForm__button'>Найти</button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );

};

export default SearchForm