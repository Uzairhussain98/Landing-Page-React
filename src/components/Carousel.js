import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import './Carousel.css'


const Slider = () => {
  return (
           <Carousel autoPlay infiniteLoop duration={10} className="carousel" showArrows={false} showThumbs={false} showIndicators={false} >
                <div>
                    <img className="center" src={img1} />
                </div>
                <div>
                    <img className="center" src={img2} />
                </div>
                <div>
                    <img className="center" src={img3}/>
                </div>
            </Carousel>

  )
}

export default Slider
