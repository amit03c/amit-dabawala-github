import React from 'react'

type AppProps = {
    title:string,
    button:string,
    desctiption:string
}

const CourseCard = ({title,button,desctiption}:AppProps) => {
    return (
        <>
            <div className="col-md-4">
                <div className="bg-white rounded empower_block text-center">
                    <h5 className="fs24 fw700">{title}</h5>
                    <p className="fs16 mt-3">{desctiption}</p>
                    <a className="btn btn-outline-dark btn-md ps-5 pe-5 mt-md-4 fw600" href="#">{button}</a> </div>
            </div>
        </>

    )
}

export default CourseCard