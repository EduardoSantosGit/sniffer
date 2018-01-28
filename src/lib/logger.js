import winston from 'winston' 
import env from '../lib/env'

let logger = new winston.Logger();

logger.add(winston.transports.Console, {
    name: 'console.info',
    colorize: true,
    showLevel: true
})

if(env.NODE_ENV === 'test')
  logger.transports['console.info'].silent = true 

export default logger