import { Link } from 'react-router-dom';
import ProgramSlide from "../../items/ProgramSlide";

type AppProps = {
  data: any[];
}

const Programs = ({data} : AppProps) => {
  
  return (
    <>
      <section className="main-listing-section sec-spacing light-bg border-bottom">
        <div className="container customwid">
          <div className="row justify-content-between main-list-top mb-3 align-items-center">
            <div className="col-auto course__name_all">
              <small className="fw-normal" style={{ fontSize: "12px" }}>
                <span className="fw-bold">
                  Filter by <i className="fa fa-arrow-right px-1" style={{ fontSize: "10px" }}></i>
                </span>
                <span className="px-1 small"></span>
                <select
                  name=""
                  id=""
                  className="form-select form-select-sm d-inline-block w-auto rounded-pill"
                  style={{ paddingLeft: " 1rem", backgroundColor: "#f1edf8", color: "#482973", borderColor: "#c2b2d8", fontSize: "13px", fontWeight: "500" }}
                >
                  <option defaultValue="0">
                    All Programs
                  </option>
                  <option defaultValue="1">Finanace Courses</option>
                  <option defaultValue="2">ACCA Approved</option>
                  <option defaultValue="3">ACCA Qualification</option>
                  <option defaultValue="4">Accounts</option>
                  <option defaultValue="5">Blockchain</option>
                  <option defaultValue="6">Business Intelligence</option>
                  <option defaultValue="7">Cyber Security</option>
                  <option defaultValue="8">Data Analytics</option>
                  <option defaultValue="9">Excel Bootcamp</option>
                  <option defaultValue="10">E-Learning Programs</option>
                  <option defaultValue="11">Forensic Accounting</option>
                  <option defaultValue="12">Fraud Investigation</option>
                  <option defaultValue="13">GST in India</option>
                  <option defaultValue="14">Masters Programs</option>
                  <option defaultValue="15">Online Programs</option>
                  <option defaultValue="16">PG Programs</option>
                  <option defaultValue="17">Transfer Pricing</option>
                </select>
              </small>
            </div>
            <div className="col-auto course__view">
              <h4 className="d-flex align-items-center mb-0">
                <Link className="btn btn-dark btn-sm rounded-pill px-3 py-1" to="#">Also View e-Learning Programs</Link>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {data.map((item) => (
                <ProgramSlide 
                  key={item.program_id}
                  title={item?.title}  
                  text={item?.description}  
                  link={item?.link}  
                  image={item?.featured_image}  
                  duration={item?.duration}  
                  isCertificate={item?.isCertificate}  
                  discountPercentage={item?.discountPercentage}  
                  price={item?.program_fees}  
                  enrollLink={item?.enrollLink}  
                  isLive={item?.isLive} 
                  viewType={"list"} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;