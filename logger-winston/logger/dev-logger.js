const winston = require('winston');
 
const simplelogger = winston.createLogger({
  level: 'debug',
  format: winston.format.simple(),
//   defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console(),
  ],
});

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp,stack }) => {
  return `${timestamp} [${label}] ${level}: ${stack || message}`;
});

const customlogger = createLogger({
  level: 'debug',
  format: combine(
    format.colorize(),
    label({ label: 'right meow!' }),
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    format.errors({stack :true}),
    myFormat
  ),
  transports: [
    new transports.Console(),
  ],
});

module.exports={simplelogger,customlogger};