import React from 'react'
import Banner from '../components/pagesections/LeaderShipOne/Banner'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'
import LeadershipNews from '../components/pagesections/LeaderShipOne/LeadershipNews'



const LeaderShipOne = () => {

    const leadershipNewsData = [
        {
            _id: 1,
            title: 'A guide to establishing presence in India',
            image: 'images/leadership-img1.jpg',
            description: 'Rated as one of the fastest growing major economies in the world, this is an interesting time to do business in...'
        },
        {
            _id: 2,
            title: 'Accounting for revenue - the new normal',
            image: 'images/leadership-img2.jpg',
            description: 'After more than 10 years of work, in May 2014, the International Accounting Standards Board (IASB) and Federal...'
        },
        {
            _id: 3,
            title: 'The building blocks of a strong corporate culture',
            image: 'images/leadership-img3.jpg',
            description: 'Corporate culture is receiving increased regulatory attention as a foundation of good governance. But what do we mean by...'
        },
        {
            _id: 4,
            title: 'A guide to establishing presence in India',
            image: 'images/leadership-img4-1.jpg',
            description: 'Rated as one of the fastest growing major economies in the world, this is an interesting time to do business in...'
        },
        {
            _id: 5,
            title: 'Accounting for revenue - the new normal',
            image: 'images/leadership-img5-1.jpg',
            description: 'After more than 10 years of work, in May 2014, the International Accounting Standards Board (IASB) and Federal...'
        },
        {
            _id: 6,
            title: 'The building blocks of a strong corporate culture',
            image: 'images/leadership-img6-1.jpg',
            description: 'Corporate culture is receiving increased regulatory attention as a foundation of good governance. But what do we mean by...'
        },
        {
            _id: 7,
            title: 'A guide to establishing presence in India',
            image: 'images/leadership-img7-1.jpg',
            description: 'Rated as one of the fastest growing major economies in the world, this is an interesting time to do business in...'
        },
        {
            _id: 8,
            title: 'Accounting for revenue - the new normal',
            image: 'images/leadership-img8-1.jpg',
            description: 'After more than 10 years of work, in May 2014, the International Accounting Standards Board (IASB) and Federal...'
        },
        {
            _id: 9,
            title: 'The building blocks of a strong corporate culture',
            image: 'images/leadership-img9-1.jpg',
            description: 'Corporate culture is receiving increased regulatory attention as a foundation of good governance. But what do we mean by...'
        },
        {
            _id: 10,
            title: 'A guide to establishing presence in India',
            image: 'images/leadership-img1.jpg',
            description: 'Rated as one of the fastest growing major economies in the world, this is an interesting time to do business in...'
        },
        {
            _id: 11,
            title: 'Accounting for revenue - the new normal',
            image: 'images/leadership-img2.jpg',
            description: 'After more than 10 years of work, in May 2014, the International Accounting Standards Board (IASB) and Federal...'
        },
        {
            _id: 12,
            title: 'The building blocks of a strong corporate culture',
            image: 'images/leadership-img3.jpg',
            description: 'Corporate culture is receiving increased regulatory attention as a foundation of good governance. But what do we mean by...'
        },
    ]

    return (
        <>
            <Banner />
            <LeadershipNews leadershipNewsData={leadershipNewsData} />
            <NewsLetterCTA />
        </>
    )
}

export default LeaderShipOne