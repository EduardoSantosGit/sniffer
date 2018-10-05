import logger from '../../lib/logger'
import Result from '../../domain/common/Result'
import HttpClient from '../client/HttpRequestClient'

export default class EcommerceService {

    constructor()
    {
        this._client = new HttpClient()
    }

    async getInfoEcommerce(site, product)
    {
        let url = this.createUrlRequest(site, product)
        let result = await this._client.getAsync(url)
        return result
    }

    createUrlRequest(base, endpoint, protocol = null)
    {
        if(protocol === null)
            protocol = "https"
        
        let scope = protocol + "://" + "www."
        let url = scope + base + ".com.br" + "/" + endpoint
        return url    
    }

}