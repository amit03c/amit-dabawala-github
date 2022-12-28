import React from 'react'
import LeadershipNewsItem from '../../items/LeadershipNewsItem'
import Pagination from '../../elements/Pagination'

type AppProps = {
    leadershipNewsData: any[]
}

const LeadershipNews = ({ leadershipNewsData }: AppProps) => {
    return (
        <>
            <section className="Thought_Leadership sec-spacing light-bg">
                <div className="container">
                    <div className="row">
                        {
                            leadershipNewsData.map((news) => (
                                <LeadershipNewsItem key={news._id} title={news.title} image={news.image} description={news.description} />
                            ))
                        }
                    </div>
                    <Pagination/>
                </div>
            </section>
        </>
    )
}

export default LeadershipNews