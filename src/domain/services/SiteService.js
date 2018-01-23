import DataSiteService from '../../infrastructure/services/DataSiteService'
import Site from '../models/Site'
import SiteHost from '../models/SiteHost'
import Result from '../common/Result'
import Cache from './CacheService'
import logger from '../../lib/logger'

export default class SiteService {

    constructor(){
        this.dataSiteService = new DataSiteService()
    }

    async getDataBasicSite(site){
        this.outLogger("getDataBasicSite", site)
        let result = await this.dataSiteService.getLookup(site);      
        return new Result("OK", new Site({ name : site, family: result[1], ip : result[0] }));
    }

    async getDataCompleteSite(site){
        this.outLogger("getDataCompleteSite", site)
        let resultIp = await this.dataSiteService.getResolve4(site);
        
        let ret = []

        await Promise.all(resultIp.map(async (numIp) => {
            ret.push({
                _ip: numIp,
                _hostNames: await this.dataSiteService.getReverse(numIp)
            });
        }));
        
        return new Result("OK", new SiteHost({ name : site, family: 4, ip: resultIp, hosts: ret}));
    }

    outLogger(method, param){
        logger.debug({
            class: 'SiteService',
            method: method,
            params: {
                param
            }
        })
    }

}