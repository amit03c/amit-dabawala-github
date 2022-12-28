import React from 'react';
import TestimonialItem from '../../items/TestimonialItem';

type AppProps = {
  testimonialData:any[];
}

const Testimonials = ({testimonialData} : AppProps) => {
  return (
    <>
      <section className="enroll-feat-section section-spacing-tb50 section-content bg-light-purple-1 section-bt">
        <div className="container customwid ">
          <div className="text-center section-heading-lg mb-4">
            <h4 className="mb-1">Students Testimonials</h4>
            <div className="row">
              <p className="fs18 col-md-8 mx-auto">
                Lorem ipsum dolor sit amet consectetur. Integer praesent tellus pellentesque semper viverra. Ut sapien dictum gravida suspendisse condimentum eu cursus tempor.
              </p>
            </div>
          </div>

          <div className="row">
            {testimonialData.map((item, index) => (
            <div className="col-md-4 mb-4" key={item._id}>
              <TestimonialItem
                title={item.title} 
                comments={item.comments} 
                user={item.user}  
                location={item.location}
                image={item.image}
                styleType={item.styleType}
              />
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;