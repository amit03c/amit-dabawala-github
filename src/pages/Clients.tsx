import React, { useEffect, useState } from 'react'
import { apicall } from '../api/api'
import Banner from '../components/pagesections/Clients/Banner'
import GetConnect from '../components/pagesections/Clients/GetConnect'
import Partners from '../components/pagesections/Clients/Partners'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'

const Clients = () => {

    const partnersdata = [
        {
            _id: 1,
            image: 'images/google-logo-img.png',
        },
        {
            _id: 2,
            image: 'images/linkdin-logo.png',
        },
        {
            _id: 3,
            image: 'images/lattice.png',
        },
        {
            _id: 4,
            image: 'images/newfront-insurance-logo.png',
        },
        {
            _id: 5,
            image: 'images/paystack-logo.png',
        },
        {
            _id: 6,
            image: 'images/hubspot-logo.png',
        },
        {
            _id: 7,
            image: 'images/linkdin-logo.png',
        },
        {
            _id: 8,
            image: 'images/google-logo-img.png',
        },
        {
            _id: 9,
            image: 'images/linkdin-logo.png',
        },
        {
            _id: 10,
            image: 'images/newfront-insurance-logo.png',
        },
        {
            _id: 11,
            image: 'images/google-logo-img.png',
        },
        {
            _id: 12,
            image: 'images/paystack-logo.png',
        },
        {
            _id: 13,
            image: 'images/google-logo-img.png',
        },
        {
            _id: 14,
            image: 'images/linkdin-logo.png',
        },
        {
            _id: 15,
            image: 'images/lattice.png',
        },
        {
            _id: 16,
            image: 'images/newfront-insurance-logo.png',
        },
        {
            _id: 17,
            image: 'images/paystack-logo.png',
        },
        {
            _id: 18,
            image: 'images/hubspot-logo.png',
        },
        {
            _id: 19,
            image: 'images/linkdin-logo.png',
        },
        {
            _id: 20,
            image: 'images/google-logo-img.png',
        },
        {
            _id: 21,
            image: 'images/linkdin-logo.png',
        },
        {
            _id: 22,
            image: 'images/newfront-insurance-logo.png',
        },
        {
            _id: 23,
            image: 'images/google-logo-img.png',
        },
        {
            _id: 24,
            image: 'images/paystack-logo.png',
        },
    ]
const [data,setData]= useState([])

useEffect(()=>{
    apicall("get","/gt/index.php/wp-json/clients/list").then(res=>setData(res.data))
},[])

    return (
        <div>
            <Banner />
            <div className="clients_page  sec-spacing light-bg">
                <Partners partnersData={data} />
                <GetConnect />
            </div>
            <NewsLetterCTA />
        </div>
    )
}

export default Clients