import React from 'react'
import FaqItem from './FaqItem'

type AppProps = {
    index: number,
    title:string,
    data:any[]
} 

const FaqSecItem = ({index,title,data}:AppProps) => {
    return (
        <>
            <div className="faq-sec-pg">
                <h3 className="faq-headings"> <span className="fq-num">{index}</span> {title}</h3>
                <div className="faq-container">
                    {
                        data.map((sec,index)=><FaqItem key={index} title={sec.heading} text={sec.details}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default FaqSecItem