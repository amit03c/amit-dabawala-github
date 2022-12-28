import React from 'react';
import { Link , NavLink } from 'react-router-dom';

const NewsLetterCTA = () => {
  return (
    <>
      <section className="newsletter-section sec-spacing">
        <div className="container-xl">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-xl-6 mb-3 mb-lg-0">
              <h2 className=" all_heading text-white">Stay in touch with Grant Thornton</h2>
              <p className="mb-0 text-white">Sign up for our newsletter to stay up to date on news from Grant Thornton</p>
            </div>
            <div className="col-lg-6 col-xl-6">
              <form action="">
                <div className="row gx-2">
                  <div className="col-9 col-sm-9 col-md-8 mb-3 mb-sm-0">
                    <input type="text" className="form-control w-100 rounded" placeholder="Enter your email here"/>
                  </div>
                  <div className="col-3 col-sm-3 col-md-4">
                    <button className="btn btn-light btn-sm learn-bt ps-5 pe-5 fw-semibold w-100" type="button" id="newsletter-btn">Subscribe</button>
                  </div>
                  <small className="text-white d-block mt-2"> You may unsubscribe from these communications at any time. For information on how to unsubscribe, check out our <Link to="#" className="text-white text-decoration-underline">Privacy Policy</Link>.</small> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetterCTA;