import React from 'react'

const Banner = () => {
    return (
        <>
            <section className="inner-banner-top " style={{ backgroundImage: `url('images/thought-leadership-banner.jpg')` }}>
                <div className="container customwid h-100">
                    <div className="row h-100">
                        <div className="col-xl-12">
                            <div className="gt-breadcrumb mt-3">
                                <div aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Thought Leadership</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="main-content">
                            <h1 className="banner__title ">Thought Leadership<br className="d-lg-block d-none" />
                                Publications</h1>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner