import React from 'react';
import Image from '../../elements/Image';
import { Link , NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import TestimonialItem from '../../items/TestimonialItem';

type AppProps = {
  data: any[];
}

const Testimonial = ({data} : AppProps) => {
  return (
    <>
      <section className="From_Alumnus position-relative sec-spacing">
        <div className="container">
          <div className="section-heading mb-5">
            <h3 className="text-center all_heading">What people are saying</h3>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="from-al-hight">
                <div className=" position-absolute alumnus-img-bt">
                  <Image src={'images/grant-thornton-alumnus1.png'} alt={''} width={'64'} height={'64'} effect={'blur'} classes={''}/>
                </div>
                <Swiper 
                  slidesPerView={1}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation, Autoplay]}
                >
                  {data.map((item) => (
                    <SwiperSlide key={item._id}>
                      <TestimonialItem
                        user={item.user}  
                        company={item.company}  
                        designation={item.designation}
                        comments={item.comments}
                        styleType={item.styleType}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="from-al-hight from-al-hight1">
                <div className="have_que">
                  <figure className="mb-0 image-hover position-relative">
                    <div className="video-btn">
                      <Link className="popup-video" to="#">
                        <i className="fas fa-play"></i>
                        <span>Demo Video</span>
                      </Link>
                    </div>
                    <Image src={'images/have-question-img.jpg'} alt={''} width={'100%'} height={'100%'} effect={'blur'} classes={'w-100'}/>
                  </figure>
                  <div className="articles_caption">
                    <h4>Have You Attended Our Program?<br />We Love to Hear from You.</h4>
                    <Link className="btn-exp btn-lg btn mt-3" to="/share-feedback">Share your experience</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;