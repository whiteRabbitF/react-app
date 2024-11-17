import { useEffect, useState } from 'react';
import { getUsers } from '../Service/partners.ts';
import '../../src/assets/styles/Partners.scss';
import '../index.css';

function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const users = await getUsers();
                setPartners(users);
            } catch (error) {
                console.error('Failed to fetch partners:', error);
            }
        };
        fetchPartners();
    }, []);

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    };

    return (
        <main className="partners-list">
            <div className="partners-container">
                {partners.map((partner, index) => (
                    <div key={index} className="partners-card">
                        <div
                            className="partner-image"
                            style={{ backgroundColor: getRandomColor() }} // Генерируем случайный цвет для авки партнера
                        >
                            {/* изображение партнера */}
                        </div>
                        <div className="partners-info">
                            <h3 className="partners-name">{partner.name}</h3>
                            <p className="partners-username">@{partner.username}</p>
                            <p className="partners-email">{partner.email}</p>
                            <p className="partners-address">
                                {partner.address.street}, {partner.address.city}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Partners;
