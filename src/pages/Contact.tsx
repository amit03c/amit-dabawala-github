import React from 'react';
import Banner from '../components/pagesections/Contact/Banner';
import Content from '../components/pagesections/Contact/Content';
import Locations from '../components/pagesections/Contact/Locations';

const Contact = () => {

  const contactInfoData = [
    {
      _id:1,
      icons:'fa-solid fa-envelope',
      info:'contact@gtacademy.in',
      infoType:'Contact Email ID',
      type:'mail'
    },
    {
      _id:2,
      icons:'fa-solid fa-phone',
      info:'012 4462 8000',
      infoType:'Contact Number',
      type:'phone'
    },
    {
      _id:3,
      icons:'fa-solid fa-location-dot',
      info:'DLF Square, 21st, Jacaranda Marg, DLF Phase 2, Gurugram, Haryana 122002',
      infoType:'Location',
      type:'location'
    },
    {
      _id:4,
      icons:'fa-solid fa-globe',
      info:'www.gtacademy.in',
      infoType:'Website',
      type:'website'
    }
  ]

  const contactInfoSocial= [
    {
      _id:1,
      icons:'fa-brands fa-facebook-f'
    },
    {
      _id:2,
      icons:'fa-brands fa-twitter'
    },
    {
      _id:3,
      icons:'fa-brands fa-youtube'
    },
    {
      _id:4,
      icons:'fa-brands fa-linkedin'
    },
  ]

  const personInfo = [
    {
      _id:1,
      name: 'Kapil Arora',
      position: 'Director',
      image:'images/kapil_arora.jpg',
      email: 'kapil.arora@in.gt.com',
      phone: '+91 965 419 0274'
    },
    {
      _id:2,
      name: 'Pradeep Pandey',
      position: 'Director',
      image:'images/pradeep-pandey.jpg',
      email: 'pradeep.pandey@in.gt.com',
      phone: '78380 00185'
    },
    {
      _id:3,
      name: 'ROHIT GUPTA',
      position: 'Director',
      image:'images/rohit_gupta.jpg',
      email: 'rohit.gupta1@in.gt.com',
      phone: '+91 98913 95363'
    }
  ]

  return (
    <>
      <Banner/>
      <Content contactData={contactInfoData} socialIcons={contactInfoSocial} personInfo={personInfo} />
      <Locations/>
    </>
  );
};

export default Contact;