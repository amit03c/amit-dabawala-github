import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className="left-side-form bg-white h-100 border">
                <div className="contact-icon-prt">
                    <span className="contact__icon"><i className="fa-solid fa-location-arrow"></i></span>
                    <span className="contact__icon-txt">
                        <h4 className="mb-0">Write to us </h4>
                        <p className="mb-0">We would love to hear from you</p>
                    </span>
                </div>
                <form method="post" action="#" id="email-form" className="pt-3">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>First Name*</label>
                            <input type="text" name="username" className="form-control" placeholder="Enter First Name" required />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Last Name*</label>
                            <input type="text" name="username" className="form-control" placeholder="Enter Last Name" required />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Email ID*</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Phone No.*</label>
                            <input type="tel" className="form-control" id="mobile" placeholder="Enter your phone no." />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Company</label>
                            <input type="text" name="subject" className="form-control" placeholder="Enter your company" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Designation</label>
                            <input type="text" name="subject" className="form-control" placeholder="Enter your designation" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Qualification</label>
                            <input type="text" name="subject" className="form-control" placeholder="Enter your qualification" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Location</label>
                            <input type="text" name="subject" className="form-control" placeholder="Enter your Location" />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <label>Your Message</label>
                            <textarea name="message" className="form-control" placeholder="Write your message..."></textarea>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 contact-info-footer align-items-center d-flex">
                            <div className="d-flex">
                                <div className="flex-shrink-0"> <i className="fa-solid fa-circle-info"></i> </div>
                                <div className="flex-grow-1 ms-2">
                                    <p>Your details are safe with us, so feel free to contact us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 text-center">
                            <button className="btn btn-dark btn-lg py-3 px-5 w-100" type="button" id="submit" name="submit-form">SUBMIT DETAILS</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm