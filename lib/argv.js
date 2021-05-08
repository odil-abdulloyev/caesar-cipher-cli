const yargs = require('yargs');
const Validation = require('./validation');

const argv = yargs
  .option('action', {
    alias: 'a',
    nargs: 1,
    demandOption: true,
    description: 'Action (encode/decode)',
    choices: ['encode', 'decode'],
  })
  .option('shift', {
    alias: 's',
    nargs: 1,
    number: true,
    type: 'number',
    demandOption: true,
    description: 'Cipher key',
  })
  .option('input', {
    alias: 'i',
    description: 'Input file',
    type: 'string',
    nargs: 1,
  })
  .option('output', {
    alias: 'o',
    description: 'Output file',
    type: 'string',
    nargs: 1,
  })
  .usage(
    'Usage: node index --action <encode/decode> --shift <number> [--input <filename>] [--output <filename>]'
  ).argv;

const { input, output, shift } = argv;

Validation.checkFileExists(input).checkFileExists(output).checkShift(shift);

module.exports = argv;
