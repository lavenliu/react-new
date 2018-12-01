const axios = require('axios');

const URL = 'http://localhost:5000/v1/rds'


function getRds() {
	axios.get(URL).then(res => {
		// console.log(res.data.result)
		res.data.result.items.map((item) => {
			console.log(item.id + ": " + item.belong_to+ ", " + item.cpu);
		});
	});
}


function addRds(rdsInfo) {
	axios.post(URL, userInfo).then(response => {
		console.log(response.data);
	});
}


getRds();
// addUser({username: 'james', email: 'james@qq.com'})
