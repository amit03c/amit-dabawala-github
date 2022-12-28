import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import EnrollItem from '../../items/EnrollItem';

type AppProps = {
  enrollData: any[];
};

const Enroll = ({enrollData} : AppProps) => {
  return (
    <>
      <section className="enroll-feat-section section-spacing-tb50 section-content bg-light-purple-1 section-bt">
        <div className="container customwid ">
          <div className="text-center section-heading-lg mb-4">
            <h4>Why you need to Enroll</h4>
          </div>
          <div className="row mb-4">
            {enrollData.map((item) => (
              <div className="col-md-4" key={item._id}>
                <EnrollItem
                title={item.title}
                text={item.text}
                image={item.image}
                />
              </div>
            ))}
            
            {/* <div className="col-md-4">
              <div className="card p-5 card-style shadow-sm text-center h-100">
                <img className="img-fluid mx-auto d-block mb-4" src="images/enroll-2.png" alt="" />
                <h5 className="mb-2">Some Heading Here</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 card-style shadow-sm text-center h-100">
                <img className="img-fluid mx-auto d-block mb-4" src="images/enroll-3.png" alt="" />
                <h5 className="mb-2">Some Heading Here</h5>
                <p>Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque</p>
              </div>
            </div> */}
          </div>
          <div className="text-center pt-3">
            <h5 className="fw600 mb-3">Want to know more about this course?</h5>
            <Link className="btn btn-dark btn-lg" to="#">ENQUIRE NOW</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enroll;