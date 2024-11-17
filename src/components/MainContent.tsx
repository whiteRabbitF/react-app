import '../../src/assets/styles/MainContent.scss';
import '../index.css';
import Products from '../mockData/products.json';
import AboutProductLink from "./AboutProductLink.tsx";

function MainContent() {
    return (
        <main className="products-lists">
            <AboutProductLink />
            <div className="products-wrapper">
                <h2>Репродукции</h2>
                <div className="product-tabs">
                    <button>
                        Франция
                    </button>
                    <button>
                        Германия
                    </button>
                    <button>
                        Италия
                    </button>
                </div>
            </div>
            <div className="products-container">
                {Products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div className="product-info">
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-author">Автор: {product.author}</p>
                            <p className="product-instrument">Инструмент: {product.instrument}</p>
                            <p className="product-price">Цена: {product.price} Р</p>
                            <button className="to-cart-btn">В корзину</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default MainContent;
