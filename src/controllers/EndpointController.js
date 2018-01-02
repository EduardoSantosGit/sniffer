import {
    makeClassInvoker
  } from 'awilix-koa'
  import os from 'os'
  import packageInfo from '../../package.json'
  
  class EndpointController {
    constructor ({
      classService
    }) {
      this.classService = classService 
    }
  
    async getInfo (ctx) {   
      ctx.body = {
        "messages": await this.classService.message()
      };
    }
  }
  
  export default function (router) {
    // Same trick as the functional API, but using `makeClassInvoker`.
    const api = makeClassInvoker(EndpointController)
  
    router.get('/endpoint/info', api('getInfo'))
  }
  