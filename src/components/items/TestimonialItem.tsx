import React from 'react';
import Image from '../elements/Image';

type AppProps = {
  user: string;
  company?: string;
  designation?: string;
  title?: string;
  comments: string;
  location?: string;
  image?: string;
  styleType:number;
};

const TestimonialItem = ({user, company, designation, title, comments, location, image, styleType} : AppProps ) => {
  return (
    <>
      { styleType === 1 &&
      <div className="item">
        <div className="alumnus_block">
          <div className="top-txt red-light">
            <Image src={'images/quote-icon.png'} alt={''} width={'70'} height={'43'} effect={'blur'} classes={''}/>
            <span className="ps-2 fw-semibold">Testimonial</span>
          </div>
          <div className="desc">{comments}</div>
          <div className="footer-txt">
            <div className="mb-0 name">{user}</div>
            <div className="deg mb-1">{company}</div>
            <div className="deg comp purple-color fw-semibold">{designation}</div>
          </div>
        </div>
      </div>
      }
      { styleType === 2 &&
      <div className="card-testimonial card card-style p-4 shadow-sm position-relative">
        <div className="position-absolute end-0 top-0 pt-4 pe-4">
          <Image src={'images/dq.png'} alt={''} width={'32'} height={'27'} effect={'blur'} classes={''}/>
        </div>
        <div className="testimonial-header d-flex align-items-center">
          {image &&
          <div className="testimonial-image flex-shrink-0 me-4">
            <Image src={image} alt={user} width={'70'} height={'70'} effect={'blur'} classes={'img-fluid rounded-circle'}/>
          </div>
          }
          <div className="testimonial-detail flex-grow-1">
            <h6 className="mb-1">{user}</h6>
            <p className="small mb-0 lh-1 fs12 text-dark-purple">{location}</p>
          </div>
        </div>
        <h6 className="fw600 mb-2 mt-3" style={{ lineHeight: "1.4" }}>{title}</h6>
        <p style={{ lineHeight: "1.6" }}>{comments}</p>
      </div>
      }
    </>
  );
};

export default TestimonialItem;