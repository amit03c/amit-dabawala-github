import React from 'react';
import Image from '../elements/Image';

type AppProps = {
  image: string;
  name: string;
};

const CompaniesSlide = ({image,name}: AppProps) => {
  return (
    <>
      <div className="item">
        <figure>
          <Image src={image} alt={name} width={'100%'} height={'100%'} effect={'blur'}/>
        </figure>
      </div>
    </>
  );
};

export default CompaniesSlide;