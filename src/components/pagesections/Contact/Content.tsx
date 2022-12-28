import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import PersonInformation from './PersonInformation';

type AppProps = {
  contactData: any[],
  socialIcons:any[],
  personInfo:any[]
}

const Content = ({contactData,socialIcons,personInfo}:AppProps) => {

  return (
    <>
      <div className="Contact_page  sec-spacing light-bg">
        <div className="container customwid">
          <h2 className="text-center all_heading mb-4">Have Questions or Queries in Mind?</h2>
          <div className="form-contact-pg-container">
            <div className="row gx-0">
              <div className="col-lg-8">
                <ContactForm/>
              </div>
              <div className="col-lg-4">
                <ContactInfo contactInfoSocial={socialIcons} contactInfoData={contactData} />
              </div>
            </div>
          </div>
          <div className="bg-white rounded border mt-5 other-contect-infos">
            <PersonInformation personInfo={personInfo}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;