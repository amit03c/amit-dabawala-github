import React, { useState } from 'react';

const RegisterForm:any = () => {
  const[isCorporate, setIsCorporate] = useState(false);

  return (
    <>
      <div className="registration-container h-100">
        <form className="course-reg-form" action="">
          <div className="form-heading">Program Registration</div>
          <div className="row">
            <div className="col-lg-12">
              <div className="program-reg-type mb-1">
                <div className="form-check form-check-inline individual-option">
                  <input className="form-check-input" type="radio" name="regType" id="regType1" value="option1" defaultChecked={true} onClick={() => setIsCorporate(!isCorporate)}/>
                  <label className="form-check-label" htmlFor="regType1">Individual</label>
                </div>
                <div className="form-check form-check-inline corporate-option">
                  <input className="form-check-input" type="radio" name="regType" id="regType2" value="option2" onClick={() => setIsCorporate(!isCorporate)}/>
                  <label className="form-check-label" htmlFor="regType2">Corporate</label>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="fullname" placeholder="Participant's Full Name*" />
                <label htmlFor="fullname">Participant's Full Name <span>*</span></label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="emailid" placeholder="Email ID*" />
                <label htmlFor="emailid">Email ID <span>*</span></label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="mobile" placeholder="Mobile No.*" />
                <label htmlFor="mobile">Mobile No. <span>*</span></label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="company" placeholder="Company Name*" />
                <label htmlFor="company">Company Name <span>*</span></label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="designation" placeholder="Designation*" />
                <label htmlFor="designation">Designation <span>*</span></label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="experience" placeholder="Years of Experience*" />
                <label htmlFor="experience">Years of Experience <span>*</span></label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="qualification" placeholder="Qualification*" />
                <label htmlFor="qualification">Qualification <span>*</span></label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating mb-3">
                <select className="form-select" id="hearfrom" aria-label="How Did You Hear About Us?">
                  <option defaultValue="">Select one source</option>
                  <option defaultValue="CA club">CA Club</option>
                  <option defaultValue="Google">Google</option>
                  <option defaultValue="Linkedin">Linkedin</option>
                  <option defaultValue="Email">Email</option>
                  <option defaultValue="IIM">IIM</option>
                  <option defaultValue="Naukri">Naukri</option>
                  <option defaultValue="Study at home">Study at home</option>
                  <option defaultValue="Others">Others</option>
                </select>
                <label htmlFor="hearfrom">How Did You Hear About Us?</label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-floating mb-4">
                <textarea className="form-control" placeholder="Invoice in favour of with Address*" id="invoiceAddress" style={{ height: "70px" }}></textarea>
                <label htmlFor="invoiceAddress">Invoice in favour of with Address <span>*</span></label>
              </div>
            </div>
            {isCorporate &&
            <div className="corporate-type-option">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="gstin" placeholder="GSTIN Number*" />
                    <label htmlFor="gstin">GSTIN Number <span>*</span></label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tanno" placeholder="TAN Number*" />
                    <label htmlFor="tanno">TAN Number <span>*</span></label>
                  </div>
                </div>
              </div>
            </div>
            }
            <div className="col-lg-12 pt-3 text-end">
              <button type="submit" className="btn btn-dark btn-lg py-3 px-5" style={{ minWidth: "270px" }}>Proceed to Pay</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;