import React from 'react';
import Image from '../../elements/Image';
import { Link , NavLink } from 'react-router-dom';

type AppProps = {
  programData: any;
};

const Banner = ({programData} : AppProps) => {
  console.log(programData.video_url)
 
  return (
    <>
      <section className="Program-banner-top program-banner-new" style={{ backgroundImage: `url('images/bg-program.jpg')` }}>
        <div className="container customwid">
          <div className="row">
            <div className="col-md-8">
              <div className="course-detalis-topleft rounded">
                <div className="course-heading_prt">
                  <h2 className="course_heading1">Instructor Led Online Live Programs</h2>
                  <h1 className="course_heading2">{programData && programData.title}</h1>
                  <p className="lead">{programData && programData.description}</p>
                  <div className="row">
                    <div className="col-sm-8 Course-block pe-5">
                      <div className="row">
                        {programData.starting_date &&
                        <div className="col-md-4">
                          <div className="course-Fees">
                            <div className="content">
                              <p>Starting Date</p>
                              <span>{programData.starting_date}</span>
                            </div>
                          </div>
                        </div>
                        }
                        {programData.duration &&
                        <div className="col-md-4">
                          <div className="course-Fees">
                            <div className="content">
                              <p>Duration</p>
                              <span>{programData.duration}</span>
                            </div>
                          </div>
                        </div>
                        }
                        {programData.mode && 
                        <div className="col-md-4">
                          <div className="course-Fees">
                            <div className="content">
                              <p>Mode of Learning</p>
                              <span>{programData.mode}</span>
                            </div>
                          </div>
                        </div>
                        }
                      </div>
                    </div>
                    <div className="col-sm-4 pe-4">
                      <div className="course-EnrollNow">
                        <Link to="/register" className="btn btn btn-dark px-5 w-100">Enroll</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Course-footer border-top program-manager position-relative">
                  <div className="" style={{ position: "absolute", top: "-13px", left: "34px" }}>
                    <Image src={'images/pm-tag-head.png'} alt={''} width={'100%'} height={'100%'} effect={'blur'}/>
                  </div>
                  <div className="row">
                    {/* {programData.contactDetails[0]?.map((item: any) => (
                    <div className="col-4 d-flex pt-2" key={item._id}>
                      <div className="icon flex-shrink-0">
                        <i className={"text-purple fs17 me-3 " + (item.icon)}></i>
                      </div>
                      <div className="content flex-grow-1">
                        <h6 className="fs14 fw500 mb-0">{item.title}</h6>
                        <span className="fs12">{item.text}</span>
                      </div>
                    </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="righr_video-pr rounded bg-white">
                {programData.video_url && programData.video_image &&
                <figure className="mb-0 position-relative">
                  <div className="video-btn">
                    <a className="popup-video" target={'_blank'} href={programData.video_url}>
                      <i className="fas fa-play"></i><span>Demo Video</span>
                    </a>
                  </div>
                  {programData.video_image &&
                  <Image src={programData.video_image} alt={''} width={'100%'} height={'100%'} effect={'blur'} classes={'w-100 rounded'}/>
                  }
                </figure>
                }
                {programData.brochureLink &&
                <div className="ps-2 pe-2 py-2">
                  <Link className="btn btn-outline-dark w-100" target={'_blank'} to={programData.brochureLink}>Download Brochure</Link>
                </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="top-stats-section">
          <div className="container customwid">
            <div className="top-stats-inner overflow-hidden">
              <div className="row">
                <div className="col-md-8">
                  <div className="row align-items-center py-2">
                    {programData.overallRating && programData.totalRating &&
                    <div className="col-md-4">
                      <div className="mid-prt-course">
                        <div className="d-flex">
                          <div className="flex-shrink-0 star">
                            <i className="fa-solid fa-star text-yellow"></i>
                          </div>
                          <div className="flex-grow-1 ms-3 star__ratings">
                            <h5 className="mb-0">
                              <span className="star-number fs18 fw600">{programData.overallRating}</span>
                              <small className="fs14 text-muted">/5</small>
                            </h5>
                            <span className="sm-t sm-t3 fs12 text-muted">{programData.totalRating} ratings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    }
                    {programData.noOfEnrolled &&
                    <div className="col-md-4">
                      <div className="mid-prt-course">
                        <div className="d-flex">
                          <div className="flex-shrink-0 enrolled-color">
                            <i className="fa-solid fa-user-check text-green"></i>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="mb-0 sm-t sm-t2 fs15">{programData.noOfEnrolled}</h5>
                            <span className="sm-t sm-t3 fs12 text-muted">already enrolled</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    }
                    <div className="col-md-4">
                      <div className="mid-prt-course">
                        <div className="d-flex">
                          <div className="flex-shrink-0 enrolled-color">
                            <i className="fa-solid fa-file-lines text-red"></i>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h5 className="mb-0 sm-t sm-t2 fs15">Sharable Certificate</h5>
                            <span className="sm-t sm-t3 fs12 text-muted">on Program Completion</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {programData.enquiryLink && 
                <div className="col-md-4">
                  <div className="cta-btn-wrap text-center py-2">
                    <h5 className="fs16 mb-1 mt-1">Need More Information?</h5>
                    <Link className="btn btn-outline-dark py-2 w-75 mx-auto mt-1 mb-1" to={programData.enquiryLink}>Enquire Now</Link>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;