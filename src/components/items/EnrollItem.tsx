import React from 'react';
import Image from '../elements/Image';

type AppProps = {
  title: string;
  text: string;
  image: string;
};

const EnrollItem = ({title, text, image} : AppProps) => {
  return (
    <>
      <div className="card p-5 card-style shadow-sm text-center h-100">
        <Image src={image} alt={title} width={'45'} height={'45'} effect={'blur'} classes={'img-fluid mx-auto d-block mb-4'}/>
        <h5 className="mb-2">{title}</h5>
        <p>{text}</p>
      </div>
    </>
  );
};

export default EnrollItem;