import { Carousel } from "@mantine/carousel";
import React, { useState, useEffect } from "react";
import { Card } from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const [popularExperiences, setPopularExperiences] = useState([]);
  useEffect(() => {
    fetch("/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        const randomExperiences = data
          .sort(() => 0.5 - Math.random())
          .slice(0, 9);
        setPopularExperiences(randomExperiences);
      });
  }, []);
  return (
    // <Carousel
    //   align={"center"}
    //   withControls={false}
    //   withIndicators
    //   //   dragFree
    // >
    //   <Carousel.Slide>
    //     <Card />
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <Card />
    //   </Carousel.Slide>
    //   <Carousel.Slide>
    //     <Card />
    //   </Carousel.Slide>
    // </Carousel>
    <Swiper
      style={{ margin: "0 10px" }}
      spaceBetween={100}
      slidesPerView={1}
      align={"center"}
      pagination={{ clickable: true }}
      speed={600}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
    >
      {popularExperiences.map((exp) => (
        <SwiperSlide key={exp._id}>
          <Card data={exp} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
