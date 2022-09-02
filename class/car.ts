class Car {
	id: number;
	name: string;
	price: number

	constructor({id, name, price}) {
		this.id = id;
		this.name = name;
		this.price = price;
	}
}

const car = new Car({id: 0, name: "Audi", price: 200000});
console.log(car);