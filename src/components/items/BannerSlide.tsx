import React from 'react';
import Image from '../elements/Image';

type AppProps = {
  imageDesktop: string;
  imageMobile: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
};

const BannerSlide = ({imageDesktop, imageMobile, title, text, link, linkText}: AppProps) => {
  return (
    <>
      <div className="item">
        <div className="slide-container" style={{backgroundImage: `url(${imageDesktop})`}}>
          <div className="mobile-banner-image">
          <Image src={imageMobile} alt={title} width={'100%'} height={'100%'} effect={'blur'}/>
          </div>
          <div className="container h-100">
            <div className="hero-content">
              <h2>{title}</h2>
              <p className="lead">{text}</p>
              <a className="btn-exp btn-lg btn" href={link}>{linkText}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlide;