import React from "react"
import ReactDOM from 'react-dom'
import ComponentJS from "./ComponentJS"
import { ComponentTS } from "./ComponentTS"
import { double, Foo } from "./jsutils"
import { getLen } from "./tsutil"
import List from './List'

console.log(getLen(['hello', 'world']))
console.log(double(123))

ReactDOM.render(
	<>
		<h1>Hello, TypeScript and JavaScript</h1>
		<ComponentTS list={[ 1, 2, 3]}/>
		<br />
		<ComponentJS value={ 5 } />
		<List items={[4,5,6]} />
	</>
	, document.getElementById('root')
)

let f = new Foo('John')
f.logName()
f.setName('Doe')
f.logName()