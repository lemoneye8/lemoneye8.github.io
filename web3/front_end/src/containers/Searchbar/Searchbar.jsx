import React from 'react';
import './Searchbar.css';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';
import {NavLink} from 'react-router-dom';
import {moreBtnClick} from '../../components/Article.jsx';

class Searchbar extends React.Component {
    
	render() {
	const { t } = this.props;

	const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

	
  let objectLength = Object.keys(JSON.parse(sessionStorage.getItem('titles'))).length;

  function getRandomInt(max) {
  	let number = Math.floor(Math.random() * Math.floor(max));
  	if(number === 0){	
  		return 1;
	  }
    return number;

  }
  let pathToPicture = require(`./logo.png`);
    return(
        <nav className="navbar navbar-light bg-light fixed-top shadow">
            
				
            <div >
			<NavLink className="button" to='/'>{t("Home")}</NavLink>
		</div>
			<div>
  				<NavLink className="button" to='/article'
  				onClick={() =>   moreBtnClick(getRandomInt(objectLength))}>{t("randomAricle")}</NavLink>
  			</div>
			<div class="logod">
				<img class="wobbler" src={pathToPicture} width="80px" height="80px"/>
	    			<h3>CHEM Inc.</h3>
	   		</div>
			<div >
  				<NavLink className="button" to={sessionStorage.getItem('url')}
  				onClick={() => {if(sessionStorage.getItem('url') === '/'){
					  alert("You have no rules")	
				  }}}>{t("createArticle")}</NavLink>
  			</div>
			<div >
  				<NavLink className="button" to='/login'
  				>{t("login")}</NavLink>
  			</div>
        </nav>
        );
	};
}

export default withNamespaces()(Searchbar);
