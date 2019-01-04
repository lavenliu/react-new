const GuacamoleLite = require('guacamole-lite');

const websocketOptions = {
	port: 8899
};

const guacdOptions = {
	host: "192.168.2.50",
	port: 4822 // port of guacd
};

const clientOptions = {
	crypt: {
		cypher: 'AES-256-CBC',
		key: 'MySuperSecretKeyForParamsToken12'
	},
    log: {
		level: 'DEBUG'
	}
};

const guacServer = new GuacamoleLite(websocketOptions, guacdOptions, clientOptions);
