import React from 'react'

type AppProps = {
    image: string,
    name: string,
    position: string,
    icon: string
}

const LeaderShipItem = ({ image, name, position, icon }: AppProps) => {
    return (
        <>
            <div className="col-md-4">
                <div className="team_Leader-block text-center">
                    <figure className="position-relative"> <img src={image} className="img-fluid border rounded-4" alt='team_photo' />
                        <div className="linkdin position-absolute"><a href="#"><i className={icon}></i> </a></div>
                    </figure>
                    <div className="team_footer-txt mt-4">
                        <h5 className="fs16 fw500">{name}</h5>
                        <h6 className="purple-color fs13 fw500">{position}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaderShipItem