import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from '../api/contacts';
import AddContact from "./AddContact";


function App() {
  const LOCAL_STORAGE_KEY = "contact";
  const [contact, setContact] = useState([]);

  const addContactHandler = async (contacts) => {
    console.log(contacts);
    const request ={
      id: uuid(),
      ...contacts
    }

    const response = await api.post("/contacts",request)
    setContact([...contact, response.data]);
  };

     
    const removeContactHandler = async (id) => {
     await api.delete(`/contacts/${id}`);
    const newContactList = contact.filter((contacts) => {
      return contacts.id !== id;
    });
    setContact(newContactList);
  };


//retreive contacts
    const retreiveContact = async() =>{

        const response = await api.get("/contacts");
        return response.data;
    }
      useEffect(() => {
        // const retreiveContact = ;
        // if (retreiveContact)
        // { setContact(retreiveContact);}
        const getAllContacts = async()=>{
          const allContacts = await retreiveContact();
          if(allContacts) setContact(allContacts);
        };
        getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
  }, [contact]);

  
  
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
        <Route
            path="/"
            exact
            element={
              <ContactList
                contact={contact}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route path="/contacts/:id" Component={ContactDetail} />
        </Routes>

        {/* <ContactList contact={contact} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
