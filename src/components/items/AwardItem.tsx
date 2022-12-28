import React from 'react'

type AppProps = {
    image:string,
    details: string,
}

const AwardItem = ({image, details}:AppProps) => {
    return (
        <>
            <div className="awards-logo col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 h-100 ">
                <div className="card-body p-0 border rounded">
                    <figure className="d-block px-3 py-4 mb-0"> <img className="img-fluid mx-auto d-block" src={image} alt="award_logo" data-pagespeed-url-hash="1257290199" /></figure>
                </div>
                <div className="card-footer">
                    <p className="mb-0"> {details}</p>
                </div>
            </div>
        </>
    )
}

export default AwardItem