import React from 'react'

type AppProps = {
    icons: string,
    info: string,
    infoType: string,
    type: string,
}

const ContactInfoItem = ({ icons, info, infoType, type }: AppProps) => {
    return (
        <div>
            <div className="contact-info-block">
                <span className="icon flex-shrink-0 text-prime me-4"><i className={icons}></i></span>
                <div className="info-content flex-grow-1">
                    <h6 className="fs15 text-white">{infoType}</h6>
                    {type === 'mail' &&
                        <p className="fs13"><a href={`mailto:${info}`} target="_blank">{info}</a></p>
                    }
                    {type === 'phone' &&
                        <p className="fs13"><a href={`tel:${info}`} target="_blank">{info}</a></p>
                    }
                    {type === 'location' &&
                        <p className="fs13">{info}</p>
                    }
                    {type === 'website' &&
                        <p className="fs13"><a href={`https://${info}`} target="_blank">{info}</a></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactInfoItem