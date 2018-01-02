import {
    makeClassInvoker
  } from 'awilix-koa'
  
  class EndpointController {
    constructor ({
      systemService
    }) {
      this.systemService = systemService 
    }
  
    async getInfo (ctx) {   
      ctx.body = {
        "inf": await this.systemService.desc()
        }
      };
  }
  
  export default function (router) {
    // Same trick as the functional API, but using `makeClassInvoker`.
    const api = makeClassInvoker(EndpointController)
  
    router.get('/endpoint/info', api('getInfo'))
  }
  