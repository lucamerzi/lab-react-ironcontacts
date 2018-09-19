import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fiveContacts: contacts.slice(0, 5)
		}
	}

	addRandomContact() {
		const { fiveContacts } = this.state
		const randomIdx = Math.floor(Math.random() * contacts.length)
		fiveContacts.push(contacts[randomIdx])
		this.setState({ fiveContacts })
	}

	sortByName() {
	const { fiveContacts } = this.state
	// sort by name
	fiveContacts.sort(function (a, b) {
		var nameA = a.name.toUpperCase(); // ignore upper and lowercase
		var nameB = b.name.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		// names must be equal
		return 0;
	});
	this.setState({ fiveContacts })
	}

	sortByPopularity(){
		const {fiveContacts} = this.state;
		fiveContacts.sort( (a,b) => b.popularity - a.popularity )
		this.setState({fiveContacts})
	}

	deleteItem(index){
		const {fiveContacts} = this.state;
		fiveContacts.splice(index, 1)
		this.setState({fiveContacts})
	}

	render() {
		const fiveContacts = this.state.fiveContacts.map((el, idx) => {
				return (
					<tr key={idx}>
						<td> <img className="actorImage" alt={el.name} src={el.pictureUrl} ></img>  </td>
						<td>{el.name}</td>
						<td>{el.popularity}</td>
						<td> <button className=" custom button is-small is-danger" onClick={() => this.deleteItem(idx)} >Delete Item</button> </td>
					</tr>)
			})

		return (
			<div className="container">
				<h1 className="big-title" > ⭐️️ ️️IronContacts ⭐️ </h1>
				<table className="my-table">
					<thead>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{fiveContacts}
					</tbody>
				</table>
				<div className="button-container">
				<button className="button custom button-below is-small is-primary" onClick={() => this.addRandomContact()} >Add Random Contact</button>
				<button className="button custom button-below is-small is-link" onClick={() => this.sortByName()} >Sort By Name</button>
				<button className="button custom button-below is-small is-warning" onClick={() => this.sortByPopularity()} >Sort By Popularity</button>
				</div>
			</div>
		);
	}
}

export default App;
