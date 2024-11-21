import React from 'react'
import { useNavigate } from 'react-router-dom';

function Shoes({ heading, setHeading }) {
    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    return (
        <div
        // style={{marginLeft:'30vw'}}
        >
            <div>
                <h1>   WOMEN'S SHOES</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li>Boots</li>
                        <li>Espadrilles</li>
                        <li>Flats</li>
                        <li>Mules & Slides</li>
                        <li>Oxfords & Loafers</li>
                        <li>Pumps & Heels</li>
                        <li>Sandals</li>
                        <li>Slippers</li>
                        <li>Sneakers</li>
                        <li>Wedges</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1> WOMEN'S DESIGNERS</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>  Shop All</li>
                        <li> Alexander McQueen</li>
                        <li> Balenciaga</li>
                        <li> Bottega Veneta</li>
                        <li>Christian Louboutin</li>
                        <li> Dolce & Gabbana</li>
                        <li>     Fendi</li>
                        <li>    Gianvito Rossi</li>
                        <li>    Gucci</li>
                        <li>    Jimmy Choo</li>
                        <li>     Manolo Blahnik</li>
                        <li> Saint Laurent</li>
                        <li>Stuart Weitzman</li>
                        <li>   Salvatore Ferragamo</li>
                        <li>  Valentino</li>
                        <li>  VEJA</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1> MEN'S SHOES</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>  Shop All</li>
                        <li>Boots</li>
                        <li> Drivers, Loafers & Slip-Ons</li>
                        <li> Oxford & Derby Shoes</li>
                        <li>Sandals & Flip Flops</li>
                        <li>Slippers</li>
                        <li>     Sneakers</li>
                    </ul>
                </div>
            </div>

            <div>
                <h1>   MEN'S DESIGNERS</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>  Shop All</li>
                        <li> Alexander McQueen</li>
                        <li> Balenciaga</li>
                        <li> Bottega Veneta</li>
                        <li>  Burberry</li>
                        <li>    Common Projects</li>
                        <li> Dolce & Gabbana</li>
                        <li>   Giuseppe Zanotti</li>
                        <li>    Golden Goose</li>
                        <li>    Gucci</li>
                        <li>    Off-White</li>
                        <li> Saint Laurent</li>
                        <li>   Salvatore Ferragamo</li>
                        <li>  Valentino</li>
                        <li>  Versace</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Shoes