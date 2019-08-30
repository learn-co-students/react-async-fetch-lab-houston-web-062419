import React from "react"

export default class App extends React.Component{
	constructor(){
		super()
		this.state = {
			peopleInSpace: [{name:""}]

		}
	}

	// state = {
	//     peopleInSpace: []
	//   }

	componentDidMount(){
		fetch("http://api.open-notify.org/astros.json")
		.then(res => res.json())
		.then(obj => {
			//console.log(obj.people)
			this.setState({peopleInSpace: obj.people}, console.log(this.state.peopleInSpace))
		})
	}
	// componentDidMount() {
 //    fetch('http://api.open-notify.org/astros.json')
 //      .then(response => response.json())
 //      .then(data => {
 //        this.setState({
 //          peopleInSpace: data.people
 //        })
 //      })
 //  }

	render(){
		//debugger
		return(
			<div>
				 { 
			        //this.state.peopleInSpace.map(person => person.name)
			        	this.state.peopleInSpace[0].name
				 }
			</div>
		)
	}

}