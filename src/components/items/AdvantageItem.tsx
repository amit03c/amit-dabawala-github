import React from 'react'
type AppProps = {
    image:string,
    title:string,
    description:string,
}
const AdvantageItem = ({image,title,description}:AppProps) => {
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="adv-block mx-auto"> <span className="adv-icon mx-auto mb-4"> <img src={image} alt="icons" /> </span>
                <div className="adv-title text-center ">{title}</div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default AdvantageItem