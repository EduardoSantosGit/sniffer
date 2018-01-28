import winston from 'winston' 
import env from '../lib/env'

let logger = new winston.Logger();

if(env.NODE_ENV.trim() !== 'test')
  logger.add(winston.transports.Console, {
      name: 'console.info',
      colorize: true,
      showLevel: true
  })

export default logger