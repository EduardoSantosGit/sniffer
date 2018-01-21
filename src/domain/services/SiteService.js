import DataSiteService from '../../infrastructure/services/DataSiteService'
import Site from '../models/Site'
import Result from '../common/Result'
import Cache from './CacheService'

export default class SiteService {

    constructor(){
        this.dataSiteService = new DataSiteService()
    }

    async getDataBasicSite(site){
        let result = await this.dataSiteService.getLookup(site);      
        return new Result("OK", new Site({ name : site, family: result[1], ip : result[0] }));
    }

    async getDataCompleteSite(site){
        let resultIp = await this.dataSiteService.getResolve4(site);

        let ret = []

        resultIp.forEach(async (a) => {
            ret.push(await this.dataSiteService.getReverse(a))
        })

        return ret
    }

}