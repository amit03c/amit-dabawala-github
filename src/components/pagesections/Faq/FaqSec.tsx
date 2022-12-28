import React from 'react'
import FaqSecItem from '../../items/FaqSecItem'

type AppProps = {
    faqData:any[]
}

const FaqSec = ({faqData}:AppProps) => {
    return (
        <>
            <div className="Faq_page sec-spacing light-bg">
                <div className="container">
                    {
                        faqData.map((sec,index)=><FaqSecItem key={sec._id} index={index+1} title={sec.title} data={sec.dropdown}/>)
                    }
                    <div className="alert alert-secondary cancellation-text d-flex justify-content-between align-items-center">
                        <p className="mb-0 ps-2">Your question not in the list? Send us your question now!</p>
                        <a className="btn btn btn-dark" href="#">ASK YOUR QUESTION</a> </div>
                </div>
            </div>
        </>
    )
}

export default FaqSec