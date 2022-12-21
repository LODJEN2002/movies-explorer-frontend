import './Movies.css';
import Header from '.././Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonPluse from './ButtonPluse/ButtonPluse';

const cards = [
    {
        link: 'https://scientificrussia.ru/images/b/teb-full.jpg',
        title: '33 слова о дизайне',
        timeMovie: '1 21',
        key:'1'
    },
    {
        link: 'https://avatars.dzeninfra.ru/get-zen_doc/34175/pub_5cea2361585c2f00b5c9cb0b_5cea310a752e5b00b25b9c01/scale_1200',
        title: 'Киноальманах «100 лет дизайна»',
        timeMovie: '1 21',
        key:'2'
    }, {
        link: 'https://madcats.ru/wp-content/uploads/2018/08/8586A23F-E3F0-4C40-98F7-2117F097AD39.jpeg',
        title: 'В погоне за Бенкси',
        timeMovie: '1 21',
        key:'3'
    }, {
        link: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/14A82/production/_116301648_gettyimages-1071204136.jpg',
        title: 'Баския: Взрыв реальности',
        timeMovie: '1 21',
        key:'4'
    }, {
        link: 'https://koshka.top/uploads/posts/2021-12/1640316382_1-koshka-top-p-narisovannikh-kotikov-1.jpg',
        title: 'Бег это свобода',
        timeMovie: '1 21',
        key:'5'
    }, {
        link: 'https://kg-portal.ru/img/102105/main.jpg',
        title: 'Соберись перед прыжком',
        timeMovie: '1 21',
        key:'6'
    }, {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSK5ipiDN6JitNKt9RMhnPBhWQ_Eba6odyw&usqp=CAU',
        title: 'Пи Джей Харви: A dog called money',
        timeMovie: '1 21',
        key:'7'
    }, {
        link: 'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg',
        title: 'По волнам: Искусство звука в кино',
        timeMovie: '1 21',
        key:'8'
    }, {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSK5ipiDN6JitNKt9RMhnPBhWQ_Eba6odyw&usqp=CAU',
        title: 'Рудбой',
        timeMovie: '1 21',
        key:'9'
    }, {
        link: 'https://scientificrussia.ru/images/b/teb-full.jpg',
        title: 'Скейт — кухня',
        timeMovie: '1 21',
        key:'10'
    }, {
        link: 'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg',
        title: 'Война искусств',
        timeMovie: '1 21',
        key:'11'
    }, {
        link: 'https://scientificrussia.ru/images/b/teb-full.jpg',
        title: 'Зона',
        timeMovie: '1 21',
        key:'12'
    },
];


function Movies() {
    return (
        <div className='Movies'>
            <Header />
            <SearchForm />
            <MoviesCardList 
            cards={cards}
            />
            <ButtonPluse />
        </div>
    );
};

export default Movies;
