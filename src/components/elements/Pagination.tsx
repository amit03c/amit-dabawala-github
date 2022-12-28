import React from 'react'

const Pagination = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 pt-3 text-center">
                    <div className="pagination-wrapper d-inline-block">
                        <div className="section-pagination">
                            <div aria-label="Page navigation">
                                <ul className="pagination flex-wrap justify-content-center mt-md-5 mt-3">
                                    <li className="page-item"> <a className="page-link page-link-first" href="#"> Prev</a> </li>
                                    <li className="page-item"><a className="page-link page-link-active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                    <li className="page-item"> <a className="page-link page-link-last" href="#">Next </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagination