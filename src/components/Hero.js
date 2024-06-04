import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header';
import Banner1 from "../images/banner1.jpg"
import Banner2 from "../images/banner2.jpg"

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //autoplay: true,
        //autosplaySpeed: 50
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <div className='overflow-hidden isolate'>
            <Header />
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={Banner1} alt=' ' className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={Banner2} alt=' ' className='h-full w-full object-cover' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero