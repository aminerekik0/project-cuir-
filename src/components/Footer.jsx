import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer">
 <div className="footer_menu">
  <div>
   <h4 className="help_padding">Help</h4>
   <ul className="help_menu">
     <li className='li_items'>
       <a href="contactUs">Contact Us </a>
    
     </li>
     <li className='li_items'>
     <a href=""> My Account </a>
     </li>
     <li className='li_items'>
     <PhoneIcon/> 51415666
     </li>
     
   </ul>
  </div>
  <div>
  <h4 className="About_padding">About</h4>
  <ul className="about_menu">
  <li className='li_items'>
      <a href="/ourStory">Our Story</a> 
     </li>
     <li className='li_items'>
     <a href="">Global</a>
     </li>
     <li className='li_items'> 
     <a href="">Accessories</a> 
     </li>
     
   </ul>
  </div>
  </div>

 <div className="contact_footer">
      <p>GEAR FOR THE MODERN FRONTIER</p>
      <div className="contact">
         <a href="https://www.facebook.com/Kraft-Goods-106635061402728"><FacebookIcon style={{ cursor: "pointer" }} /></a>
       <a href="https://www.instagram.com/kraft.goods/"> <InstagramIcon  style={{ cursor: "pointer" }}/></a>
      <a href=""> <EmailIcon  onClick={()=>props.history.push('/')} style={{ cursor: "pointer" }} /></a> 
      </div>
      </div>
    </div>
  );
}

export default Footer;
