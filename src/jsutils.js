export function double(/** @type {number} */ a ) {
	return a * 2
}

export class Foo {
	constructor(name) {
		this.name = name;
	}

	logName = () => console.log(this.name)

	setName = name => this.name = name
}