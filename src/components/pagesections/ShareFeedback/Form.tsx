import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apicall } from '../../../api/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [data,setData]= useState({
        first_name:"",
        last_name:"",
        your_email:"",
        your_mobile: "",
        about_feedback:"",
        feedback:""


    })
    // const [fname,setFname]= useState(false)
    // const [lname,setLname]= useState(false)
    // const [email,setEmail]= useState(false)
    // const [phone,setPhone]= useState(false)
    // const [feedback,setFeedback]= useState(false)
    const notify = (message: string) => toast(message);
    const error = (message: string) => toast.error(message);
    const [submit,setSubmit]= useState(false)
    const formsubmit= (e:any)=>{
        setSubmit(false)
        const {name,value}= e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit= ()=>{
              setSubmit(true)
              if(data.first_name && data.last_name && data.your_email && data.your_mobile && data.about_feedback && data.feedback){
                apicall("post","/gt/index.php/wp-json/contact-form-7/v1/contact-forms/256/feedback",data).then(res=>{if(res.invalid_fields.length>0){
                   
                    // nothing to do here alreay hanlded from frontend
                
                }else{
                    notify(res.message)
                    setSubmit(false)
                    setData({ first_name:"",
                       last_name:"",
                       your_email:"",
                       your_mobile: "",
                       about_feedback:"",
                       feedback:""})

                }})
              }
    }

   

console.log(data.first_name)
    return (
        <>
            <div className="left-side-form bg-white h-100 border rounded">
                <div className="contact-icon-prt"> <span className="contact__icon"> <i className="fa-solid fa-thumbs-up"></i> </span> <span className="contact__icon-txt">
                    <h4 className="mb-0">SHARE your feedback </h4>
                    <p className="mb-0">You can send us your valuable feedback regarding our program, service, faculty, website content, website usability</p>
                </span> </div>
                <form method="post" action="#" id="email-form" className="pt-3">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>First Name*</label>
                            <input type="text" name="first_name" value={data.first_name} className="form-control" placeholder="Enter First Name" required onChange={formsubmit}  />
                            <p style={{display : !data.first_name && submit? "block" : "none",color: 'red'}}>Lastname must be filled</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Last Name*</label>
                            <input type="text" name="last_name" value={data.last_name} className="form-control" placeholder="Enter Last Name" required onChange={formsubmit} />
                            <p style={{display : !data.last_name && submit ? "block" : "none",color: 'red'}}>Fistname must be filled</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Email ID*</label>
                            <input type="email" name="your_email" value={data.your_email} className="form-control" placeholder="Enter your email" required onChange={formsubmit} />
                            <p style={{display : !data.your_email && submit? "block" : "none",color: 'red'}}>Lastname must be filled</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 form-group">
                            <label>Phone No.*</label>
                            <input type="tel" name='your_mobile' value={data.your_mobile} className="form-control" id="mobile" placeholder="Enter your phone no." onChange={formsubmit} />
                            <p style={{display : !data.your_mobile && submit? "block" : "none",color: 'red'}}>Mobile number must be filled</p>
                        </div>
                        <div className="col-12 form-group">
                            <label>What is your feedback about?</label>
                            <select className="form-select"name='about_feedback' value={data.about_feedback} aria-label=".form-select-lg example" onChange={formsubmit}>
                                <option selected> Select type of your feedback</option>
                                <option value="1">Feedback One</option>
                                <option value="2">Feedback Two</option>
                                <option value="3">Feedback Three</option>
                            </select>
                            <p style={{display : !data.about_feedback && submit? "block" : "none",color: 'red'}}>Mobile number must be filled</p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <label>Feedback Details*</label>
                            <textarea name="feedback" value={data.feedback} className="form-control" placeholder="Write your feedback here" onChange={formsubmit}></textarea>
                            <p style={{display : !data.feedback && submit? "block" : "none",color: 'red'}}>Mobile number must be filled</p>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 contact-info-footer align-items-center d-flex">
                            <div className="d-flex">
                                <div className="flex-shrink-0"> <i className="fa-solid fa-circle-info"></i> </div>
                                <div className="flex-grow-1 ms-2">
                                    <p>Your details are safe with us, so feel free to contact us</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 text-center">
                            <button className="btn btn-dark btn-lg py-3 px-5 w-100" type="button" id="submit" name="submit-form" onClick={handleSubmit}>SUBMIT DETAILS</button>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form