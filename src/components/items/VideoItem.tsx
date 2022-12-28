import React from 'react';
import Image from '../elements/Image';

type AppProps = {
  title: string;
  text?: string;
  videoLink: string;
  videoThumb?: string;
  styleType:number
};

const VideoItem = ({title, text, videoLink, videoThumb, styleType}: AppProps) => {
  return (
    <>
      {styleType === 1 &&
        <div className="col-md-4 my-4">
          <div className="card rounded-3 overflow-hidden video-block-wrap shadow-sm mb-0 h-100">
            <iframe className="w-100" height="200" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="card-body p-4">
              <h6 className="card-title">{title}</h6>
              <div className="card-text small opacity-75">{text}</div>
            </div>
          </div>
        </div>
      }
      {styleType === 2 &&
      <div className="card card-style shadow-sm">
        {videoThumb &&
          <Image src={videoThumb} alt={title} width={'100%'} height={'100%'} effect={'blur'} classes={'card-img-top'}/>
        }
        <div className="card-body position-relative py-3 px-4">
          <p className="fs15 h6 fw600 pt-2 mb-0">{title}</p>
          <a target={'_blank'} href={videoLink} className="btn btn-danger rounded-circle shadow-sm" style={{ height: "46px", width: "46px", backgroundColor: "#FA0F00", position: "absolute", top: "-23px", right: "23px" }}><i className="fa fa-play"></i></a>
        </div>
      </div>
      }
    </>
  );
};

export default VideoItem;