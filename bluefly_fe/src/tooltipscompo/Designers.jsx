import React from 'react'
import { useNavigate } from 'react-router-dom';

function Designers({ heading, setHeading }) {
    const navigate = useNavigate('')

    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };
    return (
        <div >

            <div>
                <h1> Featured Designers</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li>Gucci</li>
                        <li>Valentino</li>
                        <li>Christian Louboutin</li>
                        <li>Saint Laurent</li>
                        <li>Balenciaga</li>
                        <li>Bottega Veneta</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>   OTHER TOP DESIGNERS</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Alexander McQueen  </li>
                        <li> Burberry</li>
                        <li>Celine</li>
                        <li> Chloe</li>
                        <li>Dior</li>
                        <li>Dolce & Gabbana</li>
                        <li>Fendi</li>
                        <li>Givenchy</li>
                        <li> Jimmy Choo</li>
                        <li>Manolo Blahnik</li>
                        <li>Mario Valentino</li>
                        <li>Mario Valentino</li>
                        <li> Moschino</li>

                    </ul>
                </div>
            </div>

            <div>
                <h1>  .</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Off-White </li>
                        <li>  Palm Angels</li>
                        <li>Prada</li>
                        <li> Saint Laurent</li>
                        <li>Salvatore Ferragamo</li>
                        <li>Stella McCartney</li>
                        <li>Stuart Weitzman</li>
                        <li>Tod'S</li>
                        <li> Tom Ford</li>
                        <li>Veja</li>
                        <li>Vince</li>
                        <li>Versace</li>
                        <li>  Shop All</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Designers