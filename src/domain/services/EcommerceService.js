import logger from '../../lib/logger'
import Cache from './CacheService'
import Result from '../common/Result'

export default class EcommerceService {

    constructor(){

    }

    async getProductBySite(site, product){
        this.outLogger("getProductBySite", site, product)

        return new Result("OK");
    }
}