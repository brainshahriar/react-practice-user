import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class Homeslider extends Component {
     render() {

          var settings = {
               dots: true,
               infinite: true,
               speed: 500,
               autoplay: true,
               autoplaySpeed:3000,
               slidesToShow: 1,
               slidesToScroll: 1,
               initialSlide: 0,
               arrows: false,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     initialSlide: 2
                   }
                 },
                 {
                   breakpoint: 480,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
               ]
             };


          return (
             <div>


<Slider {...settings}>
          <div>
           <img alt='' className="slider-img" src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg" />
          </div>
          <div>
          <img alt='' className="slider-img" src="https://smartslider3.com/wp-content/uploads/2019/05/sliderimages-780x410.png" />
          </div>
          <div>
          <img alt='' className="slider-img" src="https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg" />
          </div>

        </Slider>





             </div>
          )
     }
}

export default Homeslider