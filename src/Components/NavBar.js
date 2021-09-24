import React from 'react';
import { Link } from "react-router-dom";
import CartLogo from './Images/Cart.jpg';
import "./MyStyles.css";

const Navbar =() => {
    return (
        <>
            <div className="NavBar">
                <Link to="/" className="links">
                    <h1 style={{"paddingLeft": "100px","color":"white"}}>eCommerce</h1>
                </Link>
                <div className="SideMenu">
                    <Link to="/" className="links" style={{"color":"white"}}>
                        <p>Home</p>
                    </Link>
                    <Link to="/Cart" className="CartSymbol links " style={{"color":"white"}}>
                        <p>Cart</p>
                        <img className="CartLogoImg img-fluid" src={CartLogo} alt='' />
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;
