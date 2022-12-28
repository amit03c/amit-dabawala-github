import React from 'react'
import PersonInformationItem from '../../items/PersonInformationItem'

type AppProps = {
    personInfo: any[]
}

const PersonInformation = ({ personInfo }: AppProps) => {
    return (
        <>
            <div className="row">
                {personInfo.map((person) => (
                    <div  key={person._id} className="col-md-4 border-end">
                        <PersonInformationItem name={person.name} image={person.image} position={person.position} email={person.email} phone={person.phone} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default PersonInformation