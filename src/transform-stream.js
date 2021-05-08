const { Transform } = require('stream');
const { encode, decode } = require('./cipher');
const { shift, action } = require('./argv');

class TransformStream extends Transform {
  _transform(chunk, encoding, callback) {
    const actions = {
      encode,
      decode,
    };
    const encoded = actions[action](chunk.toString(), shift);
    callback(null, encoded);
  }
}

module.exports = TransformStream;
