import React, { Component } from "react";
import CardList from "../components/card-list";
import SearchBox from "../components/search-box";
import "./app.css";
import Scroll from "../components/scroll"


class App extends Component {

	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
		this.onSearchChange = this.onSearchChange.bind(this)
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response =>{return response.json();})
			.then(users => {this.setState({robots: users})})
	}

	onSearchChange(event){
		this.setState({
				searchfield: event.target.value
		})
	}

	render() {
		const {robots, searchfield} = this.state;
		const filtreRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ? 
		<h1 className="tc">Loading...</h1> :
			(
				<div className="tc">
					<h1 className="f1">Robot Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList roboti={filtreRobots}/>
					</Scroll>
				</div>
			)
	}
}


export default App;