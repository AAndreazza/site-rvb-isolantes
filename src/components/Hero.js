import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Header';

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
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt=' ' className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt=' ' className='h-full w-full object-cover' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero