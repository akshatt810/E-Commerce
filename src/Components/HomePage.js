import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MobilesLogo from "./Images/MobilesLogo.webp";
import BooksLogo from "./Images/BooksLogo.jpg";
import ElectronicsLogo from "./Images/ElectronicsLogo.webp";
import GiftLogo from "./Images/GiftLogo.webp";
import FashionLogo from "./Images/FashionLogo.webp";
import NavBar from "./NavBar";
import MainHeading from "./MainHeading";
import "./MyStyles.css";

export default function HomePage() {
    return (
        <>
            <NavBar />
            <MainHeading head="Our Products" />
            <div>
              <div className="Categories">
                    <Link to="/Mobiles" className="links CatItems">
                        <img src={MobilesLogo} alt="" />
                        <h1>Mobiles n Tablets</h1>
                    </Link>
                    <Link to="/Electronics" className="links CatItems">
                        <img src={ElectronicsLogo} alt="" />
                        <h1>Electronics n Gadgets</h1>
                    </Link>
                </div>
                <div className="Categories">
                    <Link to="/Books" className="links CatItems">
                        <img src={BooksLogo} alt="" style={{"paddingTop":"45px", "paddingBottom":"-10px"}}/>
                        <h1>Books</h1>
                    </Link>
                    <Link to="/Fashion" className="links CatItems">
                        <img src={FashionLogo} alt="" />
                        <h1>Fashion</h1>
                    </Link>
                </div>
                <div className="Categories">
                    <Link to="/Gift" className="links CatItems">
                        <img src={GiftLogo} alt="" />
                        <h1>Gift n Stuff</h1>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
