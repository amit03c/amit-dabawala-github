import React from 'react'

type AppProps = {
    title:string,
    image:string,
    description:string,
}

const LeadershipNewsItem = ({title,image,description}:AppProps) => {
    return (
        <>
            <div className="col-md-4">
                <div className="Leadership-item shadow-sm bg-white rounded-3 mt-lg-4 mt-3">
                    <figure className="image-part rounded-3 overflow-hidden mb-0 position-relative"> <img src={image} alt="" className="w-100" />
                        <div className="title">{title}</div>
                    </figure>
                    <div className="content_part position-relative">
                        <div className="desc">{description}</div>
                        <a href="" className="arr-button shadow-sm"> <i className="fa-solid fa-arrow-right"></i></a> </div>
                </div>
            </div>
        </>
    )
}

export default LeadershipNewsItem