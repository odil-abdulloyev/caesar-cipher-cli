const yargs = require('yargs');

const argv = yargs
  .option('action', {
    alias: 'a',
    nargs: 1,
    type: 'string',
    description: 'Action (encode/decode)',
  })
  .option('shift', {
    alias: 's',
    nargs: 1,
    type: 'number',
    description: 'Cipher key',
  })
  .option('input', {
    alias: 'i',
    type: 'string',
    description: 'Input file',
  })
  .option('output', {
    alias: 'o',
    type: 'string',
    description: 'Output file',
  }).argv;

module.exports = argv;
