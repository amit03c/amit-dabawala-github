import React from 'react'

type AppProps = {
    name: string,
    position: string,
    image: string,
    email: string,
    phone: string
}

const PersonInformationItem = ({ name, position, image, email, phone }: AppProps) => {
    return (
        <>
            <div className="d-flex p-5">
                <div className="flex-shrink-0">
                    <img src={image} className="contect-info_img shadow" alt=" " />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h5 className="mb-0">{name}</h5>
                    <h6 className="purple-color mb-3"> {position}</h6>
                    <p> M: {phone}</p>
                    <p>E: {email}</p>
                </div>
            </div>
        </>
    )
}

export default PersonInformationItem