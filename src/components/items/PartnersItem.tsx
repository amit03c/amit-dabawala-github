import React from 'react'

type AppProps={
    image: string
}

const PartnersItem = ({image}:AppProps) => {
    return (
        <>
            <div className="col-md-3">
                <figure><img src={image} alt="" /></figure>
            </div>
        </>
    )
}

export default PartnersItem