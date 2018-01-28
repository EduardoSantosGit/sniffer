import { makeClassInvoker } from 'awilix-koa'

class EndpointController {
  
  constructor({ systemService }){
      this.systemService = systemService
  }

  async getInfo (ctx) {
    ctx.ok({
      timestamp: new Date(),
      info: await this.systemService.getInfoSystem()
    }) 
  }

}

export default function (router) {
  
  const api = makeClassInvoker(EndpointController)

  router.get('/endpoint/info', api('getInfo'))
}
