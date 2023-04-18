import Image from "next/image";
import Link from "next/link";

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
<div style={{width: "700px",margin:"0 auto"}}>
  <br/>
<Carousel >
                  <div>
                      <img src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png" alt="image1"/>
                      
  
                  </div>
                  <div>
                      <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Pathaan.jpg" alt="image2" />
                    
  
                  </div>
                  <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2Xwxp8BOvBmN_-_Hqzg7P51K08FBs0DoiQ&usqp=CAU" alt="image3"/>
                     
  
                  </div>
                  <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrCNNNCP_VgL9UMF2fEnamIw9z4ta0b-41qZyycKFKN0JvP-SrqvVLi-iyHlnMpKLHqI&usqp=CAU" alt="image4"/>
                  
  
                  </div>
                  <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTY1AQ6wQhqUMmS72kH-ZYLCQQo3bZsU_vjQ&usqp=CAU" alt="image5"/>
                      
  
                  </div>
              </Carousel>
</div>
  );
};

export default Hero;
