import '../assets/styles/AboutProduct.scss';
function AboutProduct() {
    return (
        <div className="about-product">
            <h1>О продукте</h1>
            <div className="product-details">
                <div className="product-image">
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Product"
                        className="product-image__img"
                    />
                </div>
                <div className="product-info">
                    <h2>Название продукта</h2>
                    <span>Это описание продукта. Здесь можно рассказать,
                        что делает ваш продукт особенным, какие его преимущества,
                        характеристики и другие важные детали.</span>
                    <ul>
                        <li>Характеристика 1</li>
                        <li>Характеристика 2</li>
                        <li>Характеристика 3</li>
                    </ul>
                    <button className="buy-button">Купить</button>
                </div>
            </div>
        </div>
    );
}

export default AboutProduct;
