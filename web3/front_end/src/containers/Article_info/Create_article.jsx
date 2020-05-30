import React from 'react';
import { withNamespaces } from 'react-i18next';
import {NavLink} from 'react-router-dom';
import './Article_info.css';
import './login.css';

class Create extends React.Component{
    
    
    render(){
        
        function addArticle(name, title, text){
            alert(name + " - Article was sucsessfuly created");
            fetch('http://127.0.0.1:8000/api/title/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    name: name,
                    title: title,   
                    desc: text
                })
              });
        }

  const {t} = this.props;
        return(
            <div className="add mb-3 mt-1 recipeCard shadow">
                <div className="login-page">
                    <div className = "form">
                        <form id='form' className = "login-form">
                            <h4>Article name</h4>
                            <input id="name" placeholder="name"/>
                            <h4>Article title</h4>
                            <input id="title" placeholder="title" />
                            <h4>Article text</h4>
                            <input id="text" placeholder="text" />
                            <NavLink to ='/' onClick={() => addArticle(document.forms["form"].elements["name"].value, document.forms["form"].elements["title"].value, document.forms["form"].elements["text"].value)} >Create article</NavLink>
                        </form>
                    </div>
             </div>  
            </div>
        );
    }
}
export default withNamespaces()(Create)
