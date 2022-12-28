import React from 'react'
import LeaderShipItem from '../../items/LeaderShipItem'

type AppProps = {
    leaderShipData: any[]
}

const LeadershipTeam = ({ leaderShipData }: AppProps) => {
    return (
        <>
            <section className="Leadership_Team sec-spacing dark-bg">
                <div className="container">
                    <h4 className="all_heading text-center"> Leadership Team</h4>

                    <div className="Leadership_Team_sec">
                        <div className="row">
                            <div className="col-md-8 col-12 mx-auto">
                                <div className="row">
                                    {
                                        leaderShipData.map((team) => (
                                            <LeaderShipItem key={team._id} image={team.image} name={team.name} position={team.position} icon={team.icon} />

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="button-mdl text-center"> <a className="btn btn-outline-dark btn-lg mt-3" href="#"> VIEW ALL TEAM MEMBERS</a> </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LeadershipTeam