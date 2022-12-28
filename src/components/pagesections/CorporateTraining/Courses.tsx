import React from 'react'
import CourseCard from '../../items/CourseCard'

type AppProps = {
    courseData: any[]
}

const Courses = ({ courseData }: AppProps) => {
    return (
        <section className="corporate-Training-sec2 sec-spacing" style={{ backgroundImage: `url(../images/empower-bg.jpg)` }}>
            <div className="container customwid">
                <div className="text-center text-white">
                    <h3 className="text-white all_heading"> Empower everyone to level up with learning</h3>
                    <p className="fs18"> Motivate and support employees with training and guidance</p>
                </div>
                <div className="row">
                    {
                        courseData.map((card)=>(
                            <CourseCard key={card._id} title={card.title} button={card.button} desctiption={card.desctiption} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Courses