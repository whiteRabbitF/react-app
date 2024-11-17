import '../../src/assets/styles/Footer.scss';
import '../index.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main-btn">
                <Link to="/">Ink.House</Link> {/* Ссылка на главную страницу */}
                <div className="contact">
                    +7 (999) 543-54-54
                </div>
            </div>
            <div className="footer-menu">
                <ul>
                    <label className="footer-item-header">Репродукции</label>
                    <li>
                        <Link to="/">Репродукции</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/partners">Наши партнеры</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/about-product">О продукте</Link> {/* Ссылка на страницу о продукте */}
                    </li>
                </ul>
                <ul>
                    <label className="footer-item-header">Новинки</label>
                    <li>
                        <Link to="/">Репродукции</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/partners">Наши партнеры</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/about-product">О продукте</Link> {/* Ссылка на страницу о продукте */}
                    </li>
                </ul>
                <ul>
                    <label className="footer-item-header">О нас</label>
                    <li>
                        <Link to="/">Репродукции</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/partners">Наши партнеры</Link> {/* Ссылка на главную страницу */}
                    </li>
                    <li>
                        <Link to="/about-product">О продукте</Link> {/* Ссылка на страницу о продукте */}
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;