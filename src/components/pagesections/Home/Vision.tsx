import React from 'react';
import Image from '../../elements/Image';
import { Link , NavLink } from 'react-router-dom';

const Vision = () => {
  return (
    <>
      <section className="Vibrant_Bharat position-relative sec-spacing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="VB-block">
                <h5 className="text-white"> We are Shaping a Vibrant Bharat</h5>
                <p>With our work across Assurance, Tax, Transactions, Risk, Consulting & Technology </p>
                <Link className="btn-exp btn-lg btn" to="#">Learn More</Link>
              </div>
            </div>
            <div className="col-md-6 vibrant_bharat-img">
              <figure className="position-relative mb-0 d-block">
                <Image src={'images/vibrant_bharat-img.jpg'} alt={''} width={'100%'} height={'100%'} effect={'blur'} classes={'w-100 VB-img'}/>
              </figure>
            </div>
            <div className="col-md-3 gt-bharat-logo">
              <Image src={'images/gt-bharat-logo.png'} alt={''} width={'237'} height={'118'} effect={'blur'} classes={''}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;