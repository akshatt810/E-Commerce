import React from "react";
import NavBar from "./NavBar";
import MainHeading from './MainHeading';
//import Footer from "./Footer";
import Products from './Products.js';
import "./MyStyles.css";
import Footer from "./Footer";

export default function Cart(props) {
  return (
    <div>
      <NavBar></NavBar>
      <MainHeading head="YOUR CART (SHOPPED ITEMS)"></MainHeading>
      <div className="m-6 p-5  border-none b-1 container">
        <div >
          {Products.filter(Products => Products.id).map((Products, i) => {
            if (props.count1(i) !== 0)
              return (
                <div className="col m-6 border b-4">
                  <div className="row row-col-1 row-col-sm-3 m-1">
                    <div className="col-4 m-1 ">
                      <img src={Products.pic} alt="hello" className="img" />
                    </div>
                    <div className="col-lg-4 col-md-5 m-1 border-none b-3">
                      <h2 style={{ "fontWeight": "800" }}>{Products.title}</h2>
                      <p>{Products.desc}</p>
                      <h3 style={{ "fontWeight": "800", "color": "#a1a1a1" }}>₹{Products.price}</h3>
                      <h2 style={{ "display": "flex", "fontWeight": "800", "color": "#a1a1a1" }} >Quantity :  {props.count(i)}</h2>
                    </div>

                  </div>
                </div>
              );
          })}
            <h2 style={{ "display": "flex",
            "fontWeight":"900",
             "color":"#909090",
             "paddingTop":"40px",
             "justifyContent":"right"
             }}>Your Gross Total : ₹{props.total()}</h2>
        </div>

      </div>
      <Footer /> 
    </div>
   
  );
}

