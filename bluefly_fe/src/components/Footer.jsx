import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { CiHeart ,CiCreditCard1 } from "react-icons/ci";

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-block-social">
                    <h4>Follow us</h4>
                    <ul><li><FaFacebookF /></li></ul>
                </div>
                <div className="footer-block-menu">
                    <h4>Quick link</h4>
                    <ul>
                        <li> Feedback On Website Redesign</li>
                        <li>Frequently Asked Questions</li>
                        <li>Shipping & Returns</li>
                        <li>Pre-Owned Guide</li>
                        <li>Sell on Bluefly</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Do Not Sell My Personal Information</li>
                        <li>Shop Pay Installments</li>
                        <li>Contact Us</li>
                        <li>Start a Return</li>
                    </ul>
                </div>
                <div className="footer-block-newsletter">
                    <h4>Newsletter</h4>
                    <span> Promotions, new products, and sales. Directly to your inbox.</span>
                    <form >
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" />
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <div className='footer_services'>
                    <button> <CiHeart style={{fontSize:'25px',fontWeight:'800',margin:'2px'}}/> Follow on Shop</button>
                    <ul>
                        <li> <CiCreditCard1/> </li>
                        <li><CiCreditCard1/></li>
                        <li><CiCreditCard1/></li>
                        <li><CiCreditCard1/></li>
                        <li><CiCreditCard1/></li>
                        <li><CiCreditCard1/></li>
                        <li><CiCreditCard1/></li>
                        <li><CiCreditCard1/></li>
                    </ul>
                </div>
                <div className='footer_copyright'>
                    <span>© 2024, Bluefly</span>
                    <span>Powered by Shopify</span>
                </div>
            </div>
        </div>
    )
}

export default Footer