import React from 'react'

const OurMission = () => {
    return (
        <>
            <section className="mission-vision-section light-bg">
                <div className="alternate-content"> <span className="image-bg" style={{ backgroundImage: ` url('images/mission-image.png')` }}></span>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-sm-6">
                                <div className="alternate-content-block">
                                    <h3 className="fs28 fw500">Our Mission</h3>
                                    <p>Our corporate training solution offers corporates the flexibility to customise modules/capsules of our standard programme. Corporates can also decide the mode of training: Classroom sessions/Online Live/e-learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="alternate-content"> <span className="image-bg" style={{ backgroundImage: `url('images/vision-image.png')` }}></span>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="alternate-content-block">
                                    <h3 className="fs28 fw500">Our Vision</h3>
                                    <p>Our corporate training solution offers corporates the flexibility to customise modules/capsules of our standard programme. Corporates can also decide the mode of training: Classroom sessions/Online Live/e-learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurMission