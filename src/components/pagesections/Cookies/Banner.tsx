import React from 'react'

const Banner = () => {
    return (
        <section className="inner-banner-top " style={{ backgroundImage: `url(images/cookies-policy-banner.jpg)` }}>
            <div className="container customwid h-100">
                <div className="row h-100">
                    <div className="col-xl-12">
                        <div className="gt-breadcrumb mt-3">
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Cookies Policy</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="main-content">
                        <h1 className="banner__title ">Cookies Policy</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner