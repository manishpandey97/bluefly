import React, { useState, useRef } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import './CartDrawer.css';
import { MdCancel } from "react-icons/md";

const CartDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartproduct')) || [])
    const btnRef = useRef();

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <div className='cartdrawer'>
            <MdOutlineShoppingBag
                ref={btnRef}
                onClick={toggleDrawer}
                style={{
                    cursor: 'pointer', fontSize: '24px',
                    fontWeight: 500
                }}
            />

            {isOpen && (
                <div className='drawer'>
                    <button className='close-btn' onClick={toggleDrawer}> <MdCancel /> </button>
                    <h2>Your Cart</h2>
                    <div className='drawer-body'>
                        {/* <input type='text' placeholder='Type here...' /> */}
                        {/* <div className='product'  > */}
                        {
                            cart?.map((productH) => {
                                return (
                                    <div className="product-card" key={productH._id}>
                                        <img src={productH.image} alt={productH.title} className="product-image" />
                                        <h3 className="product-title">{productH.title}</h3>
                                        <p className="product-price">${productH.price}</p>
                                    </div>
                                )
                            })
                        }
                        {/* </div> */}
                    </div>
                    <div className='drawer-footer'>
                        <button className='btn cancel-btn' onClick={toggleDrawer}>Cancel</button>
                        <button className='btn save-btn'>Save</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartDrawer;
