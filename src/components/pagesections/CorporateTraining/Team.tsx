import React from 'react'
import Course from '../../items/Course'

type AppProps = {
    teamData: any[]
}
const Team = ({ teamData }: AppProps) => {
    return (
        <>
            <section className="corporate-Training-sec3 sec-spacing light-bg">
                <div className="container customwid">
                    <div className="text-center">
                        <h3 className="all_heading">Unlock Your Team's Potential</h3>
                        <p className="fs17"> Role-aligned learning paths that map digital skills to desired learner outcomes.</p>
                    </div>
                    <div className="row">
                        {
                            teamData.map((card)=>(
                                <Course key={card._id} image={card.image} course={card.course} title={card.title}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team