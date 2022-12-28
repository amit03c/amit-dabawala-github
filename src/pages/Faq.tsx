import React from 'react'
import Banner from '../components/pagesections/Faq/Banner'
import FaqSec from '../components/pagesections/Faq/FaqSec'
import NewsLetterCTA from '../components/pagesections/Shared/NewsLetterCTA'

const Faq = () => {

    const faqData = [
        {
            _id:1,
            title:'Courses',
            dropdown:[
                {
                    heading:'What are the top finance courses and certifications?',
                    details:'For those who are considering a career in finance, some of the most popular finance certifications and courses Chartered Financial Analyst (CFA) certification, Certified Public Accountant (CPA) certification, Chartered Alternative Investment Analyst (CAIA) designation, Certified Financial Planner (CFP) designation, Financial Risk Manager (FRM) certification, Financial Modeling & Valuation Analyst (FMVA) certification. Most of these courses help in starting a full-fledged career in finance and also play a role in career advancement.'
                },
                {
                    heading:'What are the prerequisites to start a career in finance?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What is the basic qualification required for taking up finance courses?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What are the different career paths available for finance aspirants?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },

            ]
        },
        {
            _id:2,
            title:'Enrollment & Admissions',
            dropdown:[
                {
                    heading:'What are the prerequisites to start a career in finance?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What is the basic qualification required for taking up finance courses?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What are the different career paths available for finance aspirants?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
            ]
        },
        {
            _id:3,
            title:'Faculty & Teachers',
            dropdown:[
                {
                    heading:'What are the prerequisites to start a career in finance?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What is the basic qualification required for taking up finance courses?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What are the different career paths available for finance aspirants?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What are the different career paths available for finance aspirants?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
            ]
        },
        {
            _id:4,
            title:'Modes of Learning',
            dropdown:[
                {
                    heading:'What are the prerequisites to start a career in finance?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What is the basic qualification required for taking up finance courses?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What are the different career paths available for finance aspirants?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
            ]
        },
        {
            _id:5,
            title:'Payments & Fee Structure',
            dropdown:[
                {
                    heading:'What are the prerequisites to start a career in finance?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What is the basic qualification required for taking up finance courses?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                },
                {
                    heading:'What are the different career paths available for finance aspirants?',
                    details:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt excepturi voluptatum tempore illum. Sed, porro qui dolores magnam ipsa veritatis hic repellat aperiam est ab ratione eius officia quis expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt omnis consectetur perspiciatis, ipsa. Excepturi, eum alias, pariatur fugiat quaerat eaque asperiores mollitia placeat obcaecati, non veritatis quam sequi repudiandae quod. Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Perferendis, ab adipisci est iure impedit quae, atque ipsa porro aspernatur sed quasi ullam ex totam quod optio rem ea velit accusamus!'
                }
            ]
        },
    ]

    return (
        <>
            <Banner/>
            <FaqSec faqData={faqData}/>
            <NewsLetterCTA/>         
        </>
    )
}

export default Faq