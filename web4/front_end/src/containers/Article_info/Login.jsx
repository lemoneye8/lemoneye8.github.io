import React from 'react';
import { withNamespaces } from 'react-i18next'
import {NavLink} from 'react-router-dom';
import './login.css'

class Login extends React.Component{
    state = {
		userList: [],
  	}
    render(){

  const {t} = this.props;
  let userList = JSON.parse(sessionStorage.getItem('users'));
  let cheker;

  function checkUser(login, password){
      for(let n = 0; n < 5; n++){
        if (Object.values(userList[n]).indexOf(login) > -1 && Object.values(userList[n]).indexOf(password) > -1) {
            cheker = true;
            sessionStorage.setItem("currentUserId", n);
            if(userList[n].vip === '1'){
                sessionStorage.setItem('url', '/createarticle');
            }else{
                sessionStorage.setItem('url', '/');
            }
            break;
        }else{
            cheker = false;
        }
    
    }
    if(cheker){
         alert("Success! Welcome, " + login);   
    }else{
        alert("Invalid password or login");   

    }
    }
    function getUrld(){
        if(sessionStorage.getItem('url') === '/createarticle'){
            return '/';
        }else{
            return '/login';
        }
    }

        return(
                <div class = "login-page">
                <div class = "form" >
                    <form id='forma' class = "login-form">
                        <input id="login" placeholder="login"/>
                        <input id="password" placeholder="password"/>
                       
                        <NavLink to = {getUrld()} onClick=  {() => checkUser(document.forms["forma"].elements["login"].value, document.forms["forma"].elements["password"].value)}>Login   </NavLink>
                        <NavLink class="message" to ="/register">Not registered? </NavLink>

                    </form>
                </div>
                </div>
        );
    }
}
export default withNamespaces()(Login)
