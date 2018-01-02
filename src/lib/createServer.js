import Koa from 'koa'
import Router from 'koa-router'
import convert from 'koa-convert'
import { scopePerRequest } from 'awilix-koa'
import cors from 'kcors'

import createControllers from './controllers'
import getConfiguredContainer from './container'
import counter from '../middleware/counter'

export default async function createServer() {
  const app = new Koa()
  const router = new Router()

  app.use(convert(cors()))
  app.use(counter())
  // Container is configured with our services and whatnot.
  const container = getConfiguredContainer()

  // Creates an Awilix scope per request. Check out the awilix-koa
  // docs for details: https://github.com/jeffijoe/awilix-koa
  app.use(scopePerRequest(container))

  // Create the API's.
  createControllers(router)

  // Install routes
  app.use(router.allowedMethods())
  app.use(router.routes())

  return app
}
