import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import BannerSlide from '../../items/BannerSlide';

type AppProps = {
  data: any[];
};

const Banner = ({data}: AppProps) => {
  return (
    <>
      <section className="hero-main">
        <Swiper 
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1200}
          modules={[Pagination, Autoplay]}
        >
          {data.map((item) => (
          <SwiperSlide key={item._id}>
            <BannerSlide 
              imageDesktop={item.imageDesktop} 
              imageMobile={item.imageMobile} 
              title={item.title} 
              text={item.text} 
              link={item.link} 
              linkText={item.linkText}
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Banner;