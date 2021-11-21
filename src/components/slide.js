import React from 'react'
import { Slide } from 'react-slideshow-image'
import Slider from "react-slick";
import './Slide.css'

const Slideshow = ({ image, image2, nbr, nbr_bed, price, titule, equipement }) => {
    var settings = {
        arrows: false,
        dots: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="custom-dot1">
                <i className="fas fa-circle"></i>
            </div>
        ),
    };
    return (
        <div className="containerSlide">
            <Slider {...settings} >
                <div className="each-slide">
                    <div>
                        <img src={image} alt="img1" />
                        <div className="overlay">
                            <p>{titule}<br />Place:{nbr}<br />Prix:{price}<br />nombre de lit:{nbr_bed}<br />{equipement}</p>

                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={image2} alt="img2" />
                        <div className="overlay">

                            <p>{titule}<br />Place:{nbr}<br />Prix:{price}<br />nombre de lit:{nbr_bed}<br /></p>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Slideshow;