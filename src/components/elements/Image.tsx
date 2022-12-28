import React from 'react';
import { Effect, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

type AppProps = {
  src: string;
  width: string;
  height: string;
  alt?: string;
  effect: Effect;
  classes?: string;
};

const Image = ({src, width, height, alt, effect, classes}: AppProps) => {
  return (
    <>
      <LazyLoadImage
        src={src}
        width={width} 
        height={height}
        alt={alt}
        effect={effect}
        className={'w-full h-full ' + (classes)}
      />
    </>
  );
};

export default Image;