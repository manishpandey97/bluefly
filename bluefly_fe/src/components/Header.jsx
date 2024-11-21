import React, { useState } from 'react'
import Navbar from './NAvbar';
import { CiSearch } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import CartDrawer from './CartDrawer';
import { useNavigate } from 'react-router-dom';
import Tooltip from './Tooltip';
import Cloth from '../tooltipscompo/Cloth';
import Shoes from '../tooltipscompo/Shoes';
import Handbag from '../tooltipscompo/Handbag';
import Sunglass from '../tooltipscompo/Sunglass';
import ACCESSORIES from '../tooltipscompo/Accessories';
import JewelryAndWatch from '../tooltipscompo/JewelryAndWatch';
import Designers from '../tooltipscompo/Designers';
import { RiLogoutBoxRFill } from "react-icons/ri";
import { LuAlignJustify } from "react-icons/lu";
import HomeDrawer from './HomeDrawer';

function Header({ heading, setHeading }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate('')
    const token = localStorage.getItem('token') || '';

    const updateHeading = (e) => {
        setHeading(e.target.textContent);
        localStorage.setItem('heading', JSON.stringify(heading));
        navigate('/sort');
    };

    const logOut = () => {
        if (token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className='container'>

                <div >
                    <HomeDrawer heading={heading} setHeading={setHeading} className="LuAlignJustify iconm" />
                </div>


                <div className='container_logo'>
                    <img className='logo' onClick={() => navigate('/')}
                        src="https://www.bluefly.com/cdn/shop/files/bluefly-logo_201c7dd1-deca-419a-8033-ce61a7fd64c5_400x.png?v=1719929091" alt='logo' />
                </div>


                <div className='container_icon_mobile'>
                    <div><CiSearch className='container_icon_mobile_search iconm' /></div>
                    {/* <div>
                        {
                            token !== '' ? (<RiLogoutBoxRFill
                                className='container_icon_mobile_logout iconm'
                                onClick={() => logOut()} />) :
                                (<IoPersonOutline
                                    className='container_icon_mobile_person  iconm'
                                    onClick={() => navigate('/login')} />)
                        }
                    </div> */}
                    <div> <CartDrawer className='container_icon_mobile_cart iconm' />  </div>
                </div>

                <div className='container_icon'>
                    <div className='container_icon_search_div'><CiSearch className='container_icon_search icons' />
                        <input className='container_icon_search_input' type="search" placeholder='Search' /> </div>
                    <div>< MdOutlineEmail className='container_icon_email iconh' /></div>
                    <div>
                        {
                            token !== '' ? (<RiLogoutBoxRFill className='container_icon_logout iconh'
                                onClick={() => logOut()} />) :
                                (<IoPersonOutline className='container_icon_person iconh'
                                    onClick={() => navigate('/login')} />)
                        }
                    </div>
                    <div> <CartDrawer className='container_icon_cart iconh' />  </div>
                </div>

            </div>
            <div className='container_nav'><Navbar heading={heading} setHeading={setHeading} /></div>

            <div className='container_menu'>
                <ul >
                    <li>
                        <Tooltip text={<Cloth heading={heading} setHeading={setHeading} />} position="bottom">
                            CLOTHING <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Shoes heading={heading} setHeading={setHeading} />} position="bottom">
                            SHOES  <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Handbag heading={heading} setHeading={setHeading} />} position="bottom">
                            HANDBAGS <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Sunglass heading={heading} setHeading={setHeading} />} position="bottom">
                            SUNGLASSES<IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<Designers heading={heading} setHeading={setHeading} />} position="bottom">
                            DESIGNERS <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<JewelryAndWatch heading={heading} setHeading={setHeading} />} position="bottom">
                            JEWELRY & WATCHES <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip text={<ACCESSORIES heading={heading} setHeading={setHeading} />} position="bottom">
                            ACCESSORIES <IoIosArrowDown />
                        </Tooltip>
                    </li>
                    <li>UNDER $50  <IoIosArrowDown /></li>
                    <li>CLEARANCE <IoIosArrowDown /></li>
                </ul>
            </div>

        </>
    )
}

export default Header