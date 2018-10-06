import logger from '../../lib/logger'
import Result from '../../domain/common/Result'
import HttpClient from '../client/HttpRequestClient'

export default class EcommerceService {

    constructor()
    {
        this._client = new HttpClient()
        this._ecommercesMap = new Map()
        this._ecommercesMap.set("submarino", "busca")
        this._ecommercesMap.set("americanas", "busca")
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

        if(this._ecommercesMap.get(base) !== undefined)
        {
            endpoint = this._ecommercesMap.get(base) 
            + "/" + endpoint
        }
        
        let scope = protocol + "://" + "www."
        let url = scope + base + ".com.br" + "/" + endpoint
        return url    
    }

}