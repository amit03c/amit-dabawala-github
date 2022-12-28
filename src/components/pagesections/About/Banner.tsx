import React from 'react'

const Banner = () => {
    return (
        <>
        <section className="About-banner-top" style={{backgroundColor:'#fbfafd', backgroundImage:`url('images/about-us-banner.jpg')`, backgroundRepeat:'no-repeat', backgroundPosition: 'top center'}}>
                <div className="container h-100">
                    <div className="about-top-textprt position-relative"> <img src='images/about-top-banner.jpg' className="rounded-4 w-100" alt='banner'/>
                        <div className="banner__info position-absolute bottom-0 start-0 p-5 text-white">
                            <h6 className="fs12 fw500 ls-7 text-uppercase text-white">ABOUT US</h6>
                            <h1 className="fw700 fs24 lh-lg text-uppercase text-white mb-0">Grant Thornton Bharat</h1>
                            <p className="fs15 fw500 opacity-75">Learning & Development Academy is an upskilling service
                                offering of Grant Thornton Bharat</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner