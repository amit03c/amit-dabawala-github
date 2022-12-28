import React from 'react';
import { Link , NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <section className="inner-banner-top " style={{ backgroundImage: `url('images/listing-banner.jpg')` }}>
        <div className="container customwid h-100">
          <div className="row h-100">
            <div className="col-xl-12">
              <div className="gt-breadcrumb mt-3">
                <div aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/listing">Program</Link></li>
                    <li className="breadcrumb-item active text-white" aria-current="page">Live Online Programs</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="main-content">
              <h1 className="banner__title">
                Instructor Led
                <br className="d-lg-block d-none" />
                Online Live Programs
              </h1>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua rt enim ad minim veniam.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;