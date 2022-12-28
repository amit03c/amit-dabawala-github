import React from 'react'

const CeoDeskSec = () => {
    return (
        <>
            <section className="ceo-sec light-bg">
                <div className="container customwid">
                    <div className="row gx-0">
                        <div className="col-lg-6">
                            <div className="ceo-image-sec h-100 position-relative" style={{ backgroundImage: `url('images/ceo-image.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}>
                                <div className="video-btn"> <a className="popup-video" data-fancybox="" href="https://www.youtube.com/watch?v=20Zg_6mFX8g"><i className="fas fa-play"></i></a> </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ceo-text-sec h-100 bg-white border border-start-0 position-relative">
                                <figure><img src='images/double-quotes-about.png' alt='quotation' /></figure>
                                <div className="ceo-desk">
                                    <h2 className="fs15 fw600 text-uppercase">From The CEO's Desk</h2>
                                    <p>We offer diverse solutions for all
                                        stages of a business lifecycle. We
                                        take pride in being the go-to growth
                                        adviser for dynamic organisations.
                                        When the pace of change demands
                                        greater speed and agility, we go
                                        beyond, every single time.</p>
                                </div>
                                <div className="posi_block position-absolute rounded-3 text-center text-white">
                                    <p className="fs15 fw500 mb-0">Vishesh Chandiok</p>
                                    <p className="fs13 mb-0 opacity-75"> CEO Grant Thornton</p>
                                    <small className="fs11 opacity-75">INDIA</small> </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CeoDeskSec