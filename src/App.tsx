import './assets/styles/App.scss';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutProduct from './pages/AboutProduct.tsx'; // Поменяйте на правильный компонент
import MainContent from './components/MainContent';
import Cart from "./pages/Cart.tsx";
import Partners from './pages/Partners.tsx'
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/about-product" element={<AboutProduct />} /> {/* Поменяйте компонент */}
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/partners" element={<Partners />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;




