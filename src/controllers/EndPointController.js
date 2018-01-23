import { makeClassInvoker } from 'awilix-koa'
import Base from '../domain/common/BaseController'

class EndpointController {
  
  constructor({ systemService }){
      this.systemService = systemService
  }

  async getInfo (ctx) {
    /*ctx.ok({
      timestamp: new Date(),
      info: await this.systemService.getInfoSystem()
    })*/
    Base.createResponseFromResult(ctx,
      {
      timestamp: new Date(),
      info: await this.systemService.getInfoSystem()
    }, "info")
  }

}

export default function (router) {
  
  const api = makeClassInvoker(EndpointController)

  router.get('/endpoint/info', api('getInfo'))
}
