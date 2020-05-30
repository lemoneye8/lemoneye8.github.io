import React from 'react';
import { withNamespaces } from 'react-i18next'
import {NavLink} from 'react-router-dom';
import './login.css'

class Register extends React.Component{
    state = {
		userList: [],
  	}
    render(){

  let cheker = false;
  function checkUser(login, password, password2){
    if(password === password2 && password !== ''){
      alert("Succes");
      fetch('http://127.0.0.1:8000/api/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: login,
            password: password,   
            vip: '0'
        })
      });
            }else{
              alert("Wrong data!");
            }
}
  

        return(
                <div class = "login-page">
                <div class = "form" >
                    <form id='forma' class = "login-form">
                        <input id="login" placeholder="login"/>
                        <input id="password" placeholder="password"/>
                        <input id = "password2" placeholder = "reenter password"></input>
                        <div class="submit-block">
                        <div class="submit-button"> 
                        <a href = '/register' className = 'mr-2' onClick={() => checkUser(document.forms["forma"].elements["login"].value, document.forms["forma"].elements["password"].value, document.forms["forma"].elements["password2"].value)} type ="submit" >Register       </a>
                        <NavLink class="message" to = "/login">     Already registered?</NavLink>
                   </div>
                   </div>
                    </form>
                </div>
                </div>
        );
    }
}
export default withNamespaces()(Register)
