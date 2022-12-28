import React, {useState, useEffect} from 'react';
import Image from '../components/elements/Image';
import { Link , NavLink } from 'react-router-dom';

const DefaultFooter = () => {
  const [scroll, setScroll] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);




  return (
    <>
      <footer className="site-footer">
        <div className="footer-inforamtion">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-4 border-end">
                <div className="footer-about">
                  <Link to="/">
                    <Image src={'images/grant-thornton-footer-logo.png'} alt={''} width={'249'} height={'47'} effect={'blur'} classes={'img-fluid mb-3'}/>
                  </Link>
                  <p>Learning & Development Academy is an upskilling service offering of Grant Thornton in India, providing result-oriented training programmes to professionals and students.</p>
                  <div className="footer__social mt-4">
                    <ul>
                      <li><Link to="#" target="_blank" rel="nofollow"><i className="fa-brands fa-facebook-f"></i></Link></li>
                      <li><Link to="#" target="_blank" rel="nofollow"><i className="fa-brands fa-twitter"></i></Link></li>
                      <li><Link to="#" target="_blank" rel="nofollow"><i className="fa-brands fa-youtube"></i></Link></li>
                      <li><Link to="#" target="_blank" rel="nofollow"><i className="fa-brands fa-linkedin"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 border-end">
                <div className="footer-links">
                  <h6 className="section-heading">INFO</h6>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/corporate-training">Corporate Training</Link></li>
                    <li><Link to="/thought-leadership">Thought Leadership </Link></li>
                    <li><Link to="/share-feedback">Share Feedback</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 border-end">
                <div className="footer-links pb-3">
                  <h6 className="section-heading">PROGRAMS</h6>
                  <ul>
                    <li><Link to="/program-detail">Workshop on GST</Link></li>
                    <li><Link to="/program-detail">ACCA DipIFRS - online live training</Link></li>
                    <li><Link to="/program-detail">Workshop on transfer pricing</Link></li>
                    <li><Link to="/program-detail">Advanced excel boot camp</Link></li>
                    <li><Link to="/program-detail">Certificate in IFRS E Learning</Link></li>
                    <li><Link to="/program-detail">Certificate in Blockchain Online Live</Link></li>
                    <li><Link to="/program-detail">Business Intelligence using Power BI and Tableau</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-links">
                  <h6 className="section-heading">HELP</h6>
                  <ul >
                    <li><Link to="#">Support</Link></li>
                    <li><Link to="#">Faqs</Link></li>
                    <li><Link to="/terms-of-use">Terms of Use</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/cookies-policy">Cookies Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <hr/>
        </div>

        <div className="footer-address pt-5 pb-5">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-4 col-12">
                <span className="text-white">Kapil Arora<br/>Director</span><br/>
                <span className="links mt-1 d-block">
                  M: <Link to="tel:7838000185">+91 965 419 0274</Link><br/>
                  E: <Link to="mailto:pradeep.pandey@in.gt.com">kapil.arora@in.gt.com</Link>
                </span>
              </div>
              <div className="col-md-4 col-12">
                <span className="text-white">Pradeep Pandey<br/>Director</span><br/>
                <span className="links mt-1 d-block">
                  M: <Link to="tel:7838000185">+91 78380 00185</Link><br/>
                  E: <Link to="mailto:pradeep.pandey@in.gt.com">pradeep.pandey@in.gt.com</Link>
                </span>
              </div>
              <div className="col-md-4 col-12">
                <span className="text-white">Rohit Gupta<br/>Associate Director</span><br/>
                <span className="links mt-1 d-block">
                  M: <Link to="tel:9891395363">+91 98913 95363</Link><br/>
                  E: <Link to="mailto:rohit.gupta1@in.gt.com">rohit.gupta1@in.gt.com</Link> 
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <hr/>
        </div>
        <div className="footer-copyright pb-3 pt-3">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-auto col-12">
                <p className="mb-0">Copyright © 2022, gtacademy.in All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Link id="back-to-top" to="#" className="scroll-up back-to-top shadow rounded" role="button"><i className="fa-solid fa-angle-up"></i></Link>

      <div className={"stickyFormWrapper " + (scroll?' isVisible':'') + (formOpen?' formIsOpen':'')}>
        <div className="Fields-wrapper">
          <button className="fixed-sticker" type="button" onClick={() => setFormOpen(!formOpen)}>
            <img src="images/enquire-us-now.jpg" alt="" style={{width:'32px', height:'146px'}}/>
          </button>
          <h4>Enquire Us Now 
            <button className="closestickyform" type="button" onClick={() => setFormOpen(!formOpen)}>Close<i className="fa fa-close ms-1"></i></button>
          </h4>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="fullname" placeholder="Full Name*"/>
            <label htmlFor="fullname">Full Name <span>*</span></label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="emailid" placeholder="Email ID*"/>
            <label htmlFor="emailid">Email ID <span>*</span></label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="mobile" placeholder="Mobile No.*"/>
            <label htmlFor="mobile">Mobile No. <span>*</span></label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Enquiry Message" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Enquiry Message</label>
          </div>
          <div className="col-lg-12 pt-3 text-end">
            <button type="submit" className="btn btn-dark btn-lg py-3 px-5 w-100">Submit Enquiry</button>
          </div>
        </div>
      </div>
      <div className={"sticky-whatsapp " + (scroll?'isVisible':'')}>
        <Link to="#" className="btn-whatsapp"><i className="fab fa-whatsapp"></i></Link>
      </div>
    </>
  );
};

export default DefaultFooter;