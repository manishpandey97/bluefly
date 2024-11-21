import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cloth({ heading, setHeading }) {

    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    return (
        <div>

            <div>
                <h1> WOMEN'S CLOTHING</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li>Activewear</li>
                        <li>Coats & Jackets</li>
                        <li>Dresses</li>
                        <li>Jeans & Denim</li>
                        <li>Jumpsuits & Rompers</li>
                        <li>Lingerie & Hosiery</li>
                        <li>Loungewear & Sleepwear</li>
                        <li>Pants & Leggings</li>
                        <li>Shorts</li>
                        <li>Skirts</li>
                        <li>Sweaters</li>
                        <li>Sweatshirts & Hoodies</li>
                        <li>Swimwear & Coverups</li>
                        <li>Tops & Tees</li>

                    </ul>
                </div>
            </div>

            <div>
                <h1>  MEN'S CLOTHING</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>  Shop All</li>
                        <li>Activewear</li>
                        <li> Casual Button-Down Shirts</li>
                        <li>Coats & Jackets</li>
                        <li> Dress Shirts</li>
                        <li>Jeans & Denim</li>
                        <li>    Pants</li>
                        <li>  Polo Shirts</li>
                        <li>  Shorts</li>
                        <li>  Sport Coats & Blazers</li>
                        <li>    Suits & Separates</li>
                        <li>Sweaters</li>
                        <li>Sweatshirts & Hoodies</li>
                        <li>  Swimwear</li>
                        <li>  T-Shirts</li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Cloth