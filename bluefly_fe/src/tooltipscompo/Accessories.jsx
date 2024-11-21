import React from 'react'
import { useNavigate } from 'react-router-dom';

function ACCESSORIES({ heading, setHeading }) {
    const navigate = useNavigate('')

    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };
    return (
        <div >
            <div>
                <h1>Men's Accessories</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li>Belts</li>
                        <li>Hats</li>
                        <li> Optical & Reading Glasses</li>
                        <li>Sunglasses</li>
                        <li> Ties</li>
                        <li>Wallets</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1> Women's Accessories</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>  Shop All</li>
                        <li> Bag Charms, Straps, & Accessories</li>
                        <li>  Belts</li>
                        <li> Cosmetic Bags</li>
                        <li>Hats</li>
                        <li> Gloves</li>
                        <li>Scarves & Wraps</li>
                        <li>Optical & Reading Glasses</li>
                        <li>Sunglasses</li>
                        <li>Travel Bags</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ACCESSORIES