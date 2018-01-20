import { makeClassInvoker } from 'awilix-koa'

class SiteController {
  
  constructor({ siteService }){
      this.siteService = siteService
  }

  async getSiteData(ctx){
    let site = ctx.params.site
    let result = await this.siteService.getDataBasicSite(site)
    ctx.ok({site : result.value})
  }
  
}

export default function (router) {
  
  const api = makeClassInvoker(SiteController)

  router.get('/site/basic/:site', api('getSiteData'))

}
