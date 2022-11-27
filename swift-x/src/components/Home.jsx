import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/home1.png'
import img2 from '../assets/home2.png'
import img3 from '../assets/home3.png'
import img4 from '../assets/home4.png'


const Home = () => {
  return (
    <div className="carousel">
     
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={2000}
        
      >
        <div>
          <img src={img1} alt="Item1" />
          {/* <p className="legend">Full Stack</p> */}
        </div>
        <div>
          <img src={img2} alt="Item3" />
         
        </div>
        <div>
          <img src={img3} alt="Item3" />
          
        </div>
        <div>
          <img src={img4} alt="Item3" />
          
        </div>
      </Carousel>
    </div>
  )
}

export default Home