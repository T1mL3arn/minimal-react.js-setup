import React, { Component } from "react"


export default class List extends Component {
	constructor(props) {
		super(props)

		this.state = {
			checked: true
		}
	}

	render() {
		const { items } = this.props
		const { checked } = this.state

		return <div>
			checked: { checked }
			<ul>
				{items.map((item, ind) => <li key={ind}>{item}</li> )}
			</ul>
		</div>
	}
}