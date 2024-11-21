import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sunglass({ heading, setHeading }) {
    const navigate = useNavigate('')
    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };
    return (
        <div >

            <div>
                <h1>  Men's Sunglasses</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li>Burberry</li>
                        <li>Carrera</li>
                        <li>Dior</li>
                        <li>Ermenegildo Zegna</li>
                        <li>Givenchy</li>
                        <li>Gucci</li>
                        <li>Jimmy Choo</li>
                        <li>Montblanc</li>
                        <li>Persol</li>
                        <li>Prada</li>
                        <li>Saint Laurent</li>
                        <li>Salvatore Ferragamo</li>
                        <li>Tom Ford</li>
                        <li>Versace</li>

                    </ul>
                </div>
            </div>
            <div>
                <h1>    Women's Sunglasses</h1>
                <div>
                    <ul onClick={(e) => updateHeading(e)}>
                        <li>Shop All</li>
                        <li> Balenciaga</li>
                        <li>Dior</li>
                        <li> Emilio Pucci</li>
                        <li>Fendi</li>
                        <li>Givenchy</li>
                        <li>Gucci</li>
                        <li>Jimmy Choo</li>
                        <li> Oliver Peoples</li>
                        <li>Prada</li>
                        <li>Montblanc</li>
                        <li>Persol</li>
                        <li>Prada</li>
                        <li> Roberto Cavalli</li>
                        <li>Saint Laurent</li>
                        <li>Salvatore Ferragamo</li>
                        <li>Tom Ford</li>
                        <li>Versace</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Sunglass