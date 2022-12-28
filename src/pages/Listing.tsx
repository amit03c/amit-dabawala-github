import Banner from "../components/pagesections/Listing/Banner";
import Faq from "../components/pagesections/Listing/Faq";
import Programs from "../components/pagesections/Listing/Programs";
import NewsLetterCTA from "../components/pagesections/Shared/NewsLetterCTA";
import { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config/host';
import {loadProgram} from '../actions/program'



const Listing = () => {
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
 
  const programData = programe

  const faqData = [
    {
      _id:1,
      title:"What are the top finance courses and certifications?",
      text:"For those who are considering a career in finance, some of the most popular finance certifications and courses Chartered Financial Analyst (CFA) certification, Certified Public Accountant (CPA) certification, Chartered Alternative Investment Analyst (CAIA) designation, Certified Financial Planner (CFP) designation, Financial Risk Manager (FRM) certification, Financial Modeling & Valuation Analyst (FMVA) certification. Most of these courses help in starting a full-fledged career in finance and also play a role in career advancement.",
    },
    {
      _id:2,
      title:"What are the prerequisites to start a career in finance?",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!",
    },
    {
      _id:3,
      title:"What is the basic qualification required for taking up finance courses?",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!",
    },
    {
      _id:4,
      title:"What are the different career paths available for finance aspirants?",
      text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!",
    }
  ]

  return (
    <> 
      <Banner/>
      <Programs data={programData}/>
      <Faq data={faqData}/>
      <NewsLetterCTA/>
    </>
  );
};

export default Listing;
