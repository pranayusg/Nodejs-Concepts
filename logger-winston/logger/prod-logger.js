const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json, colorize, errors } = format;

// In JSON logging colorize doesn't work
function buildProdLogger() {
  return createLogger({
    level: 'debug',
    format: combine(
      // colorize(),
      timestamp(),
      errors({ stack: true }),
      json()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'error.log' }),

    ],
  });
}

module.exports = buildProdLogger;