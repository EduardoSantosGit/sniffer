import { makeClassInvoker } from 'awilix-koa'

class SiteController {
  
  constructor({  }){
      
  }

  async getSiteData(ctx){
    let site = ctx.params.site
    ctx.ok({})
  }
  
}

export default function (router) {
  
  const api = makeClassInvoker(SiteController)

  router.get('/site/data/:site', api('getSiteData'))

}
