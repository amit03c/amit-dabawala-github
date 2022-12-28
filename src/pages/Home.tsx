import { useEffect, useState } from 'react';
import AboutUs from '../components/pagesections/Home/AboutUs';
import Banner from '../components/pagesections/Home/Banner';
import Companies from '../components/pagesections/Home/Companies';
import Programes from '../components/pagesections/Home/Programes';
import Testimonial from '../components/pagesections/Home/Testimonial';
import Videos from '../components/pagesections/Home/Videos';
import Vision from '../components/pagesections/Home/Vision';
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA';
import { get_test_data } from '../actions/testimonials'
import axios from 'axios';
import BASE_URL from '../config/host';
import {loadProgram} from '../actions/program'

const Home = () => {
  const [programe, setPrograme] = useState([]);

  useEffect(()=>{
    const ProgramList =async () => {
      try {
        let programData=await loadProgram();
        
        setPrograme(programData);
       } catch (error) {
         
       }
    }

    ProgramList()
     
  },[])

  const   homeBannerData = [
    {
      _id:1, 
      imageDesktop:'images/banner-1-sm.jpg', 
      imageMobile:'images/mobile-banner-1.jpg', 
      title:'ACCA Qualification - Association of Chartered Certified Accountants', 
      text:'ACCA is one of the qualification which is constantly anticipating and adapting the challenges for the professionals of tomorrow.', 
      link:'/program-detail', 
      linkText:'VIEW PROGRAM DETAILS'
    },
    {
      _id:2, 
      imageDesktop:'images/banner-2-sm.jpg', 
      imageMobile:'images/mobile-banner-1.jpg', 
      title:'Certificate in Cybersecurity Fundamentals E Learning', 
      text:'Evaluating the performance of your business continuity, IT disaster recovery and crisis management arrangements', 
      link:'/program-detail', 
      linkText:'VIEW PROGRAM DETAILS'
    },
    {
      _id:3, 
      imageDesktop:'images/banner-3-sm.jpg', 
      imageMobile:'images/mobile-banner-1.jpg', 
      title:'Certification in Business Intelligence using Power BI & Tableau E-Learning', 
      text:'Learning & Development Academy by Grant Thornton in India is pleased to launch an e-learning training program on Certificate in Business Intelligence using Power BI & Tableau.', 
      link:'/program-detail', 
      linkText:'VIEW PROGRAM DETAILS'
    },
  ]

  const homeCompaniesData = [
    {_id:1,image:'images/google-logo.png', name:'Google'},
    {_id:2,image:'images/lattice.png', name:'Lattice'},
    {_id:3,image:'images/linkdin-logo.png', name:'Linkdin'},
    {_id:4,image:'images/hubspot-logo.png', name:'Hubspot'},
    {_id:5,image:'images/paystack-logo.png', name:'Paystack'},
    {_id:6,image:'images/newfront-insurance-logo.png', name:'Newfront Insurance'},
    {_id:7,image:'images/linkdin-logo.png', name:'Linkdin'},
    {_id:8,image:'images/hubspot-logo.png', name:'Hubspot'},
  ]

  const programData = programe;

  const videoData = [
    {
      _id:1, 
      title:"KDGT Invitational Press Conference Highlights",
      text:"Let's 'Go Beyond For Golf with Kapil Dev - Grant Thornton Invitational, a unique pro-golf tournament, presented by #DLF and sanctioned by PGTI...",
      videoLink:"https://www.youtube.com/embed/icnfuRcoAHA",
      styleType:1
    },
    {
      _id:2, 
      title:"Cyber Vigilance Centre | Dinesh Anand",
      text:"While technological transformation continues to grow, the quantum of cyber-attacks is also growing at an unprecedented rate...",
      videoLink:"https://www.youtube.com/embed/Pv3ngYICO9w",
      styleType:1
    },
    {
      _id:3, 
      title:"Grant Thornton dGTL | Amplifying Human Connection",
      text:"Today, we live in a digital world. A world that is characterised by volatility, uncertainty and ambiguity...",
      videoLink:"https://www.youtube.com/embed/5zOfWn-bUOg",
      styleType:1
    }
  ]

  const testimonialData = [
    {
      _id:1, 
      styleType:1,
      name:'Arindam Mandal', 
      company:'Bridgetree India', 
      designation:'Director-Finance', 
      comments:'It was very informative, very well presented, plus enjoyable. I have learned so much from this workshop that will assist me in my workplace. I came away from the workshop...'
    },
    {
      _id:2, 
      styleType:1,
      name:'Arindam Mandal', 
      company:'Bridgetree India', 
      designation:'Director-Finance', 
      comments:'It was very informative, very well presented, plus enjoyable. I have learned so much from this workshop that will assist me in my workplace. I came away from the workshop...'
    },
  ]

  const [companyList, setCompanyList] = useState<Array<any>>([]);
  useEffect(()=>{
    get_test_data("/clients/list", "get").then((res)=> setCompanyList(res.data))
    }, [])

    console.log("listing",companyList)

  return (
    <>
      <Banner data={homeBannerData}/>
      <Companies data={companyList}/>
      <Programes data={programData}/>
      <AboutUs/>
      <Videos data={videoData}/>
      <Vision/>
      
      <div className="modal fade" id="modalVideo" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="modalVideoLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0 position-relative">
              <button type="button" className="btn-close modal-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
              <iframe id="videoUrl" className="w-100" width="560" height="460" src="https://www.youtube.com/embed/oPS5ol_ljmg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <Testimonial data={testimonialData}/>
      <NewsLetterCTA/>
    </>
  );
};

export default Home;