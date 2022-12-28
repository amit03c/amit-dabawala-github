import React from 'react'

type AppProps = {
    image: string,
    title:string,
    quote:string,
    name:string,
    position: string,
    location:string
} 

const TestimonialsCard = ({image,title,quote, name, position,location}:AppProps) => {
    return (
        <>
            <div className="corporate_test-block border rounded bg-white mb-2">
                <figure> <img src="images/double-quotes.png" alt="..." className="w-auto" /> </figure>
                <div className="corporate_test_text">
                    <h3>{title}</h3>
                    <p>{quote}</p>
                </div>
                <div className="d-flex mt-md-5 mt-3 align-items-center">
                    <div className="flex-shrink-0"> <img src={image} alt="team" className="corporate_test-img" /> </div>
                    <div className="flex-grow-1 ms-3">
                        <div className="corporate_test_info">
                            <h6 className="mb-0">{name}</h6>
                            <p className="mb-0"> <strong>{position},</strong> {location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialsCard