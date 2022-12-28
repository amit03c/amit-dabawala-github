import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import BatchItem from '../../items/BatchItem';

type AppProps = {
  batchData: any[];
  programData: any[];
};

const Batches = ({batchData, programData} : AppProps) => {
  return (
    <>
      <section className="enroll-feat-section section-spacing-tb50 section-content bg-light-purple-1">
        <div className="container customwid">
          <div className="text-center section-heading-lg mb-5">
            <h4>Find a Flexible Batch for this Program</h4>
          </div>

          <div className="card card-style shadow-sm mb-4">
            <div className="row gx-0">
              <div className="col-sm-8">
                <div className="course-dates-list position-relative">
                  <div className="course-date-label row gx-0 align-items-center">
                    <div className="col-sm-4">
                      <span className="date-label fs13">Date</span>
                    </div>
                    <div className="col-sm-4">
                      <span className="date-label fs13">Days</span>
                    </div>
                    <div className="col-sm-4">
                      <span className="date-label fs13">Timing</span>
                    </div>
                  </div>
                  {batchData.map((item) =>(
                    <BatchItem 
                      key={item._id} 
                      id={item._id}
                      tag={item.tag}
                      date={item.date} 
                      isWeekend={item.isWeekend} 
                      days={item.days} 
                      time={item.time} 
                      isDisabled={item.isDisabled}
                    />
                  ))}
                </div>
              </div>
              <div className="col-sm-4 my-1">
                <div className="course-fee-details text-center bg-light-purple-1 py-5">
                  <h3 className="fw600 mb-1">Rs. {programData[0].courseFee}.<small className="text-muted fw400">00</small></h3>
                  <p className="fs15 text-muted mb-0">Starts at Rs. {programData[0].emiMonthly} / month</p>
                  <div className="fs12 mb-3">
                    With No Cost EMI
                    <button className="fw500 text-decoration-underline border-0 bg-transparent" type="button">View More</button>
                  </div>
                  <button className="btn btn-success btn-lg px-5 mb-2" type="button">ENROLL NOW</button>
                  <button className="btn btn-dark btn-lg px-5 mb-3" type="button">ADD TO CART</button>
                  <div className="clearfix"></div>
                  <Link className="fw500 text-decoration-underline fs12 text-muted" to="#">Secure Transaction</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Batches;