import './MainTitle.css'

function MainTitle(props) {
    const { title } = props

    return (
        <h3 className='MainTitle'>
            {title}
        </h3>
    );
};

export default MainTitle