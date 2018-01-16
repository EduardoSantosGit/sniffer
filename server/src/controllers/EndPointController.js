import { makeClassInvoker } from 'awilix-koa'

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
