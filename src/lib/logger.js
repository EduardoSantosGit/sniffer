//import winston from 'winston'
import env from '../lib/env'

const { createLogger, format, transports } = require('winston');
const logger = createLogger({
  format: format.combine(
    format.splat(),
    format.simple()
  ),
  transports: [new transports.Console()]
});


// let logger = new winston.Logger();

// if (env.NODE_ENV.trim() !== 'test')
//   logger.add(winston.transports.Console, {
//     name: 'console.info',
//     colorize: true,
//     showLevel: true
//   })

export default logger