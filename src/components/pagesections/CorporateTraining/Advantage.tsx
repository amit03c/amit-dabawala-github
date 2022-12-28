import React from 'react'
import AdvantageItem from '../../items/AdvantageItem'

type AppProps = {
    advantageSecData:any[]
}

const Advantage = ({advantageSecData}:AppProps) => {
    return (
        <>
            <section className="corporate-Training-sec4 sec-spacing" style={{ backgroundImage: `url(../images/advantage-bg.jpg)` }}>
                <div className="container customwid">
                    <div className="row">
                        <div className="col-md-8 mx-auto col-12 text-center text-white">
                            <h3 className="text-white all_heading"> GT Corporate Training Advantage</h3>
                            <p className="fs17"> Grant Thornton’s approach to corporate training in digital economy technologies drives learner engagement and industry-high completion rates.</p>
                        </div>
                    </div>
                    <div className="advantage-list pt-4 text-center">
                        <div className="row">
                            {
                                advantageSecData.map((sec)=>(
                                    <AdvantageItem key={sec._id} image={sec.image} title={sec.title} description={sec.description}/>
                                ))
                            }
                            {/* <div className="col-lg-4 col-md-6 col-12">
                                <div className="adv-block mx-auto"> <span className="adv-icon mx-auto mb-4"> <img src="images/training-icon1.png" /> </span>
                                    <div className="adv-title text-center ">High-engagement,
                                        outcome-centric learning</div>
                                    <p>Live virtual classrooms, mentoring sessions, hands-on projects, and interactive labs drive learner outcomes</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="adv-block mx-auto"> <span className="adv-icon mx-auto mb-4"> <img src="images/training-icon2.png" /> </span>
                                    <div className="adv-title text-center ">Customizable solutions that match your requirements</div>
                                    <p>From learning portal integration to contextualized learning paths, we're committed to your success</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="adv-block mx-auto"> <span className="adv-icon mx-auto mb-4"> <img src="images/training-icon1.png" /> </span>
                                    <div className="adv-title text-center ">Latest curriculum from industry experts and universities </div>
                                    <p>Programs co-developed with the world's top practitioners and academics and aligned to leading certification bodies </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Advantage