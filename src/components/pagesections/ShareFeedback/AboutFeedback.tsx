import React from 'react'

const AboutFeedback = () => {
    return (
        <>
            <div className="feedback-right-side h-100 rounded border">
                <h6 className="fw600 fs20 mb-3">About the Feedback</h6>
                <p className="fs14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est diam sapien elit tincidunt leo, integer aliquam nec urna. Morbi enim duis turpis dictumst ipsum. Dignissim tristique condimentum iaculis sit et lacinia amet, tortor gravida. Convallis donec sociis lacus cum imperdiet ornare nibh. Vitae, amet, dignissim rhoncus eu quis</p>
                <h6 className="fw600 fs16 mb-3"> How feedback is important?</h6>
                <div className="should_attend-Ul">
                    <ul>
                        <li> Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Faucibus amet turpis malesuada lobortis</li>
                        <li>Donec placerat tincidunt massa rhoncus.</li>
                        <li>Feugiat integer nulla neque nisi, ultrices. </li>
                        <li>Metus elementum tincidunt pretium. </li>
                        <li>Mattis tempus cras elit bibendum </li>
                    </ul>
                </div>
                <hr />
                <div className=" contact-info-footer">
                    <div className="d-flex">
                        <div className="flex-shrink-0"> <i className="fa-regular fa-circle-question"></i> </div>
                        <div className="flex-grow-1 ms-2">
                            <h6 className="fs16 fw600">Need Help?</h6>
                            <p>You can contact our support team in case you need any help regarding anything</p>
                        </div>
                    </div>
                </div>
                <a href="#" className="purple-color fs12 fw600"> CONTACT NOW <i className="fa-solid fa-caret-right"></i></a>
            </div>
        </>
    )
}

export default AboutFeedback