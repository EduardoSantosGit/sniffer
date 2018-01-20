import { makeClassInvoker } from 'awilix-koa'

class SiteController {
  
  constructor({ siteService }){
      this.siteService = siteService
  }

  async getSiteDataBasic(ctx){
    let site = ctx.params.site
    let result = await this.siteService.getDataBasicSite(site)
    ctx.ok({site : result.value})
  }

  async getSiteDataComplete(ctx){
    
  }
  
}

export default function (router) {
  
  const api = makeClassInvoker(SiteController)

  router.get('/site/basic/:site', api('getSiteDataBasic'))
  router.get('/site/complete/:site', api('getSiteDataComplete'))
}
