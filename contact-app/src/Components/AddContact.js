import React from "react";
// import {unstable_HistoryRouter } from "react-router-dom"; 
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

class AddContact extends React.Component {

    state ={
        name:"",
        email: "",
    };
    add=(e) =>{
      // let navigate = useNavigate()
      // const history = unstable_HistoryRouter()
        e.preventDefault();
        if(this.state.name === "" && this.state.email=== ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""})
        // this.props.history.push('/')
        // history.push('/')
    }
  render() {
    return (
      <div className="ui main">
        <h2 style={{marginTop:"80px"}}>Add contact</h2>
        <form className="ui form" onSubmit={this.add}>
            <div className="field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email"   value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
            </div>
            
        
         <button className="ui button blue">Add</button>
          
        </form>
      </div>
    );
  }
}

export default AddContact;
