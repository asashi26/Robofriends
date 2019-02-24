import React, { Component } from "react";
import CardList from "./card-list";
import SearchBox from "./search-box";
import "./app.css";
import Scroll from "./scroll"


class App extends Component {

	constructor(){
		super()
		this.state = {
			robots: [],
			searchField: ""
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
				searchField: event.target.value
		})
	}


	render() {

		const filtreRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if(this.state.robots.length === 0){
			return <h1 className="tc">Loading...</h1>
		}else {
			return (
				<div className="tc">
					<h1 className="f1">Robot Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList roboti={filtreRobots}/>
					</Scroll>
				</div>
			);}
	}
}


export default App;