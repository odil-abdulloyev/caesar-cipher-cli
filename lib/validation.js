const { existsSync } = require('fs');
const logError = require('./log-error');

class Validation {
  static checkFileExists(filename) {
    if (filename && !existsSync(filename)) {
      logError(`File "${filename}" doesn't exist`, 2);
    }
    return this;
  }

  static checkShift(shift) {
    if (typeof shift !== 'number' || shift % 1 !== 0) {
      logError('--shift option must be an integer number\n', 1);
    }
    return this;
  }
}

module.exports = Validation;
