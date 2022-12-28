import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { get_test_data } from '../actions/testimonials'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'
import Banner from '../components/pagesections/Testimonials/Banner'
import TestimonialBlock from '../components/pagesections/Testimonials/TestimonialBlock'

const Testimonials = () => {

    const testimonialsData = [
        {
            _id: 1,
            description: ['It was very informative, very well presented, plus enjoyable. I have learned so much from this workshop that will assist me in my workplace. I came away from the workshop feeling so confident and it really does help when working with these. Excellent learning, good quality of study material, nice transparency between a participant and coordinator and very good coordination throughout the course duration should be mentionable.', 'Once again thanks for the wonderful workshop and new skills I have now.', 'I would recommend Grant Thornton to my all friends and colleagues who really wants to develop their carrier graph to the top in this line.'],
            name: 'Arindam Mandal',
            position: 'Director-Finance',
            place: 'Bridgetree India'
        },
        {
            _id: 2,
            description: ['The Program is a complete package that provides professional insights to the world of Financial Modelling and Valuations. The trainers are experts in their field. They were able to impart practical knowledge through real life case studies and examples. The training was not only for how to do valuations but also on how to make it presentable. The hands on experience from working on real Financial Statements and support from trainers enhanced my skills to a new level. I recommend this program for anyone who wants to make meaningful financial models and valuations.'],
            name: 'Kumar Arijit',
            position: 'Assistant Professor',
            place: 'Doon Business School, Dehradun'
        },
        {
            _id: 3,
            description: ['The FMV sessions held at Grant Thornton India LLP were one of the best sessions that I had ever attended as a student. The instructors very knowledgeable and combined with their unique method of teaching, they made the course very special. I would strongly recommend this course to everyone and give it a 10/10 rating.'],
            name: 'Ishaan Arora',
            position: '',
            place: ''
        },
        {
            _id: 4,
            description: ['It was really a great learning experience, which really can’t be expressed in such a small box of feedback. To be precise and for me the training module “Finance for non-finance” has make my boardroom experiences and understanding far more refined and helped broadening my thought process even beyond to scope sometimes.', 'Thanking trainers who really made absolute efforts to give conceptual clarity and understanding.'],
            name: 'Mitesh Dave',
            position: 'VP- Projects & Head- West SBU',
            place: 'Metropolis Health Care Ltd.'
        },
        {
            _id: 5,
            description: ['Totally enjoyed the learning. Quite informative and interactive training on grooming our financial acumen for business needs. The trainer was excellent.'],
            name: 'Seema Ahluwalia',
            position: 'Executive Director – HR, Admin & IT',
            place: 'ESK India Commerce & Trade Pvt. Ltd.'
        },
        {
            _id: 6,
            description: ['Indeed one of the best value added programme that we all attended in the recent times.', 'We sincerely appreciate the efforts put in by your team in making this programme very interesting & Simple too.'],
            name: 'Kumar Arijit',
            position: 'Assistant Professor',
            place: 'Doon Business School, Dehradun'
        },
        {
            _id: 7,
            description: ['Truly the workshop was very informative that has covered from the basic that makes it easy to understand the subject. The best aspects were understanding the construction of financial statements and analysis using ratios on our routine business. This has helped me to raise my awareness of financial information to make better business decisions.'],
            name: 'Kumar Arijit',
            position: 'Assistant Professor',
            place: 'Doon Business School, Dehradun'
        },
        {
            _id: 8,
            description: ['The content covered in workshop was very good. Tutor knowledge was very good.', 'Tutor was able to explain in detail and very good on Q&A.'],
            name: 'Kumar Arijit',
            position: 'Assistant Professor',
            place: 'Doon Business School, Dehradun'
        },
    ]
    
    const [detail, setDetails] = useState<Array<any>>([]);
  useEffect(()=>{
    get_test_data("/testimonials/list", "get").then((res)=> setDetails(res.data))
    }, [])

    console.log(detail)

    return (
        <>
            <Banner />
            <TestimonialBlock testimonialsData={detail} />
            <NewsLetterCTA />
        </>
    )
}

export default Testimonials