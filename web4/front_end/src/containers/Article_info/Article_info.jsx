import React from 'react';
import { withNamespaces } from 'react-i18next'
import {NavLink} from 'react-router-dom';
import './Article_info.css'
import '../Searchbar/Searchbar.css'

class AricleInfo extends React.Component{

    render(){

  const {t} = this.props;

  let AricleList = JSON.parse(sessionStorage.getItem('titles'));
  let ingridientList = JSON.parse(sessionStorage.getItem('ingridient'));
  let id = Number(sessionStorage.getItem('selectedArticle')) - 1;

        return(
            <div className="card mb-3 mt-1 recipeCard shadow">
                <div className="row no-gutters">
                    
                    <div className="">
                        <div className="card-body">
                            <h5 className="Article-name card-title btn-secondary rounded text-center pt-1 pb-1">{AricleList[id].name}</h5>
                            <p className="card-text mb-3 Article-desc">{AricleList[id].title}</p>
                        
                        </div>
                    </div>
                    <div className="col-md-12">
                        <p className="mb-3 ml-3 mr-3 shadow Article-text">{AricleList[id].desc}</p>
                    </div>
                    <div className="col-md-12">
                      <NavLink className="mb-2 ml-3 button1 button" to='/'>{t("backBtn")}
                          <svg class="bi bi-box-arrow-in-left" width="1.4rem" height="1.4rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M7.854 11.354a.5.5 0 000-.708L5.207 8l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z" clip-rule="evenodd"/>
                          <path fill-rule="evenodd" d="M15 8a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9A.5.5 0 0015 8z" clip-rule="evenodd"/>
                          <path fill-rule="evenodd" d="M2.5 14.5A1.5 1.5 0 011 13V3a1.5 1.5 0 011.5-1.5h8A1.5 1.5 0 0112 3v1.5a.5.5 0 01-1 0V3a.5.5 0 00-.5-.5h-8A.5.5 0 002 3v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0V13a1.5 1.5 0 01-1.5 1.5h-8z" clip-rule="evenodd"/>
                          </svg>
                      </NavLink>
                 </div>
                </div>
            </div>
        );
    }
}
export default withNamespaces()(AricleInfo)
