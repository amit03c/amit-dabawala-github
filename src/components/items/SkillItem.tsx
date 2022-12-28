import React from 'react';
import Image from '../elements/Image';

type AppProps = {
  title: string;
  text: string;
};

const SkillItem = ({title, text} : AppProps) => {
  return (
    <>
      <div className="card card-style bg-light-purple-1 skill-block p-4 mb-4 shadow-sm">
        <div className="d-flex">
          <div className="flex-shrink-0 me-4" style={{ height: "38px", width: "38px" }}>
            <Image src={'images/green-check.png'} alt={title} width={'100%'} height={'100%'} effect={'blur'}/>
          </div>
          <div className="flex-frow-1">
            <h5 className="fs17 fw600">{title}</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;