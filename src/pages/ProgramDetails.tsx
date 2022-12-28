import React, { useEffect, useState } from "react";
import Overview from "../components/pagesections/ProgramDetails/Overview";
import Banner from "../components/pagesections/ProgramDetails/Banner";
import Batches from "../components/pagesections/ProgramDetails/Batches";
import Curriculum from "../components/pagesections/ProgramDetails/Curriculum";
import Enroll from "../components/pagesections/ProgramDetails/Enroll";
import Finance from "../components/pagesections/ProgramDetails/Finance";
import Skills from "../components/pagesections/ProgramDetails/Skills";
import Testimonials from "../components/pagesections/ProgramDetails/Testimonials";
import Videos from "../components/pagesections/ProgramDetails/Videos";
import { useParams } from "react-router-dom";
import { programDetails } from "../actions/program";

const ProgramDetails = () => {
  const [productDetails,setProductDetails]=useState()
  const {id}=useParams()
 
  

  
  useEffect(()=>{
    

    const product=async()=>{
      
      try{
            
          let productData=await programDetails(id);

          if(productData){
            setProductDetails(productData)
          }

      }catch(e){

      }
    }

    
   product();

  },[])

  const programData = [
    {
      title:"Finance for Non Finance Online Live",
      description:"Our fast-changing digital world needs professionals in finance & accounts who can build, innovate, support the organisations with their knowledge and skillset and work with highest professional and ethical standards.",
      date:"20 Dec, 2022",
      duration:"3 Months",
      mode:"Online Program",
      contactDetails:[
        {_id:1, title:"Pradeep Pandey", text:"Director", icon:"fas fa-user"},
        {_id:2, title:"Email Address", text:"pradeep.pandey@in.gt.com", icon:"far fa-envelope-open"},
        {_id:3, title:"Contact No.", text:"+91 78380 00185", icon:"fas fa-phone-volume"},
      ],
      videoLink:"https://www.youtube.com/watch?v=20Zg_6mFX8g",
      videoThumb:"images/video-tmb.jpg",
      brochureLink:"#",
      overallRating:"4.8",
      totalRating:"393",
      noOfEnrolled:"2309",
      enquiryLink:"#",
      courseFee:19995,
      emiMonthly:6665,
    }
  ]

  const batchData = [
    {
      _id:1, 
      tag:"sold",
      date:"10th Dec, 2022",
      isWeekend:true,
      days:"SAT & SUN (6 Weeks)",
      time:"08:30 PM to 11:30 PM (IST)",
      isDisabled: true
    },
    {
      _id:2, 
      tag:"fillingFast",
      date:"17th Dec, 2022",
      isWeekend:true,
      days:"SAT & SUN (6 Weeks)",
      time:"08:30 PM to 11:30 PM (IST)",
      isDisabled: false
    },
    {
      _id:3, 
      tag:"",
      date:"18th Dec, 2022",
      isWeekend:true,
      days:"SAT & SUN (6 Weeks)",
      time:"08:30 PM to 11:30 PM (IST)",
      isDisabled: false
    },
    {
      _id:4, 
      tag:"",
      date:"24th Dec, 2022",
      isWeekend:true,
      days:"SAT & SUN (6 Weeks)",
      time:"08:30 PM to 11:30 PM (IST)",
      isDisabled: false
    },
    {
      _id:5, 
      tag:"",
      date:"25th Dec, 2022",
      isWeekend:true,
      days:"SAT & SUN (6 Weeks)",
      time:"08:30 PM to 11:30 PM (IST)",
      isDisabled: false
    },
  ]

  const faqData = [
    {
      _id:1,
      title:"What will you learn as a part of this Finance course course?",
      text:"Lorem ipsum dolor sit amet consectetur. At faucibus non elementum lacus id volutpat nibh. Arcu euismod facilisi et varius eu ut id. Nunc ullamcorper faucibus aliquet nisl elementum. Massa et ultricies arcu facilisis phasellus eu vulputate. Sed in id nibh ultrices interdum. Ac nisi praesent vitae donec sit nec.",
    },
    {
      _id:2,
      title:"Who should go for this Finance course?",
      text:"Lorem ipsum dolor sit amet consectetur. At faucibus non elementum lacus id volutpat nibh. Arcu euismod facilisi et varius eu ut id. Nunc ullamcorper faucibus aliquet nisl elementum. Massa et ultricies arcu facilisis phasellus eu vulputate. Sed in id nibh ultrices interdum. Ac nisi praesent vitae donec sit nec.",
    },
    {
      _id:3,
      title:"What are the pre-requisites for this Finance Certification Course?",
      text:"Lorem ipsum dolor sit amet consectetur. At faucibus non elementum lacus id volutpat nibh. Arcu euismod facilisi et varius eu ut id. Nunc ullamcorper faucibus aliquet nisl elementum. Massa et ultricies arcu facilisis phasellus eu vulputate. Sed in id nibh ultrices interdum. Ac nisi praesent vitae donec sit nec.",
    }
  ]

  const enrollData = [
    {
      _id:1,
      title:"Some Heading Here",
      text:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
      image:"images/enroll-1.png"
    },
    {
      _id:2,
      title:"Some Heading Here",
      text:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
      image:"images/enroll-2.png"
    },
    {
      _id:3,
      title:"Some Heading Here",
      text:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
      image:"images/enroll-3.png"
    },
  ]
  
  const skillData = [
    {
      _id:1,
      title:"Skill title here",
      text:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
    },
    {
      _id:2,
      title:"Skill title here",
      text:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
    },
    {
      _id:3,
      title:"Skill title here",
      text:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
    },
    {
      _id:4,
      title:"Skill title here",
      text:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
    },
  ]

  const tagsData = [
    { _id:1, title:"Accounts Manager" },
    { _id:2, title:"Accountant" },
    { _id:3, title:"Product Manager" },
    { _id:4, title:"Sales Head" },
    { _id:5, title:"Business Analyst" },
  ]

  const curriculumData = [
    {
      _id:1,
      title:"Overview of Finance Basics",
      topics:[
        {
          _id:'1-1',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'1-2',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
        {
          _id:'1-3',
          data:"Linking multiple sheets and files etc."
        },
        {
          _id:'1-4',
          data:"Learning Custom formatting peculiar to creating financial models"
        },
        {
          _id:'1-5',
          data:"Learning referencing (usage of $) and its significance in the financial model"
        },
        {
          _id:'1-6',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'1-7',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
      ],
    },
    {
      _id:2,
      title:"The Syndication Process",
      topics:[
        {
          _id:'2-1',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'2-2',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
        {
          _id:'2-3',
          data:"Linking multiple sheets and files etc."
        },
        {
          _id:'2-4',
          data:"Learning Custom formatting peculiar to creating financial models"
        },
      ],
    },
    {
      _id:3,
      title:"Technical Aspects of Loan Agreements",
      topics:[
        {
          _id:'3-1',
          data:"Learning referencing (usage of $) and its significance in the financial model"
        },
        {
          _id:'3-2',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'3-3',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
      ],
    },
    {
      _id:4,
      title:"Risk Analysis and Risk Allocation",
      topics:[
        {
          _id:'4-1',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'4-2',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
        {
          _id:'4-3',
          data:"Linking multiple sheets and files etc."
        },
        {
          _id:'4-4',
          data:"Learning Custom formatting peculiar to creating financial models"
        },
        {
          _id:'4-5',
          data:"Learning referencing (usage of $) and its significance in the financial model"
        },
      ],
    },
    {
      _id:5,
      title:"Capital Budgeting",
      topics:[
        {
          _id:'5-1',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
        {
          _id:'5-2',
          data:"Linking multiple sheets and files etc."
        },
        {
          _id:'5-3',
          data:"Learning Custom formatting peculiar to creating financial models"
        },
        {
          _id:'5-4',
          data:"Learning referencing (usage of $) and its significance in the financial model"
        },
        {
          _id:'5-5',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'5-6',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
      ],
    },
    {
      _id:6,
      title:"Financial Sustainability",
      topics:[
        {
          _id:'6-1',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'6-2',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
        {
          _id:'6-3',
          data:"Linking multiple sheets and files etc."
        },
        {
          _id:'6-4',
          data:"Learning Custom formatting peculiar to creating financial models"
        },
        {
          _id:'6-5',
          data:"Learning referencing (usage of $) and its significance in the financial model"
        },
        {
          _id:'6-6',
          data:"Understanding and Creating a Financial Model Template"
        },
        {
          _id:'6-7',
          data:"Refreshing important Excel functions to be used in financial modelling and valuation"
        },
        {
          _id:'6-8',
          data:"Learning Custom formatting peculiar to creating financial models"
        },
      ],
    },
  ]

  const testimonialData = [
    {
      _id:1,
      styleType:2,
      title:"Very good support and helped me understand the issue and fix to this.",
      comments:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque. Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
      user:"Sandeep Chawla",
      location:"New Delhi",
      image:"images/tm1.jpg"
    },
    {
      _id:2,
      styleType:2,
      title:"Very good support and helped me understand the issue and fix to this.",
      comments:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque. Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
      user:"Manish Gupta",
      location:"Gurugram",
      image:"images/tm2.jpg"
    },
    {
      _id:3,
      styleType:2,
      title:"Very good support and helped me understand the issue and fix to this.",
      comments:"Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque. Lorem ipsum dolor sit amet consectetur. Augue id cursus sem lectus iaculis nunc. Scelerisque leo ut mattis pellentesque",
      user:"Savannah Venktesh",
      location:"Bangalore",
      image:"images/tm3.jpg"
    },
  ]

  const videoData = [
    {
      _id:1, 
      title:"Very good support and helped me understand the issue and fix to this.",
      videoLink:"https://www.youtube.com/embed/icnfuRcoAHA",
      videoThumb:"images/yt1.png",
      styleType:2,
    },
    {
      _id:2, 
      title:"Very good support and helped me understand the issue and fix to this.",
      videoLink:"https://www.youtube.com/embed/Pv3ngYICO9w",
      videoThumb:"images/yt2.png",
      styleType:2,
    },
    {
      _id:3, 
      title:"Very good support and helped me understand the issue and fix to this.",
      videoLink:"https://www.youtube.com/embed/5zOfWn-bUOg",
      videoThumb:"images/yt3.png",
      styleType:2,
    }
  ]

  return (
    <> {

      productDetails?<Banner programData={productDetails}/>:<></>
    }
      
      <Batches batchData={batchData} programData={programData}/>
      <Overview faqData={faqData}/>
      <Enroll enrollData={enrollData}/>
      <Skills skillData={skillData}/>
      <Finance tagsData={tagsData}/>
      <Curriculum curriculumData={curriculumData}/>
      <Testimonials testimonialData={testimonialData}/>
      <Videos videoData={videoData}/>
    </>
  );
};

export default ProgramDetails;
