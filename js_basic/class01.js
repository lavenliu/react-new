class Door {
	
	constructor(number, status) {
		this.number = number
		this.status = status
	}

	open_door() {
		this.status = "opened"
	}

	close_door() {
		this.status = "closed"
	}
}

let door = new Door(10010, "opened")

console.log("door's number is: ", door.number)
console.log("door's status is: ", door.status)

console.log("现在关门做点坏事")
door.close_door()
console.log("door's status is: ", door.status)

console.log("坏事做完，开启门窗透透气吧")
door.open_door()
console.log("door's status is: ", door.status)

// 子类中没有自己的this，需要调用super()函数调用父类
// 子类通过extends继承父类

// Object对象的扩展
Object.keys(obj);  // 返回obj对象的所有属性名称
Object.assign({a: 1}, {b: 2});


