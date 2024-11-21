import React, { useState, useRef } from 'react';
import { LuAlignJustify } from "react-icons/lu";
import './homeDrawer.css';
import { MdCancel } from "react-icons/md";
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { IoPersonOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Cloth from '../tooltipscompo/Cloth';
import Tooltip from './Tooltip';
import ACCESSORIES from '../tooltipscompo/Accessories';
import JewelryAndWatch from '../tooltipscompo/JewelryAndWatch';
import Designers from '../tooltipscompo/Designers';
import Sunglass from '../tooltipscompo/Sunglass';
import Handbag from '../tooltipscompo/Handbag';
import Shoes from '../tooltipscompo/Shoes';

const HomeDrawer = ({ heading, setHeading }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [home, sethome] = useState(JSON.parse(localStorage.getItem('homeproduct')) || [])
    const btnRef = useRef();
    const navigate = useNavigate('')
    const token = localStorage.getItem('token') || '';
    const [expandedBrands, setExpandedBrands] = useState({});


    const logOut = () => {
        if (token) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }

    const toggleDrawer = () => setIsOpen(!isOpen);
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const brands = ['Gucci', 'Valentino', 'Christian Louboutin', 'Saint Laurent', 'Balenciaga', 'Ferragamo',
        'Valentino By Mario Valentino', 'Bulgari'];

    const womenCloth = ['Shop All', 'Activewear', 'Coats & Jackets', 'Dresses', 'Jeans & Denim', 'Jumpsuits & Rompers', 'Lingerie & Hosiery',
        'Loungewear & Sleepwear', 'Pants & Leggings', 'Shorts', 'Skirts', 'Sweaters', 'Sweatshirts & Hoodies', 'Swimwear & Coverups',
        'Tops & Tees']
    const menCloth = ['Shop All', 'Activewear', 'Casual Button-Down Shirts', 'Coats & Jackets', 'Dress Shirts', 'Jeans & Denim',
        'Pants', 'Polo Shirts', 'Shorts', 'Sport Coats & Blazers', 'Suits & Separates', 'Sweaters', 'Sweatshirts & Hoodies',
        'Swimwear', 'T-Shirts']

    return (
        <div className='homedrawer'>
            <LuAlignJustify ref={btnRef} onClick={toggleDrawer} className="LuAlignJustify iconm"
                style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 500 }}
            />

            {isOpen && (
                <div className='drawer-home'>

                    <div className='drawer-body-header'>
                        <button className='close-btn' onClick={toggleDrawer}> <MdCancel /> </button>
                        <div>
                            {
                                token !== '' ? (<RiLogoutBoxRFill
                                    className='container_icon_mobile_logout iconm'
                                    onClick={() => logOut()} />) :
                                    (<IoPersonOutline
                                        className='container_icon_mobile_person  iconm'
                                        onClick={() => navigate('/login')} />)
                            }
                        </div>
                    </div>
                    <div className='drawer-body-body'>

                        <div className='container_menu_mobile'>
                            <ul >
                                <li>
                                    <div className="brand-container">
                                        <div className="brand-header" onClick={toggleDropdown}>
                                            Brand {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>
                                        {isDropdownOpen && womenCloth.map((brand) => (
                                            <div
                                                key={brand}
                                                className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                                onClick={() => toggleBrand(brand)}>
                                                {/* <input type="radio" id={brand} name="brand" value={brand} /> */}
                                                <label htmlFor={brand}>{brand}</label>
                                            </div>
                                        ))}
                                         {isDropdownOpen && menCloth.map((brand) => (
                                            <div
                                                key={brand}
                                                className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                                onClick={() => toggleBrand(brand)}>
                                                {/* <input type="radio" id={brand} name="brand" value={brand} /> */}
                                                <label htmlFor={brand}>{brand}</label>
                                            </div>
                                        ))}
                                    </div>
                                </li>
                                <li>
                                    <Tooltip text={<Shoes heading={heading} setHeading={setHeading} />} position="bottom">
                                        <>   SHOES  <IoIosArrowDown className='down' />  </>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip text={<Handbag heading={heading} setHeading={setHeading} />} position="bottom">
                                        <>  HANDBAGS <IoIosArrowDown className='down' /> </>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip text={<Sunglass heading={heading} setHeading={setHeading} />} position="bottom">
                                        <>   SUNGLASSES<IoIosArrowDown className='down' /> </>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip text={<Designers heading={heading} setHeading={setHeading} />} position="bottom">
                                        <>   DESIGNERS <IoIosArrowDown className='down' /> </>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip text={<JewelryAndWatch heading={heading} setHeading={setHeading} />} position="bottom">
                                        <>   JEWELRY & WATCHES <IoIosArrowDown className='down' /> </>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip text={<ACCESSORIES heading={heading} setHeading={setHeading} />} position="bottom">
                                        <>    ACCESSORIES <IoIosArrowDown className='down' /> </>
                                    </Tooltip>
                                </li>
                                <li>UNDER $50 </li>
                                <li>CLEARANCE</li>
                            </ul>
                        </div>

                    </div>
                    {/* <div className='drawer-footer'>
                        <button className='btn cancel-btn' onClick={toggleDrawer}>Cancel</button>
                        <button className='btn save-btn'>Save</button>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default HomeDrawer;
