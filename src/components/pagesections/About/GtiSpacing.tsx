import React from 'react'

const GtiSpacing = () => {
    return (
        <>
            <section className="GTI sec-spacing">
                <div className="container customwid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6">
                            <h3 className="all_heading mb-3"> Grant Thornton International Ltd</h3>
                            <p>Grant Thornton is a network of independent assurance, tax and advisory firms, made up of 62,000+ people in 140+ countries. For more than 100 years, these firms have helped dynamic organisations realise their strategic ambitions. Whether you’re looking to finance growth, manage risk and regulation, optimise your operations or realise stakeholder value, we can help you. We’ve got scale, combined with local market understanding. That means we’re everywhere you are, as well as where you want to be. </p>
                            <div className="button-mdl"> <a className="btn btn-outline-dark btn-lg mt-3" href="#">VISIT GLOBAL WEBSITE</a> </div>
                        </div>
                        <div className="col-md-5">
                            <figure className=""> <img src="images/gti-global.png" className="img-fluid w-100" alt='poster' /> </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GtiSpacing