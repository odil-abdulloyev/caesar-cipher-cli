const { encode, decode } = require('./src/cipher');
const logError = require('./src/log-error');
const TransformStream = require('./src/transform-stream');

const transformStream = new TransformStream();
process.stdin.pipe(transformStream).pipe(process.stdout);
