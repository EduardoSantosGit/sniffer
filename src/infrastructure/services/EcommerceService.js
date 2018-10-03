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
        let url = site + product
        let result = await this._client.getAsync(url)
        return result
    }

}