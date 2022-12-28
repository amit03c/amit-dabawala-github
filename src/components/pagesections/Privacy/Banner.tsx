import React from 'react';
import { Link , NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <section className="inner-banner-top " style={{backgroundImage:`url(images/Privacy-Policy.jpg)`}}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-xl-12">
              <div className="gt-breadcrumb mt-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active text-white" aria-current="page">Privacy Policy</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="main-content">
              <h1 className="banner__title ">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;