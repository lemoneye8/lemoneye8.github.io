import React from 'react';
import './Main.css';
import Article from '../../components/Article.jsx'
import Searchbar from '../Searchbar/Searchbar.jsx'
import AricleInfo from '../Article_info/Article_info.jsx'
import Login from '../Article_info/Login.jsx'
import Create from '../Article_info/Create_article.jsx'
import Register from '../Article_info/Registe.jsx'


import {Route} from 'react-router-dom'
import '../../components/categoryBox.css'

class Main extends React.Component {

	state = {
		ArticleList: [],
  	}
	  componentDidMount(){
		this.setState({
			ArticleList: JSON.parse(sessionStorage.getItem('titles')),
	 });
 }
	render() {
        return(
			<React.Fragment>
			<Searchbar onResponse={this.showResult}/>
		    	<div className="container-fluid" id="main">
		        	<div className="row ">
		             	
			            <div className="col-md-7 mt-3 articles">
			            	<ul className="list-group Ariclees" id="AricleList">
									<div className = "shadow">
								{this.state.ArticleList.map(item =>
									(<Route exact path = "/" render ={() =>
										(<Article name={item.name} desc={item.title}  id={item.id}/>)}/>))
								}	
									</div>
								<Route path='/article' component = {AricleInfo}/>
								<Route path='/createarticle' render={(props) => <Create/>}/>
								<Route path='/login' component= {Login}></Route>
								<Route path='/register' component= {Register}></Route>
							</ul>
		                </div>
		            </div>
		        </div>
			</React.Fragment>
        );
	}
}

export default Main;
