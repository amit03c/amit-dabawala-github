import React from "react";
import { Link, NavLink } from "react-router-dom";

const Content = () => {
  return (
    <>
      <section className="content-wrapper bg-light">
        <div className="container">
          <p className="lead">
            Grant Thornton Bharat (“Grant Thornton” or “we”) is committed to protecting the privacy of the personally-identifiable information that we collect from you as you use this website. The
            scope of our commitment is detailed in this privacy policy. By submitting information on the website, you agree to our use of such information as described herein.
          </p>
          <p className="lead">
            “Grant Thornton Bharat” means Grant Thornton Advisory Private Limited, the sole member firm of Grant Thornton International Limited (UK) in India, and those legal entities which are its
            related parties as defined by the (Indian) Companies Act, 2013.
          </p>

          <div className="btn-group-block py-4 d-inline-flex">
            <Link className="btn btn-outline-dark btn-lg px-5 me-3" to="#">
              Download Privacy Notice
            </Link>
            <Link className="btn btn-outline-dark btn-lg px-5" to="#">
              Download Whistleblower Policy
            </Link>
          </div>
          <h5>Minors</h5>
          <p>
            This website is not intentionally designed for or directed at persons 18 years of age or younger, and Grant Thornton will not intentionally collect or maintain information about anyone
            under the age of 18.
          </p>

          <h5>No Disclosure of personally-identifiable information to third parties</h5>
          <p>
            Grant Thornton shall not intentionally disclose to third parties without your permission (and will take commercially reasonable steps to prevent the accidental disclosure of) any
            personally-identifiable information you may provide while visiting this website, subject to the following exceptions: (i) Grant Thornton may disclose your personally-identifiable
            information to third parties as required or permitted by applicable laws, rules or regulations; (ii) Grant Thornton may disclose your contact information in response to inquiries by
            bona-fide rights owners in connection with allegations of infringement of copyright or other proprietary rights arising from information you have submitted on this website or otherwise
            provided to Grant Thornton; and (iii) if Grant Thornton (and/or one or more of its affiliates) merges with or sells all or substantially all of its assets to a third party, information
            collected about you on this website may be disclosed to such third party.
          </p>

          <h5>Security</h5>
          <p>
            Grant Thornton has implemented generally accepted standards of technology and operation security in order to protect personally-identifiable information from loss, misuse, alteration or
            destruction. Only authorized Grant Thornton personnel are provided access to personally-identifiable information, and such employees are required to treat this information as confidential.
            Notwithstanding these precautions, we cannot guarantee that unauthorized persons will not obtain access to your personally-identifiable information.
          </p>

          <h5>Consent</h5>
          <p>
            By using this website, you consent to the collection, use and storage of your information by Grant Thornton in the manner described in this privacy policy. Grant Thornton reserves the
            right to make changes to this privacy policy from time to time. When using this website, you should review the current Terms of Use and privacy policy to determine if they have been
            amended since your last visit.
          </p>

          <h5>Cookies</h5>
          <h6>What is a Cookie</h6>
          <p>
            A cookie is a small piece of data or message that is sent from an organisation's web server to your web browser and is then stored on your hard drive. Cookies can't read data off your hard
            drive or cookie files created by other sites, and do not damage your system.
          </p>
        </div>
      </section>
    </>
  );
};

export default Content;
