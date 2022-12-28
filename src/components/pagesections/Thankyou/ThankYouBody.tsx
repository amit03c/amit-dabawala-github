import React from 'react'

const ThankYouBody = () => {
    return (
        <>
            <div className="thanks_page sec-spacing light-bg">
                <div className="container">
                    <div className="thanks_block">
                        <div className="row">
                            <div className="col-md-6 col-12 mx-auto text-center">
                                <figure className="thanks_img"><img src="images/thanks-img.png" className="img-fluid" /></figure>
                                <h1>Thank You!</h1>
                                <p className="fs17">Thanks for contacting us, our expert from <strong>Grant Thornton</strong> India will contact to you soon to resolve your query</p>
                                <a href="javascript:void(0)" className="btn btn-danger btn-hover ps-5 pe-5 p-3"> GO TO HOMEPAGE</a>
                                <div className="dividers">
                                    <div className="or">or </div>
                                </div>
                                <div className="thanks-social-block mt-4">
                                    <h4 className="fs14">FOLLOW US ON</h4>
                                    <ul>
                                        <li><a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fa-brands fa-youtube"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYouBody