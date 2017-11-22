import { makeClassInvoker } from 'awilix-koa'
import os from 'os'
import packageInfo from '../../package.json'

class EndpointController {
 
  async getInfo (ctx) {
    ctx.ok({
      timestamp: new Date(),
      message: "Hello World"
    })
  }
}

export default function (router) {
  
  const api = makeClassInvoker(EndpointController)

  router.get('/endpoint/info', api('getInfo'))
}
