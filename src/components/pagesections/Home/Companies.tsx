import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import CompaniesSlide from '../../items/CompaniesSlide';

type AppProps = {
  data: any[];
};

const Companies = ({data}: AppProps) => {
  return (
    <>
      <section className="trusted_by">
        <div className="container">
          <div className="line_title">
            <h3>Trusted by Top Companies</h3>
          </div>
          <div className="trusted-logo">
            <Swiper 
              slidesPerView={7}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[ Autoplay, Navigation]}
            >
              {data.map((item) => (
              <SwiperSlide key={item._id}>
                <CompaniesSlide image={item.featured_image} name={item.title} />
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="shadoweffect"> <img src="images/shadow.png" className="img-fluid" alt='' /></div>
        </div>
      </section>
    </>
  );
};

export default Companies;