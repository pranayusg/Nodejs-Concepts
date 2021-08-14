const devLogger = require('./dev-logger')
const prodLogger = require('./prod-logger')

let logger = null;
if (process.env.NODE_ENV == 'development')
    logger = devLogger.customlogger;
else
    logger = prodLogger();

module.exports = logger;

// https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342