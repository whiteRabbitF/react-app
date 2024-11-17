import '../../src/assets/styles/Header.scss';
import '../index.css'
import { Link } from 'react-router-dom'; // Импортируем Link для навигации

function Header() {
    return (
        <header className="header">
            <div className="main-btn">
                <Link to="/">Ink.House</Link> {/* Ссылка на главную страницу */}
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Репродукции</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/partners">Наши партнеры</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/about-product">О продукте</Link> {/* Ссылка на страницу о продукте */}
                    </li>
                    <li>
                        <Link to="/cart">Корзина</Link> {/* Ссылка на страницу о продукте */}
                    </li>
                    {/* Добавьте другие ссылки по мере необходимости */}
                </ul>
            </div>
        </header>
    );
}

export default Header;

