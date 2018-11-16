const jsonp = require('jsonp');

jsonp('http://localhost:5000/users/', null, (err, data) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log(data);
	}
});

