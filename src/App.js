import React from 'react';
import "./App.css"
import { connect ,} from  'react-redux'
import { addUser} from './store/userAction.js'
import UserInfo from "./components/UserInfo.jsx"
import UserForm from "./components/UserForm.jsx"


class App extends React.Component{
  addNewUser = (newUser) =>{
    this.props.addUser(newUser);
  

  }
  
  render(){
    return(
      <div className="App">
        <UserForm addUser={this.addNewUser} />
        <div className="App_user-info">
          {this.props.users.map((item,index) => {
            return(
              <UserInfo
              key={index}
              name={item.name}
              email={item.email}
              gen={item.gen}/>
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
  addUser
}




export default connect(mapStateToProps,mapDispatchToProps)(App);
