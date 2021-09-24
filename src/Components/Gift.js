import React from 'react'
import Navbar from './NavBar'
import MainHeding from './MainHeading'
import Products from './Products'
import "./MyStyles.css";
import Footer from './Footer';

function Gift(props) {
    return (
        <div>
            <Navbar></Navbar>
            <MainHeding head='Gifts n Stuff'></MainHeding>
            
            <div className="m-6 p-5  border-none b-2 container">
            <div className="row row-cols-1 ">

            {Products.map((Products, i) =>{
                
                if(Products.id>20) {
                    return (
                        <React.Fragment key={i}>
                            <div className=" m-6 border b-6">
                                <div className="row row-col-1 row-col-sm-3 m-1">
                                    <div className="col-4 m-1 ">
                                        <img className="img-fluid" src={Products.pic} alt="oops" style={{"maxHeight":"250px"}}/>
                                    </div>
                                    <div className="col-lg-4 col-md-5 m-1 border-none b-3">
                                        <h2 style={{ "fontWeight": "800" , "color" : "#606060"}}>{Products.title}</h2>
                                        <p style={{"fontSize":"20px", "fontWeight":"600","color":"#707070" }}>{Products.desc}</p>
                                        <div className="h2"  style={{ "display": "flex", "fontWeight": "800", "color": "#a1a1a1" }} >₹{Products.price}</div>
                                        <div style={{
                                            "display": "flex","fontWeight": "600", "color": "#999999", "paddingBottom": "10px"
                                        }}>
                                            <h3 style={{
                                                "paddingRight" : "40px","fontWeight": "600"
                                            }}>  Quantity : </h3>
                                            <button key={i} onClick={() => {
                                                return (
                                                    props.add(i)
                                                );
                                            }}> + 
                                            </button>
                                            <h4 style={{
                                                "paddingRight":"10px",
                                                "paddingLeft":"10px","fontWeight": "600"
                                            }}>{props.count(i)} </h4>

                                            <button key={i} onClick={() => {
                                                return (
                                                    props.sub(i)

                                                );
                                            }}> - 
                                            </button>
                                        </div>
                                        <button >Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            
            })}
            </div>
            </div>
            <Footer />
        </div>
    )

}
export default Gift