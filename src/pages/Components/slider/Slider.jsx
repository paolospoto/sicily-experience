import { Carousel } from "@mantine/carousel";
import React from "react";
import { Card } from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
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
      spaceBetween={-100}
      slidesPerView={1.6}
      pagination={{ clickable: true }}
      speed={600}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
