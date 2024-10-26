import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import LeftButton from "../NavigationButtons/LeftButton";
import Card from "../Card/Card";

function Carousel({ items }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={"auto"}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className={styles.carousel}
    >
      {items.map((album) => (
        <SwiperSlide key={album.id} className={styles.slide}>
          <Card
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
