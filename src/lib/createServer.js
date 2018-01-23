import Koa from 'koa'
import Router from 'koa-router'
import cors from 'kcors'
import respond from 'koa-respond'
import convert from 'koa-convert'

import { scopePerRequest } from 'awilix-koa'
import createControllers from './controllers'
import getConfiguredContainer from './container'
import logger from './logger'
import requestId from '../middleware/RequestId'

export default async function createServer() {
  const app = new Koa()
  const router = new Router()

  logger.debug('Creating server...', { scope: 'startup' })

  app.use(requestId())
  app.use(respond())
  app.use(convert(cors()))
 
  const container = getConfiguredContainer()
  app.use(scopePerRequest(container))

  createControllers(router)

  app.use(router.allowedMethods())
  app.use(router.routes())

  return app
}  