import React from "react"; 
import Footer from "./Footer";
import Header from "./Header";
import { Table, Flag } from 'semantic-ui-react'

function ContactUs() {
   

    return (
        <div>
           <div><Header/></div>
           <div className="contact_body">
               <h1>How can we help?</h1>
               <h4 className="email_link"><a href="" className="email_link">hello@gmail.com</a></h4>
               <p className="response"><h5>We're happy to answer questions. We will do our best to respond to you within 24 hours, sometimes a bit longer on weekends.</h5></p>
               <h4 className="email_link">Address</h4>   
               <p className="response"> <h5>Sfax , Tunisia <img className="tunisia_flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.svg.png" alt=""/> </h5> </p>       
           </div>
           <div><Footer/></div>
        </div>
    )
}

export default ContactUs
