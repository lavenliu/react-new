const m = new Map()
const o = {p: "Hello World"}

m.set(o, 'content')
console.log(m.get(o))

const map = new Map([
	['name', "大川"],
	['title', "攻城狮"]
])

console.log(map.size)
console.log(map.has('name'))
console.log(map.get('name'))
console.log(map.has('title'))
console.log(map.get('title'))

const items = [
	['name', "大川"],
	['title', "攻城狮"]
]

const map1 = new Map()

items.forEach(
	([key, value]) => map1.set(key, value)
)

for (const item of map1.entries()) {
	console.log(item[0], item[1])
}

for (const [key, value] of map1.entries()) {
	console.log(key, value)
}

for (const [key, value] of map1) {
	console.log(key, value)
}
