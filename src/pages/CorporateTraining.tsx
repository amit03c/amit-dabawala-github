import React from 'react'
import Advantage from '../components/pagesections/CorporateTraining/Advantage'
import Banner from '../components/pagesections/CorporateTraining/Banner'
import Companies from '../components/pagesections/CorporateTraining/Companies'
import Courses from '../components/pagesections/CorporateTraining/Courses'
import GetConnect from '../components/pagesections/CorporateTraining/GetConnect'
import ProvidesOffer from '../components/pagesections/CorporateTraining/ProvidesOffer'
import Team from '../components/pagesections/CorporateTraining/Team'
import Testimonials from '../components/pagesections/CorporateTraining/Testimonials'
import Award from '../components/pagesections/Shared/Award'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'

const CorporateTraining = () => {

    const companiesData = [
        {_id:1,image:'images/google-logo.png', name:'Google'},
        {_id:7,image:'images/linkdin-logo.png', name:'Linkdin'},
        {_id:3,image:'images/coursera-logo.png', name:'coursera'},
        {_id:4,image:'images/udemy-logo.png', name:'udemy'},
        {_id:5,image:'images/byjus-logo.png', name:'byjus-logo'},
      ]

      const testimonialsData=[
        {
            _id:1,
            image:'images/tm1.jpg',
            title:'GT Trainers were extremely knowledgable & engaging',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim egestas pellentesque parturient sapien arcu ipsum. Porta tortor malesuada habitasse non augue accumsan nisl, libero sed. Et integer eleifend iaculis dolor justo fermentum tortor non. Suspendisse sem vel ligula leo. Et, ac ipsum in adipiscing pulvinar blandit ornare',
            name: 'Ted Kulakevich',
            position: 'CEO',
            location: 'GeoNex Fintech'
        },
        {
            _id:2,
            image:'images/tm2.jpg',
            title:'Great Product Management workshop with Grant Thornton',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim egestas pellentesque parturient sapien arcu ipsum. Porta tortor malesuada habitasse non augue accumsan nisl, libero sed. Et integer eleifend iaculis dolor justo fermentum tortor non. Suspendisse sem vel ligula leo. Et, ac ipsum in adipiscing pulvinar blandit ornare',
            name: 'Valdimir Kostovij',
            position: 'CEO',
            location: 'TechSparks LLC'
        },
        {
            _id:3,
            image:'images/tm3.jpg',
            title:'Engaging, Challenging, fun and most of all instructional',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim egestas pellentesque parturient sapien arcu ipsum. Porta tortor malesuada habitasse non augue accumsan nisl, libero sed. Et integer eleifend iaculis dolor justo fermentum tortor non. Suspendisse sem vel ligula leo. Et, ac ipsum in adipiscing pulvinar blandit ornare',
            name: 'Michelle Yeoh',
            position: 'CEO',
            location: 'GeoNex Fintech'
        },
        {
            _id:4,
            image:'images/tm3.jpg',
            title:'Engaging, Challenging, fun and most of all instructional',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis dignissim egestas pellentesque parturient sapien arcu ipsum. Porta tortor malesuada habitasse non augue accumsan nisl, libero sed. Et integer eleifend iaculis dolor justo fermentum tortor non. Suspendisse sem vel ligula leo. Et, ac ipsum in adipiscing pulvinar blandit ornare',
            name: 'Michelle Yeoh',
            position: 'CEO',
            location: 'GeoNex Fintech'
        }
      ]

      const courseData = [
        {
            _id:1,
            button:'LEARN MORE',
            title:'Support growth with on-demand courses',
            desctiption:'Grow your people and your business by offering top-rated courses on the topics they need to stay current, develop, and innovate.',
        },
        {
            _id:2,
            button:'VIEW OUR COURSES',
            title:'Boost employee engagement',
            desctiption:'Build a culture of learning at your organization with an extensive collection of in-demand courses that are ready when they are.',
        },
        {
            _id:3,
            button:'LEARN MORE',
            title:'Build next-level programs',
            desctiption:'We’ll work with you to develop and implement plans to improve skills development and employee retention.',
        },
      ]

      const teamData = [
        {
            _id:1,
            image:'images/unlock-img1.jpg',
            title:"Online Live programs",
            course:['ACCA Qualification - Association of Chartered Certified Accountants','ACCA DipIFRS - online live training','Certification in Financial Modelling & Valuation Online Live'],
        },
        {
            _id:2,
            image:'images/unlock-img2.jpg',
            title:'e-Learning Programs',
            course:['ACCA Qualification - Association of Chartered Certified Accountants','ACCA DipIFRS - online live training','Certification in Financial Modelling & Valuation Online Live'],
        },
        {
            _id:3,
            image:'images/unlock-img3.jpg',
            title:'Classroom Program',
            course:['ACCA Qualification - Association of Chartered Certified Accountants','ACCA DipIFRS - online live training','Certification in Financial Modelling & Valuation Online Live'],
        },
        {
            _id:4,
            image:'images/unlock-img4.jpg',
            title:'University Alliances',
            course:['Master of Science (MSc)(Finance and Analytics)','PG program in Finance & Accounting'],
        },
      ]

      const advantageSecData = [
        {
            _id:1,
            image:'images/training-icon1.png',
            title:'High-engagement, outcome-centric learning',
            description:"Live virtual classrooms, mentoring sessions, hands-on projects, and interactive labs drive learner outcomes"
        },
        {
            _id:2,
            image:'images/training-icon2.png',
            title:'Customizable solutions that match your requirements',
            description:"From learning portal integration to contextualized learning paths, we're committed to your success"
        },
        {
            _id:3,
            image:'images/training-icon1.png',
            title:'Latest curriculum from industry experts and universities',
            description:"Programs co-developed with the world's top practitioners and academics and aligned to leading certification bodies"
        }
      ]

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

    return (
        <>
            <Banner />
            <Companies companiesData={companiesData}/>
            <ProvidesOffer />
            <Courses courseData={courseData} />
            <Team teamData={teamData} />
            <Advantage advantageSecData={advantageSecData} />
            <Award awardSecData={awardSecData} />
            <GetConnect />
            <Testimonials testimonialsData={testimonialsData}/>
            <NewsLetterCTA/>
        </>
    )
}

export default CorporateTraining