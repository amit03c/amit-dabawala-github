import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CompaniesSlide from '../../items/CompaniesSlide'

type AppProps = {
    companiesData: any[]
}

const Companies = ({ companiesData }: AppProps) => {
    return (
        <>
            <section className="trusted_by bg-light trusted_company_sec">
                <div className="container">
                    <div className=" line_title">
                        <h3> Trusted by 12.5K+ businesses around the world </h3>
                    </div>
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="trusted-logo">
                            <Swiper
                                slidesPerView={5}
                                spaceBetween={30}
                                centeredSlides={true}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                            // modules={[Autoplay, Navigation]}
                            >
                                {
                                    companiesData.map((slide) => (
                                        <SwiperSlide key={slide._id} >
                                            <CompaniesSlide image={slide.image} name={slide.name} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Companies