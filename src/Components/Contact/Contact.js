import React, { useState } from "react";
import "./Contact.css";
import { RiSendPlaneFill } from "react-icons/ri";
import axios from "axios"
import Fade from "react-reveal/Fade";

const Contact = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();
  
 
  const sendemailInfo = async () => {

    const myForm = new FormData()
    myForm.set("name", name)
    myForm.set("email", email)
    myForm.set("jobtype", jobtypes)
    myForm.set("message", message)
    try {
      const config = { headers: { 'Content-Type': 'application/json' } }
      const { data } = await axios.post(`https://mernportfolio-9ex8.onrender.com/api/v1/send/contact`, myForm, config)
      console.log(data)
    } catch (error) {
      console.log(error)
    }

      alert("Message sent successfully")
    
  }

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-iamge">
              <img src="https://images.unsplash.com/photo-1543652437-15ae836b33e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt="contact_form_image"
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Me</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-lebel">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Job Types</label>
                  <select
                    className="custom-select-tag"
                    value={jobtypes}
                    onChange={(e) => setJobtypes(e.target.value)}
                  >
                    <option>Choose Job Type</option>
                    <option>Full-time</option>
                    <option>Working Student</option>

                    <option>Part-time</option>

                    <option>Contract</option>
                    <option>Intern</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="button-submit"
                  onClick={sendemailInfo}
                >
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>

    </div>
  );
};

export default Contact;
