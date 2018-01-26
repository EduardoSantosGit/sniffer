import { makeClassInvoker } from 'awilix-koa'
import logger from '../lib/logger'

class SiteController {
  
  constructor({ siteHostService, siteRequestService }){
      this.siteHostService = siteHostService
      this.siteRequestService = siteRequestService
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
    let protocol = ctx.params.protocol
    this.outLogger("getDataRequestSite", site)
    let result = await this.siteRequestService.getDataSiteHeader(site, protocol);
    ctx.ok({header : result.value.toJSON()})
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
  router.get('/site/request/header/:protocol/:site', api('getDataRequestSite'))
}
