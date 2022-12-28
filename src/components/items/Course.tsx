import React from 'react'

type AppProps = {
    image: string,
    title: string,
    course: string[]
}

const Course = ({ image, title, course }: AppProps) => {
    return (
        <div className="col-md-3">
            <div className="unlock_block shadow-sm bg-white rounded-3 mt-lg-4 mt-3">
                <figure className="image-part rounded-3 mb-0"> <img src={image} alt="" className="w-100" /> </figure>
                <div className="content_part">
                    <h5 className="fs16 fw700">{title}</h5>
                    <div className="desc">
                        {
                            course.map((item)=>(
                                <a href="#" className="courses">{item}</a>

                            ))
                        }
                    </div>
                    <a href="#" className="purple-color fs12 fw600 text-uppercase"> MORE Courses</a> </div>
                <style></style>
            </div>
        </div>
    )
}

export default Course