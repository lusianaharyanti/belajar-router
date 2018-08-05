import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from 'axios';


import logodua from '../../google.svg';
import logo from '../../lusi.jpg';
import logotiga from'../../lonceng.png';
import '../../App.css';


class Home extends Component {                                       
	constructor(props){                                               
		super(props);

		this.handelInputchange= this.handelInputchange.bind(this);    
		this.handleClick = this.handleClick.bind(this);               
		this.renderHasil = this.renderHasil.bind(this);               


		this.state={
			newData : [],                                               
			url: '',
			baru:'',
			count: 0,
			fullname:'',
			buttonClicked: false,
			buttonClick: false,
			value: this.props.default
		}; 
		this.apiUrl ='https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=4e14eec447c8433cb452d6b89551f003';
	}

	componentDidMount() {

		axios.get(this.apiUrl).then(res => {
			this.setState({ newData: res.data.articles });
			this.setState({ count: res.data.articles.length });

		});
	}

	handelInputchange({ target }) {                                  
		const { value } = target;
		const { newData } = this.state;
		const url = newData.filter(article => article.title.toLowerCase().search(value.toLowerCase()))
		console.log(url);
	}

	handleClick() {
		this.setState({
			buttonClicked: true,
		})
	}  
	renderHasil() {
		const { newData, buttonClicked } = this.state;     
		console.log(newData)
		if (buttonClicked && newData && newData[0]) {      
			return (
				<div>   
				<h4 className="output">Select from {this.state.count} News View</h4>
				<ul>
				{this.state.newData.map((news, i) => {     
					return (
						<li className="output" key={i}>       
						<a  className="output" href={news.url}> 
						<strong className="output">{news.title}</strong></a><br/>
						<div className="output">{news.author}</div>
						<div className="output">{news.description}</div>
						<div className="output2"><img src={news.urlToImage} width={100} height={100}/></div>
						</li>
					);
				})
			}
			</ul>
			</div>
			)
		} else {
			return;
		}
	}

	render() {
		return (

			<div className="App">
			<header className="App-header"> 
			</header>

			<div id="inti">
			<img src={logodua} className="logo2" alt="logo" />
			<input className="inputan" 
			type="text"
			name='search'
			value ={this.props.data}
			onChange={this.handelInputchange}/>

			<button className="btn" 
			type="button" 
			onClick={this.handleClick}>
			Search News
			</button>

			<button  className="btn"
			type="submit" 
			onClick= {this.handleClick}>
			Iam Lucky
			</button>

			<div  id="hasil-pencarian">
			{this.renderHasil()}
			</div>

			<div>
			<p className="App-intro"> {this.state.url} </p>
			</div>
			</div>
			</div>     
			);
	}
}

export default Home;

// /**
//  * Tanpa state
//  * mempunyai props sebagai inpt
//  */
// // const Home = (props) => {
// // };  


/**================
AllPages
<Home
  english={true}
  />  */

// <div>
// 		    <h2>Home</h2>
// 		</div>	
// 		)