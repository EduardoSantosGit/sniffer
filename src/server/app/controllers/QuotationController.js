import { makeClassInvoker } from 'awilix-koa'
import QuotationServiceApiClient from '../domain/services/QuotationServiceApiClient'

class QuotationController {
 
  async getQuotationValues (ctx) {
    
    let quotationServiceApiClient = new QuotationServiceApiClient()
    let response = await quotationServiceApiClient.getQuotationExame() 
    console.log('result ' , JSON.stringify(response))   
    ctx.ok()
  }
}

export default function (router) {
  
  const api = makeClassInvoker(QuotationController)

  router.get('/quotation', api('getQuotationValues'))
}
