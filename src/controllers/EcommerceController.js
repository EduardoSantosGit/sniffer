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

    async getEcommerceByProduct(ctx){
        let product = ctx.params.name
        this.outLogger("getEcommerceByProduct", product)
        ctx.ok()
    }

    async getEcommerceByCategory(ctx){
        let product = ctx.params.name
        this.outLogger("getEcommerceByCategory", product)
        ctx.ok()
    }

    async getEcommercePromotions(ctx){
        let product = ctx.params.name
        this.outLogger("getEcommercePromotions", product)
        ctx.ok()
    }
}

export default function (router) {
  
  const api = makeClassInvoker(EcommerceController)

  router.get('/peek/v1/product/:site/name/:name', api('getProductBySite'))
  router.get('/peek/v1/product/name/:name', api('getProductByName'))

  router.get('/peek/v1/ecommerce/product/:name', api('getEcommerceByProduct'))
  router.get('/peek/v1/ecommerce/category/:name', api('getEcommerceByCategory'))

  router.get('/peek/v1/ecommerce/:name/promotions/', api('getEcommercePromotions'))
  
}