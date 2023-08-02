import React from "react";
import {Link} from "react-router-dom";
import user from "../images/kindpng_1341850.png";

const contactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
      <Link to={{pathname: `/contacts/${id}`, state:{contacts:props.contacts}}}>
        <div className="header" style={{color:"black"}}>{name} </div>
        <div>{email}</div>
        </Link>
      </div>
      
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};
export default contactCard;
