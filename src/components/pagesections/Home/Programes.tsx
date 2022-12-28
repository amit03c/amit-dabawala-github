import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import ProgramSlide from '../../items/ProgramSlide';

type AppProps = {
  data: any[];
}

const Programes = ({data}: AppProps) => {
 
  return <>
    <section className="Programs_Offered light-bg pt-4 pb-5">
      <div className="container">
        <div className="section-heading d-none">
          <h3 className="text-center all_heading">Programs Offered</h3>
        </div>
        <div className="services-tab mt-0">
          <div className="service-tab-links">
            <ul className="nav nav-tabs" id="service-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="online-tab" data-bs-toggle="tab" data-bs-target="#online" type="button" role="tab" aria-controls="healthcare-pro" aria-selected="true">Online Live Programs</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="e-learning-tab" data-bs-toggle="tab" data-bs-target="#e-learning" type="button" role="tab" aria-controls="recruiters" aria-selected="false">e Learning Programs</button>
              </li>
              {/* <li className="nav-item" role="presentation">
                <button className="nav-link" id="classroom-tab" data-bs-toggle="tab" data-bs-target="#classroom" type="button" role="tab" aria-controls="recruiters" aria-selected="false">Classroom Program</button>
              </li> */}
            </ul>
          </div>

          <div className="tab-content" id="service-tab-content">
            <div className="tab-pane show active" id="online" role="tabpanel" aria-labelledby="online-tab">
              <Swiper 
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
              >
                {data.map((item,index) => (
                <SwiperSlide key={item.program_id}>
                  <ProgramSlide 
                  title={item?.title}  
                  text={item?.text}  
                  link={item?.link}  
                  image={item?.featured_image}  
                  duration={item?.duration}  
                  isCertificate={item?.isCertificate}  
                  discountPercentage={0}  
                  price={item?.program_fees}  
                  enrollLink={item?.enrollLink}  
                  isLive={item?.isLive}
                  viewType={"grid"}
                  />
                </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="tab-pane" id="e-learning" role="tabpanel" aria-labelledby="e-learning-tab">
              <Swiper 
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
              >
                {data.map((item) => (
                <SwiperSlide key={item.program_id}>
                  <ProgramSlide 
                  title={item.title}  
                  text={item.text}  
                  link={item.link}  
                  image={item.image}  
                  duration={item.duration}  
                  isCertificate={item.isCertificate}  
                  discountPercentage={item.discountPercentage}  
                  price={item.price}  
                  enrollLink={item.enrollLink}  
                  isLive={item.isLive} 
                  viewType={item.viewType} 
                  />
                </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="button-mdl text-center mt-4">
            <Link className="btn btn-outline-dark btn-lg" to="/listing">ALL PROGRAMS</Link>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Programes;