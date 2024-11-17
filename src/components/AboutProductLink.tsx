import '../assets/styles/AboutProductLink.scss';
import '../index.css'
function AboutProductLink() {
    return (
        <div className="about">
            <div className="img-container">
                <img alt="bird-img" src="/img/Bird.jpg" />
            </div>
            <div className="product-container">
                <div className="product-wrapper">
                    <span className="title-one">
                        Реплики картин от
                    </span>
                    <span className="title-two">
                        Inc.House
                    </span>
                    <span className="subtitle">
                        Высокое качество отрисовки на плотной бумаге или льняном холсте.
                        Редкие произведения, доступные цены.
                    </span>
                    <button className="production-btn">
                        Продукция
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutProductLink;