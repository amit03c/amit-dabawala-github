import React from 'react'
import Pagination from '../../elements/Pagination'
import GalleryCard from '../../items/GalleryCard'

type AppProps = {
  gallerySecData: any[]
}

const GallerySec = ({ gallerySecData }: AppProps) => {

console.log(gallerySecData)
  return (
    <>
      <div className="gallery-page sec-spacing light-bg">
        <div className="container">
          <div className="row">
            {
              gallerySecData?.map((card) => (
                <GalleryCard key={card.gallery_id
                } title={card.title} thumbnail={card.featured_image} date={""} location={""} photos={[]} />
              ))
            }
          </div>
        </div>
        <Pagination/>
      </div>
    </>
  )
}

export default GallerySec