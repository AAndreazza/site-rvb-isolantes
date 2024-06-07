import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header';
import Banner from '../images/bannerContato.jpg'

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //autoplay: true,
        //autosplaySpeed: 50,
        /*appendDots: dots => (
                <ul className=" ">{dots}</ul>
        ),*/
        customPaging: i => (
            <button className="mt-10">
                ●
            </button>
        ),
    };

    return(
        <div className='overflow-hidden isolate'>
            <Header />
            <div className="slider-container relative">
                <Slider {...settings}>
                    <div>
                        <img src={Banner} alt=' ' className='opacity-25 h-full w-full' />
                    </div>
                    <div>
                        <img src={Banner} alt=' ' className='opacity-25 h-full w-full' />
                    </div>
                    <div>
                        <img src={Banner} alt=' ' className='opacity-25 h-full w-full' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero