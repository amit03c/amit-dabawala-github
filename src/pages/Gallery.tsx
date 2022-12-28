import React, { useEffect, useState } from 'react'
import { apicall } from '../api/api'
import Banner from '../components/pagesections/Gallery/Banner'
import GallerySec from '../components/pagesections/Gallery/GallerySec'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'

const Gallery = () => {

  const gallerySecData = [
    {
      _id:1,
      title:'Corporate Event Name',
      thumbnail:'images/photo-gallery-img1.jpg',
      photos:[
        'images/photo-gallery-img1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:2,
      title:'Corporate Event Name',
      thumbnail:'images/photo-gallery-img2.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:3,
      title:'Corporate Event Name',
      thumbnail:'images/photo-gallery-img3.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:4,
      title:'Corporate Event Name',
      thumbnail:'images/photo-gallery-img4.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:5,
      title:'Corporate Event Name',
      thumbnail:'images/photo-gallery-img5.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:6,
      title:'Corporate Event Name',
      thumbnail:'images/service-img-1.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:7,
      title:'Corporate Event Name',
      thumbnail:'images/service-img-2.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:8,
      title:'Corporate Event Name',
      thumbnail:'images/service-img-3.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:9,
      title:'Corporate Event Name',
      thumbnail:'images/service-img-4.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:10,
      title:'Corporate Event Name',
      thumbnail:'images/service-img-5.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:11,
      title:'Corporate Event Name',
      thumbnail:'images/service-img-6.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
    {
      _id:12,
      title:'Corporate Event Name',
      thumbnail:'images/service-img-7.jpg',
      photos:[
        'images/photo-gallery-img1.jpg',
        'images/photo-gallery-img2.jpg',
        'images/photo-gallery-img3.jpg',
        'images/photo-gallery-img4.jpg',
        'images/service-img-4.jpg',
        'images/photo-gallery-img5.jpg',
        'images/service-img-2.jpg',
        'images/service-img-1.jpg'
      ],
      date:'22 Oct, 2022',
      location:'Ghaziabad',
    },
  ]
const [data,setData]= useState([])
  useEffect(()=>{
  apicall("get","/gt/index.php/wp-json/gallery/list").then(res=>setData(res.data))
  },[])

  return (
    <>
      <Banner />
      <GallerySec gallerySecData={data} />
      <NewsLetterCTA/>
    </>
  )
}

export default Gallery