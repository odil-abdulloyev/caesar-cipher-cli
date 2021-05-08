const { createReadStream, createWriteStream } = require('fs');
const { input, output } = require('./lib/argv');
const logError = require('./lib/log-error');
const TransformStream = require('./lib/transform-stream');
const { pipeline } = require('stream');

const readStream = input ? createReadStream(input) : process.stdin;
const transformStream = new TransformStream();
const writeStream = output ? createWriteStream(output, { flags: 'a' }) : process.stdout;

pipeline(readStream, transformStream, writeStream, (err) => {
  if (err) {
    logError(err.message, err.code);
  }
});
