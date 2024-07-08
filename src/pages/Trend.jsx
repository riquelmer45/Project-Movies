import React, { useState, useEffect } from "react";
import "./Trend.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import TrendCard from "../components/TrendCard";

function Trend() {
  const [slides, setSlides] = useState([]);

  const fecthData = () => {
    fetch("http://localhost:5173/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <section id="trend" className="Trand">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Em breve</h4>
        </div>
        <div className="row">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            className="trendSwiper"
          >
            {slides &&
              slides.map((slide) => (
                <SwiperSlide key={slide._id}>
                  <TrendCard slide={slide} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Trend;
