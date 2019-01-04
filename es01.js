const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
	host: '192.168.2.50:9200',
	apiVersion: '6.3',
	log: 'trace'
});

client.ping({
	requestTimeout: 3000
}, function (error) {
	if (error) {
		console.trace('elasticsearch cluster is down!');
	} else {
		console.log('All is well');
	}
});

function getClusterHealth() {
	client.cluster.health({}, function (error, resp, status) {
		console.log(resp);
	});
}

getClusterHealth();

function getCatHealth() {
	client.cat.health({'format': 'json'}, function (error, resp, status) {
		console.log(status);
		console.log(resp);
	});
}

getCatHealth();
