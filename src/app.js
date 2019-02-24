import React, { Component } from "react";
import CardList from "./card-list";
import {robots} from "./robots";
import SearchBox from "./search-box"


class App extends Component {

	constructor(){
		super()
		this.state = {
			robots: robots,
			searchField: ""
		}
		this.onSearchChange = this.onSearchChange.bind(this)
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
		
		return (
			<div className="tc">
				<h1>Robot Friends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList roboti={filtreRobots}}/>
			</div>
		);
	}
}


export default App;