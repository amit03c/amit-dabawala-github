import React from 'react'
import AwardItem from '../../items/AwardItem'

type AppProps = {
    awardSecData: any[]
}

const Award = ({ awardSecData }: AppProps) => {
    return (
        <>
            <section className="Awards-sec dark-bg sec-spacing">
                <div className="container">
                    <h3 className="all_heading text-center"> Awards & Achievements</h3>
                    <div className="awards-logos pt-3">
                        <div className="row">
                            {
                                awardSecData.map((sec) => (
                                    <AwardItem key={sec._id} image={sec.image} details={sec.details} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Award