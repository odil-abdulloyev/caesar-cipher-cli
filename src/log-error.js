const logError = (message, exitCode) => {
  process.stderr.write(message + '\n');
  process.exit(exitCode);
};

module.exports = logError;
