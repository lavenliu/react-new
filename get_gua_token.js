const crypto = require('crypto');

const clientOptions = {
    cypher: 'AES-256-CBC',
    key: 'MySuperSecretKeyForParamsToken12'
};

const value = {
    "connection": {
        "type": "ssh",
        "settings": {
            "hostname": "192.168.2.50",
            "username": "liucc",
            "password": "fuckoff",
            "enable-drive": true,
            "create-drive-path": true,
            "security": "any",
            "ignore-cert": true,
            "enable-wallpaper": false
        }
    }
};

const encrypt = (value) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(clientOptions.cypher, clientOptions.key, iv);
	
    let crypted = cipher.update(JSON.stringify(value), 'utf8', 'base64');
    crypted += cipher.final('base64');
	
    const data = {
        iv: iv.toString('base64'),
        value: crypted
    };
	
    return new Buffer(JSON.stringify(data)).toString('base64');
};

console.log(encrypt(value));
