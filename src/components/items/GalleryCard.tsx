import React, { useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Video from "yet-another-react-lightbox/plugins/video";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


type AppProps = {
    title: string,
    thumbnail: string,
    date: string,
    location: string,
    photos: string[],
}

const GalleryCard = ({ title, thumbnail, date, location, photos }: AppProps) => {
    const [open, setOpen] = React.useState(false);
    const [photo, setPhoto] = useState<any>([])
console.log(photos)
    const openLightBox = () => {
        let img: any[] = []
        setOpen(true)
        photos.map((item: any) => {
            console.log(item)
            return img.push({ src: item })
        })
        setPhoto(img)
    }


    return (
        <>
            <div className="col-md-4">
                <div className="card service-card gallery_block shadow-none"> <img className="card-img-top" src={thumbnail} alt="thumbnail" data-pagespeed-url-hash="282351432" />
                    <div className="card-body bg-white"> <span className="tag"><i className="fa-solid fa-camera"></i> {photos.length} Photos</span>
                        <h4 className="card-title">{title}</h4>
                        <ul className="locations_date">
                            <li><i className="fa-solid fa-calendar-days"></i> {date} </li>
                            <li><i className="fa-solid fa-location-dot"></i> {location} </li>
                        </ul>
                        <button className="btn btn-dark Enroll mb-md-2" onClick={() => openLightBox()}>VIEW ALBUM</button> </div>
                </div>
            </div>

            
                <Lightbox open={open} close={() => setOpen(false)} slides={photo} plugins={[Thumbnails, Zoom,Fullscreen,Slideshow]} className="light_box_gallery_layout"/>
            
        </>
    )
}

export default GalleryCard