import React from 'react';
import VideoItem from '../../items/VideoItem';
type AppProps = {
  data: any[];
}

const Videos = ({data}:AppProps) => {
  return (
    <>
      <section className="videos-section sec-spacing bg-light">
        <div className="container customwid">
          <div className="section-heading mb-3">
            <h3 className="text-center all_heading">Hear from our Experts</h3>
          </div>

          <div className="row pb-4">
            {data.map((item, index) => (
              <VideoItem key={index} title={item.title} text={item.text} videoLink={item.videoLink} styleType={item.styleType}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;