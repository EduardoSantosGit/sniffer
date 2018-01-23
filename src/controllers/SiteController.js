import { makeClassInvoker } from 'awilix-koa'
import logger from '../lib/logger'

class SiteController {
  
  constructor({ siteService }){
      this.siteService = siteService
  }

  async getSiteDataBasic(ctx){
    let site = ctx.params.site
    this.outLogger("getSiteDataBasic", site)
    let result = await this.siteService.getDataBasicSite(site)
    ctx.ok({site : result.value})
  }

  async getSiteDataComplete(ctx){
    let site = ctx.params.site
    this.outLogger("getSiteDataComplete", site)

    console.log(ctx.request)

    let result = await this.siteService.getDataCompleteSite(site)
    ctx.ok({site : result.value})
  }

  outLogger(method, param){
    logger.debug({
        class: 'SiteController',
        method: method,
        params: {
            param
        }
    })
}
  
}

export default function (router) {
  
  const api = makeClassInvoker(SiteController)

  router.get('/site/basic/:site', api('getSiteDataBasic'))
  router.get('/site/complete/:site', api('getSiteDataComplete'))
}
