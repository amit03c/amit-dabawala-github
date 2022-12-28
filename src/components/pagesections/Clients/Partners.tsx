import React from 'react'
import PartnersItem from '../../items/PartnersItem'
import {clientType} from "../../../type/type"
type AppProps = {
    partnersData: clientType []
}

const Partners = ({ partnersData }: AppProps) => {
    // console.log(partnersData)
    return (
        <>
            <div className="container customwid">
                <div className="our_clients">
                    <div className="row border-bottom">
                        {
                            partnersData.map((row) => <PartnersItem key={row.client_id} image={row.featured_image} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners