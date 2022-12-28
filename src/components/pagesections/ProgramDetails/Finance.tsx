import React from 'react';
import Image from '../../elements/Image';

type AppProps = {
  tagsData: any[];
};

const Finance = ({tagsData} : AppProps) => {
  return (
    <>
      <section className="enroll-feat-section section-spacing-tb50 section-content bg-light-purple-1 section-bt">
        <div className="container customwid ">
          <div className="text-center section-heading-lg mb-4">
            <h4 className="mb-1">Finance for Non Finance Course Benefits</h4>
            <div className="row">
              <p className="fs18 col-md-8 mx-auto">
                Lorem ipsum dolor sit amet consectetur. Integer praesent tellus pellentesque semper viverra. Ut sapien dictum gravida suspendisse condimentum eu cursus tempor.
              </p>
            </div>
          </div>

          <div className="card text-center card-style shadow-sm">
            <div className="card-body">
              <h5 className="text-dark-purple mb-3 fs21 mt-4">Organisations hiring for Designations after this Course</h5>
              {tagsData && 
              <div className="tags-wrap mb-5">
                {tagsData.map((item) => (
                <span className="tag" key={item._id}>{item.title}</span>
                ))}
              </div>
              }
            </div>
            <div className="card-body section-bt">
              <p style={{ marginTop: "-31px", display: "block", marginBottom: "30px" }}>
                <span className="bg-dark-purple px-3 py-2 rounded-2 text-white fs15">Some Popular Names in the Hiring for Above Designations</span>
              </p>
              <figure className="d-block">
                <Image src={'images/logos.jpg'} alt={''} width={'100%'} height={'100%'} effect={'blur'}/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Finance;