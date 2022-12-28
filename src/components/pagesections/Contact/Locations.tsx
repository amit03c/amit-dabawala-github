import React from 'react';

const Locations = () => {
  return (
    <>
      <div className="locations-map sec-spacing border-top">
        <div className="container">
          <h2 className="text-center all_heading mb-4">Office Location</h2>
          <iframe className="google-map rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5893.951995573902!2d77.11736936210508!3d28.552797257501442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d9e60121db3%3A0xcbe8311667e35305!2sGrant%20Thornton!5e0!3m2!1sen!2sin!4v1671012120411!5m2!1sen!2sin" style={{border: '0px'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default Locations;