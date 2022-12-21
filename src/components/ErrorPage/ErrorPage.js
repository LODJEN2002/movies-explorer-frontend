import './ErrorPage.css';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className='ErrorPage'>
            <div className='ErrorPage__container'>
                <h1 className='ErrorPage__container-title'>404</h1>
                <h4 className='ErrorPage__container-subtitle'>Страница не найдена</h4>
            </div>
            <a onClick={() =>navigate(-1)} className='ErrorPage__back'>Назад</a>
        </div>
    );
};

export default ErrorPage;