import React from 'react'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'
import AboutFeedback from '../components/pagesections/ShareFeedback/AboutFeedback'
import Banner from '../components/pagesections/ShareFeedback/Banner'
import Form from '../components/pagesections/ShareFeedback/Form'

const ShareFeedback = () => {
    return (
        <>
            <Banner/>
            <div className="share-feedback_page sec-spacing light-bg">
                <div className="container customwid">
                    <div className="form-contact-pg-container">
                        <div className="row">
                            <div className="col-lg-8">
                                <Form/>
                            </div>
                            <div className="col-lg-4">
                                <AboutFeedback/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetterCTA/>
        </>
    )
}

export default ShareFeedback