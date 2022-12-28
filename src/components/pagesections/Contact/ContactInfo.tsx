import React from 'react'
import ContactInfoItem from '../../items/ContactInfoItem'

type AppProps = {
    contactInfoSocial: any[],
    contactInfoData: any[]
}

const ContactInfo = ({ contactInfoData, contactInfoSocial }: AppProps) => {

    return (
        <>
            <div className="contact-info-right-side h-100 position-relative">
                <p className="h6 fw600 text-uppercase mb-5 text-white">Contact Information</p>
                {contactInfoData.map((data) => (
                    <ContactInfoItem key={data._id} icons={data.icons} info={data.info} infoType={data.infoType} type={data.type} />
                ))}
                <div className="social-block-ft mt-4">
                    <h5 className="fs15 text-white mb-3"> Follow us on</h5>
                    <ul>
                        {
                            contactInfoSocial.map((icon) => <li key={icon._id}><a href="/" target="_blank"><i className={icon.icons}></i></a></li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ContactInfo