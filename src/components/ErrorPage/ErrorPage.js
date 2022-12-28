import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <section className='ErrorPage'>
            <div className='ErrorPage__container'>
                <h1 className='ErrorPage__container-title'>404</h1>
                <h4 className='ErrorPage__container-subtitle'>Страница не найдена</h4>
            </div>
            <Link onClick={() => navigate(-2)} className='ErrorPage__back' >Назад</Link>
        </section>
    );
};

export default ErrorPage;