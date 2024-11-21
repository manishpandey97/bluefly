import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ heading, setHeading }) {

    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
    };


    return (
        <div className='navbar'>
            <NavLink className='navlink' to={'/sort'}
                onClick={(e) => updateHeading(e)}>
                WOMEN</NavLink>
            <NavLink className='navlink' to={'/sort'}
                onClick={(e) => updateHeading(e)}
            >MEN</NavLink>
        </div>
    )
}

export default Navbar