import { makeClassInvoker } from 'awilix-koa'
import logger from '../lib/logger'

class SiteController {
  
  constructor({ siteHostService }){
      this.siteHostService = siteHostService
  }

  async getSiteDataBasic(ctx){
    let site = ctx.params.site
    this.outLogger("getSiteDataBasic", site)
    let result = await this.siteHostService.getDataBasicSite(site)
    ctx.ok({site : result.value})
  }

  async getSiteDataComplete(ctx){
    let site = ctx.params.site
    this.outLogger("getSiteDataComplete", site)
    let result = await this.siteHostService.getDataCompleteSite(site)
    ctx.ok({site : result.value})
  }

  async getDataRequestSite(ctx){
    let site = ctx.params.site
    this.outLogger("getDataRequestSite", site)

    ctx.ok()
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

  router.get('/site/host/basic/:site', api('getSiteDataBasic'))
  router.get('/site/host/complete/:site', api('getSiteDataComplete'))
}
