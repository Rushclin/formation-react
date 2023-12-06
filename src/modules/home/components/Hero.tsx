"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { app } from "@/configs/app";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="pt-6">
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {app.slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
