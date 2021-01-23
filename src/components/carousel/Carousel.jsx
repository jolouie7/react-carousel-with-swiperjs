import React from 'react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination]);

const Carousel = () => {
  return (
    <Swiper
      // id="main"
      spaceBetween={0}
      slidesPerView={1}
      tag="section"
      wrapperTag="ul"
      style={{ width: "auto / 2", textAlign: "center" }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide tag="li" style={{ listStyleType: "none" }}>
        <img src={`https://picsum.photos/id/1/500/300`} alt={`Slide 1`} />
      </SwiperSlide>
      <SwiperSlide tag="li" style={{ listStyleType: "none" }}>
        <img src={`https://picsum.photos/id/2/500/300`} alt={`Slide 2`} />
      </SwiperSlide>
      <SwiperSlide tag="li" style={{ listStyleType: "none" }}>
        <img src={`https://picsum.photos/id/3/500/300`} alt={`Slide 3`} />
      </SwiperSlide>
      <SwiperSlide tag="li" style={{ listStyleType: "none" }}>
        <img src={`https://picsum.photos/id/4/500/300`} alt={`Slide 4`} />
      </SwiperSlide>
      {/* <SwiperSlide tag="li">Slide 2</SwiperSlide>
      <SwiperSlide tag="li">Slide 3</SwiperSlide>
      <SwiperSlide tag="li">Slide 4</SwiperSlide> */}
    </Swiper>
  );
}

export default Carousel
