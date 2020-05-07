import React, { Component } from "react";
import {connect} from 'react-redux'
import CardList from "../components/card-list";
import SearchBox from "../components/search-box";
import "./app.css";
import Scroll from "../components/scroll"
import ErrorBoundary from "../components/error-boundary";
import {requestRobots, setSearchField} from "../actions";

class App extends Component {

	componentDidMount(){
		this.props.onRequestRobots()
	}

	render() {
		const {searchField, onSearchChange, robots, isPending} = this.props
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ?
		<h1 className="tc">Loading...</h1> :
			(
				<div className="tc">
					<h1 className="f1">Robot Friends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList roboti={filterRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);