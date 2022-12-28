import React, { useState } from "react";
import CouponCodeInput from "../components/elements/CouponCodeInput";
import CertificateItem from "../components/items/CertificateItem";
import RegisterForm from "../components/pagesections/Register/RegisterForm";
import NewsLetterCTA from "../components/pagesections/Shared/NewsLetterCTA";

const Register = () => {
  const certificateData = [
    {
      _id:1,
      discountPercent:10,
      price: 18000,
      title:"Association of Chartered Certified Accountants"
    },
    {
      _id:2,
      discountPercent:10,
      price: 18000,
      title:"ACCA DipIFRS - Online Live Training"
    },
    {
      _id:3,
      discountPercent:10,
      price: 18000,
      title:"Certification in Financial Modelling & Valuation Online Live"
    }
  ]

  return (
    <>
      <section className="registration-section reg-form-4 pt-3 pb-5">
        <div className="container customwid">
          <div className="form-option-container">
            <div className="row gx-0">
              <div className="col-lg-5">
                <div className="program-detail-column">
                  <div className="pointer"></div>
                  <div className="pg-detail-inner">
                    <div className="register-course-block">
                      <p>Program Name</p>
                      <h4>Certification in Cybersecurity E Learning</h4>
                      <div className="h5 d-inline-block text-dark" style={{ fontSize: "16px", fontWeight: 600 }}>INR 12,000</div>
                      <small className="text-dark opacity-75"> taxes included</small>
                      <hr/>
                      <CouponCodeInput/>
                    </div>

                    <div className="frequent-bought">
                      <h5 className="mb-2">Frequently Bought Together</h5>
                      <div className="more-programs-list">
                        {certificateData.map((item) => (
                          <CertificateItem key={item._id} id={item._id} title={item.title} discountPercent={item.discountPercent} price={item.price}/>
                        ))}
                      </div>
                      
                      {/* Style Version 2 */}
                      {/* <div className="more-courses-list row gx-2 d-none">
                        <div className="col-12">
                          <div className="more-courses-item d-flex h-100">
                            <div className="flex-grow-1">
                              <h6>Association of Chartered Certified Accountants</h6>
                              <div className="pt-0 fs-6 fw600 pb-0">
                                <span className="d-inline-block">INR 16,200</span> <del className="text-muted small fw400">18,000</del>
                              </div>
                            </div>
                            <div className="flex-shrink-0 ms-3">
                              <input type="checkbox" className="btn-check" id="btn-check-outlined-1" autoComplete="off" />
                              <label className="btn btn-outline-dark btn-sm py-1 px-2" htmlFor="btn-check-outlined-1">Select</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="more-courses-item d-flex h-100">
                            <div className="flex-grow-1">
                              <h6>ACCA DipIFRS - Online Live Training</h6>
                              <div className="pt-0 fs-6 fw600 pb-0">
                                <span className="d-inline-block">INR 16,200</span> <del className="text-muted small fw400">18,000</del>
                              </div>
                            </div>
                            <div className="flex-shrink-0 ms-3">
                              <input type="checkbox" className="btn-check" id="btn-check-outlined-2" autoComplete="off" />
                              <label className="btn btn-outline-dark btn-sm py-1 px-2" htmlFor="btn-check-outlined-2">Select</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="more-courses-item d-flex h-100">
                            <div className="flex-grow-1">
                              <h6>Certification in Financial Modelling &amp; Valuation Online Live</h6>
                              <div className="pt-0 fs-6 fw600 pb-0">
                                <span className="d-inline-block">INR 16,200</span> <del className="text-muted small fw400">18,000</del>
                              </div>
                            </div>
                            <div className="flex-shrink-0 ms-3">
                              <input type="checkbox" className="btn-check" id="btn-check-outlined-3" autoComplete="off" />
                              <label className="btn btn-outline-dark btn-sm py-1 px-2" htmlFor="btn-check-outlined-3">Select</label>
                            </div>
                          </div>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <RegisterForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsLetterCTA />
    </>
  );
};

export default Register;
