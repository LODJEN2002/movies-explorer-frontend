import './SearchForm.css'
import FilterCheckbox from  './FilterCheckbox/FilterCheckbox';
// import mainApi from '../../../utils/MainApi';

function SearchForm() {
    // mainApi.getInitialCards()
    //     .then(res=> console.log(res[0]))

    return (
        <section>
            <form className='SearchForm'>
                <div className='SearchForm__container'>
                    <input className='SearchForm__input' placeholder='Фильм' required></input>
                    <button className='SearchForm__button'>Найти</button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );

};

export default SearchForm