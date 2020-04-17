import React from 'react';
import "./App.css"
import { connect ,} from  'react-redux'
import { addUser,removeUser} from './store/userAction.js'
import UserInfo from "./components/UserInfo.jsx"
import UserForm from "./components/UserForm.jsx"


class App extends React.Component{
  addNewUser = (newUser) =>{
    this.props.addUser(newUser);
  

  }

  removeUser = (user_id) => {
    this.props.removeUser(user_id)
  }
  
  render(){
    return(
      <div className="App">
        <UserForm addUser={this.addNewUser} />
        <div className="App_user-info">
          {this.props.users.map((item) => {
            return(
              <UserInfo
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              gen={item.gen}
              rejectUser={this.removeUser}
              />
            );
          })}
          </div>
        </div> 
    );
  }        
}
const mapStateToProps = (state) =>({
  users: state.users
  
})

const mapDispatchToProps = {
  addUser,
  removeUser
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
