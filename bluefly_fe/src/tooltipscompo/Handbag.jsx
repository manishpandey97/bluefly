import React from 'react'
import { useNavigate } from 'react-router-dom';

function Handbag({ heading, setHeading }) {
    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    return (
        <div >
            <div>
                <h1>   TOP DESIGNERS</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li>Balenciaga</li>
                        <li>Bottega Veneta</li>
                        <li>Burberry</li>
                        <li>Celine</li>
                        <li>Chloe</li>
                        <li>Dolce & Gabbana</li>
                        <li>Fendi</li>
                        <li>Givenchy</li>
                        <li>Gucci</li>
                        <li>Mario Valentino</li>
                        <li>Prada</li>
                        <li>Saint Laurent</li>
                        <li>Salvatore Ferragamo</li>
                        <li>Stella McCartney</li>
                        <li>Valentino</li>

                    </ul>
                </div>
            </div>
            <div>
                <h1>  ALL HANDBAGS</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>  Shop All</li>
                        <li>Bucket-Bags</li>
                        <li> Clutches</li>
                        <li>Crossbody Bags</li>
                        <li> Hobo Bags</li>
                        <li>Satchels</li>
                        <li> Shoulder Bags</li>
                        <li>  Tote Bags</li>
                        <li>  Travel Bags & Luggage</li>
                        <li>  Women's Wallets & Cardholders</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Handbag
