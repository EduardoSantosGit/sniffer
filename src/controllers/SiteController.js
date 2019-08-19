import { makeClassInvoker } from 'awilix-koa'
import logger from '../lib/logger'

class SiteController {
  
  constructor({ siteHostService, siteRequestService }){
      this.siteHostService = siteHostService
      this.siteRequestService = siteRequestService
      this.logTemplate = 'Class: %s Method: %s Params: %s'
  }

  async getSiteDataBasic(ctx){
    logger.info(this.logTemplate,'SiteController','getSiteDataBasic', ctx.params.site);
    
    let result = await this.siteHostService.getDataBasicSite(ctx.params.site)
    ctx.ok({site : result.value})
  }

  async getSiteDataComplete(ctx){
    logger.info(this.logTemplate,'SiteController','getSiteDataComplete', ctx.params.site);
    
    let result = await this.siteHostService.getDataCompleteSite(ctx.params.site)
    ctx.ok({site : result.value})
  }

  async getDataRequestSite(ctx){
    
    let params = {
      "site" : ctx.params.site,
      "protocol" : ctx.params.protocol
    }

    logger.info(this.logTemplate,'SiteController','getDataRequestSite', { number: 123 });

    let result = await this.siteRequestService.getDataSiteHeader(params.site, params.protocol);
    ctx.ok({header : result.value.toJSON()})
  }

  async getDataCssSite(ctx){
    let site = ctx.params.site
    let protocol = ctx.params.protocol
    this.outLogger("getDataCssSite", site)
    let result = await this.siteRequestService.getCssSite(site, protocol);
    ctx.ok({head : result.value})
  }

  outLogger(method, param){
    logger.info({
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
  router.get('/site/request/css/:protocol/:site', api('getDataCssSite'))
}