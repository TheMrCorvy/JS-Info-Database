const obj: Obj = {
	firstName: "Jhon",
	lastName: "Doe",
	age: 24,
	address: {
		country: "US",
		state: "California",
		homeAddress: "Fake Street 123",
	},
}

interface Obj {
	firstName: string
	lastName: string
	age: number
	address: {
		country: string
		state: string
		homeAddress: string
	}
}

function howOld(person: Obj) {
	// destructuring an object inside of the original destructuring
	const {
		firstName,
		lastName,
		age,
		address: { country, state },
	} = person

	return age
}
