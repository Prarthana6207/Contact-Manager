import React from "react";
import{Link} from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };



  // console.log(props);
  const renderContactList = props.contact.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return <div className="ui celled List">
  <h2 style={{marginTop:"80px"}}>Contact List
  <Link to ="/add">
  <button className="ui button blue right" style={{marginLeft:"70%"}}>Add Contact</button>
  </Link>
  </h2>
  {renderContactList}
  </div>;
};
export default ContactList;
