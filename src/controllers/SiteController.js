import { makeClassInvoker } from 'awilix-koa'

class SiteController {
  
  constructor({  }){
      
  }

  
}

export default function (router) {
  
  const api = makeClassInvoker(SiteController)

}
