import React from 'react'

const ProvidesOffer = () => {
  return (
    <>
    <section className="corporate-Training-sec1 sec-spacing light-bg">
                <div className="container customwid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="Training-sec1">
                                <h2 className="all_heading fs26">Corporate Training by GT India</h2>
                                <p>Our corporate training solution offers corporates the flexibility to customise modules/capsules of our standard programme. Corporates can also decide the mode of training: Classroom sessions/Online Live/e-learning.</p>
                            </div>
                            <div className="program-Outcomes mt-4">
                                <h6 className="fs18 fw600 mb-3"> What Grant Thornton India provides: </h6>
                                <ul>
                                    <li>Practical approach to explain concepts, backed with case studies and simulations</li>
                                    <li>Post-training support and query management</li>
                                    <li>Vast knowledge base and experience</li>
                                    <li>Budget-friendly pricing</li>
                                    <li>Customised training</li>
                                    <li>Regular feedback to monitor training effectiveness</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <figure className="position-relative">
                                <div className="video-btn"> <a className="popup-video" data-fancybox="" href="https://www.youtube.com/watch?v=20Zg_6mFX8g"><i className="fas fa-play"></i> <span>Play Video</span></a> </div>
                                <img src="images/corporate-video-image.jpg" className="img-fluid rounded" /> </figure>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default ProvidesOffer