import React from 'react'
import { useNavigate } from 'react-router-dom';

function JewelryAndWatch({ heading, setHeading }) {
    const navigate = useNavigate('')
    
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    return (
        <div >
            <div>
                <h1>    Featured Designer Watches</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li>Fendi</li>
                        <li>Gucci</li>
                        <li> Michael Kors</li>
                        <li>Red Line</li>
                        <li>  Salvatore Ferragamo</li>
                        <li>Versace</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>  Women's Jewelry</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>  Shop All</li>
                        <li> Bracelets</li>
                        <li>  Brooches & Pins</li>
                        <li> Brooches & Pins</li>
                        <li>Earrings</li>
                        <li> Necklaces</li>
                        <li>Rings</li>
                        <li> Watches</li>
                        <li> Men's Jewelry</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default JewelryAndWatch