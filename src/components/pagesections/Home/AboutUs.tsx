import React from 'react';
import Image from '../../elements/Image';
import { Link , NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <section className="About_Grant-H sec-spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="all_heading text-white">About Grant Thornton Bharat</h2>
              <p className="text-white-50">Learning & Development Academy is an upskilling service offering of Grant Thornton Bharat</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 mx-auto col-12">
              <div className="row">

                <div className="col-lg-4 mb-4">
                  <div className="stats-info-block text-center position-relative">
                    <span className="stats-icon">
                      <Image src={'images/about-countries-icon.png'} alt={'Countries'} width={'66'} height={'59'} effect={'blur'}/>
                    </span>
                    <div className="stat-number text-white">
                      <span className="counter">130</span>+
                    </div>
                    <div className="stats-info-title bg-white text-uppercase">Countries</div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="stats-info-block text-center position-relative"> 
                    <span className="stats-icon">
                      <Image src={'images/about-revenue-icon.png'} alt={'Revenue'} width={'66'} height={'59'} effect={'blur'}/>
                    </span>
                    <div className="stat-number text-white">
                      <span className="stat-big-text">$</span><span className="counter">5.45</span>bn+
                    </div>
                    <div className="stats-info-title bg-white text-uppercase">Revenue</div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="stats-info-block text-center position-relative">
                    <span className="stats-icon">
                      <Image src={'images/about-people-icon.png'} alt={'People'} width={'66'} height={'59'} effect={'blur'}/>
                    </span>
                    <div className="stat-number text-white">
                      <span className="counter">40</span><span className="stat-big-text">K</span>+
                    </div>
                    <div className="stats-info-title bg-white text-uppercase">People</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Learning_Development dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-11 mx-auto text-center">
              <div className="Learn_Dev-block foldtr">
                <h2 className="all_heading text-white">Learning & Development Academy by Grant Thornton Bharat</h2>
                <p className="text-white-90">Learning & Development Academy is an upskilling service offering of Grant Thornton Bharat providing result-oriented finance and accounting courses to professionals and students. Our impactful programmes can be customised to help you gain skills and capabilities in your areas of interest.</p>
                <Link className="btn btn-light btn-sm learn-bt ps-5 pe-5 fw-semibold" to="/about">EXPLORE MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;