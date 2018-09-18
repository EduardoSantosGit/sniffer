import { makeClassInvoker } from 'awilix-koa'
import logger from '../lib/logger'

class EcommerceController {

    async getProductBySite(ctx){
        let site = ctx.params.site
        let product = ctx.params.name
        this.outLogger("getProductBySite", site)
        ctx.ok()
    }

    async getProductByName(ctx){
        let product = ctx.params.name
        this.outLogger("getProductByName", product)
        ctx.ok()
    }
  
}

export default function (router) {
  
  const api = makeClassInvoker(EcommerceController)

  router.get('/peek/v1/product/:site/name/:name', api('getProductBySite'))
  router.get('/peek/v1/product/name/:name', api('getProductByName'))
}