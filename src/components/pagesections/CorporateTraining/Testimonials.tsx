import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialsCard from '../../items/TestimonialsCard'

type AppProps = {
    testimonialsData: any[]
}

const Testimonials = ({ testimonialsData }: AppProps) => {
    return (
        <>
            <section className="corporate-Training-sec7 sec-spacing bg-light">
                <div className="container customwid">
                    <div className="row">
                        <div className="col-md-8 mx-auto text-center">
                            <h2 className="all_heading"> What our clients says</h2>
                            <p> Grant Thornton’s approach to corporate training in digital economy technologies drives learner engagement and industry-high completion rates.</p>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >
                        {
                            testimonialsData.map((slide) => (
                                <SwiperSlide key={slide._id}>
                                    <TestimonialsCard image={slide.image} title={slide.title} quote={slide.quote} name={slide.name} position={slide.position} location={slide.location} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Testimonials