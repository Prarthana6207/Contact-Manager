import React from "react";
import {Link} from "react-router-dom";
import user from "../images/contact-detail.png";

const ContactDetail = (props) => {
    // const{name, email} = props.location.state.contact;
return (
    <div className="main">
        <div className="ui card centered" style={{marginTop:"100px"}}>
            <div className="image" >
                <img src={user} alt="xyz" />
            </div>
            <div className="content">
                <div className="header">name</div>
                <div className="description">email</div>
            </div>
            <div className="center-div">
               <Link to="/"> <button className="ui button blue center" style={{marginLeft:"66px",marginBottom:"10px"}}> back to contact list</button></Link>
            </div>
        </div>
    </div>
  );
};
export default ContactDetail;

