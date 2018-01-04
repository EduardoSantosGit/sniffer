import {
    makeClassInvoker
  } from 'awilix-koa'

import  dns from 'dns'

  class SitePointController {
    constructor ({
        sitesService
    }) {
      this.sitesService = sitesService 
    }
  
    async getInfoSite (ctx) {   
        const site = ctx.params.site
        ctx.body = {
            "inf" : await this.sitesService.getServers(site)
        } 
    }    
  }
  
  export default function (router) {
    // Same trick as the functional API, but using `makeClassInvoker`.
    const api = makeClassInvoker(SitePointController)
  
    router.get('/sites/info/:site', api('getInfoSite'))
  }