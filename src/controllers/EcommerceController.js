import { makeClassInvoker } from 'awilix-koa'
import logger from '../lib/logger'

class EcommerceController {

    async getProductBySite(ctx){
        let site = ctx.params.site
        let product = ctx.params.name
        this.outLogger("getProductBySite", site)
        ctx.ok()
      }
  
}

export default function (router) {
  
  const api = makeClassInvoker(EcommerceController)

  router.get('/site/:site/product/name/:name', api('getProductBySite'))
}