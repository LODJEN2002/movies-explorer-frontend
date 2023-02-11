import './ButtonPluse.css';

function ButtonPluse(props) {
    const { visivleButtonPluse } = props

    return (
        visivleButtonPluse && <section className='ButtonPluse'>
            <button
                onClick={props.handleMoreMovies}
                className='ButtonPluse__head'>Ещё</button>
        </section>
    );
};

export default ButtonPluse;