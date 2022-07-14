import React, { Component } from "react";
import { Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "./imageSlider.css";
import imageData from "./imageData";
import { Link as RouterLink } from "react-router-dom";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {imageData.map((item, index) => {
          return (
            <div className="imageslider-card">
          
              <img src={item.img} alt="pizza" className="slider-image" />
          
              <h4 className="imageslider-text">{item.name} {}</h4>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default ImageSlider;
