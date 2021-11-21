import React, { Component, useState } from "react";
import Slider from "react-slick";
import './Menu.css';

const MenuNav = ({ imageList, title }) => {

    var settings = {
        arrows: false,
        dots: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="custom-dot">
                <i className="fas fa-circle"></i>
            </div>
        ),
    };
    //const [slide, setslide] = useState(imageList);
    return (
        <div
            style={{
                position: "relative",
                maxWidth: "100vw",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <Slider {...settings} >
                {
                    imageList.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                width: "300px",
                                height: "300px",
                                backgroundColor: 'black',
                                opacity: '0.5'
                            }}
                        >


                            <div className="DivAnnonce1" ><p >{img.intitule}</p></div>
                            <img src={img.image1 !== "" && require("../images/" + img.image1).default} alt={`img${i}`} style={{ width: "100%", height: "100vh" }} />


                        </div>
                    ))
                }
            </Slider>

        </div>
    );
}

export default MenuNav;