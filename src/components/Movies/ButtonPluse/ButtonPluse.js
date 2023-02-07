import './ButtonPluse.css';

function ButtonPluse(props) {
    const { visivleButtonPluse } = props
    // function handleMoreMovies() {
    //     props.handleMoreMovies()
    //     console.log(props.visivleButtonPluse)
    //     props.visivleButtonPluse && console.log('s')
    // }

    return (
        visivleButtonPluse && <section className='ButtonPluse'>
            <button
                onClick={props.handleMoreMovies}
                className='ButtonPluse__head'>Ещё</button>
        </section>
    );
};

export default ButtonPluse;