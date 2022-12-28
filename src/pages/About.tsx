import React from 'react'
import Award from '../components/pagesections/Shared/Award'
import Banner from '../components/pagesections/About/Banner'
import CeoDeskSec from '../components/pagesections/About/CeoDeskSec'
import GlobalSnapshot from '../components/pagesections/About/GlobalSnapshot'
import GtiSpacing from '../components/pagesections/About/GtiSpacing'
import LarningSpeech from '../components/pagesections/About/LarningSpeech'
import LeadershipTeam from '../components/pagesections/About/LeadershipTeam'
import OurMission from '../components/pagesections/About/OurMission'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'

const About = () => {

    const awardSecData = [
        {
            _id: 1,
            image:'images/assocham_india.png',
            details:"Best Sports Counsulting Firm ASSOCHAM's Sports Excellence Awards",
        },
        {
            _id: 2,
            image:'images/unversum-logo.png',
            details:"India's Top 100 Most Attractive Employers: Universum, 2019, 2018, 2017 and 2016",
        },
        {
            _id: 3,
            image:'images/intl-global-awards.png',
            details:"CrossBorder Transactions Adviser of the Year in India, 2019: Corporate INTL Global Awards",
        },
        {
            _id: 4,
            image:'images/venture-intelligence.png',
            details:"Ranked 5th amongest Top Advisors - M&A: Venture Intelligence League Tables, 2018",
        },
    ]

    const leaderShipData = [
        {
            _id:1,
            name: 'Kapil Arora',
            image: 'images/leadership1.png',
            position: 'Director',
            icon:'fa-brands fa-linkedin-in' ,
        },
        {
            _id:2,
            name: 'Pradeep Pandey',
            image: 'images/leadership2.png',
            position: 'Director',
            icon:'fa-brands fa-linkedin-in' ,
        },
        {
            _id:3,
            name: 'Rohit Gupta',
            image: 'images/leadership3.png',
            position: 'Director',
            icon:'fa-brands fa-linkedin-in' ,
        }
    ]

    return (
        <>
            <Banner />
            <CeoDeskSec />
            <LarningSpeech />
            <Award awardSecData={awardSecData} />
            <GtiSpacing/>
            <OurMission/>
            <GlobalSnapshot/>
            <LeadershipTeam leaderShipData={leaderShipData} />
            <NewsLetterCTA/>
        </>
    )
}

export default About