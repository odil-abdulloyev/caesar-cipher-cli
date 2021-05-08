const { encode, decode } = require('./src/cipher');
const logError = require('./src/log-error');

console.log(encode('ok', 1));
logError('test error', 99);
