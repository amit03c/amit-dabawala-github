import React from 'react';
import VideoItem from '../../items/VideoItem';

type AppProps = {
  videoData:any[];
}

const Videos = ({videoData} : AppProps) => {
  return (
    <>
      <section className="enroll-feat-section section-spacing-tb50 section-content section-bt">
        <div className="container customwid ">
          <div className="text-center section-heading-lg mb-2">
            <h4 className="mb-1">GT Academy Videos</h4>
            <div className="row">
              <p className="fs18 col-md-8 mx-auto">
                Lorem ipsum dolor sit amet consectetur. Integer praesent tellus pellentesque semper viverra. Ut sapien dictum gravida suspendisse condimentum eu cursus tempor.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            {videoData.map((item, index) => (
            <div className="col-md-4" key={item._id}>
              <VideoItem title={item.title} videoLink={item.videoLink} videoThumb={item.videoThumb} styleType={item.styleType}/>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;