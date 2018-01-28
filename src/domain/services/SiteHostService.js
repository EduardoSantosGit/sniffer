import DataSiteHostService from '../../infrastructure/services/DataSiteHostService'
import Site from '../models/Site'
import SiteHost from '../models/SiteHost'
import Result from '../common/Result'
import Cache from './CacheService'
import logger from '../../lib/logger'

export default class SiteHostService {

    constructor(){
        this.dataSiteHostService = new DataSiteHostService()
    }

    async getDataBasicSite(site){
        this.outLogger("getDataBasicSite", site)

        let result = Cache.read(site);

        if(result === null){
            result = await this.dataSiteHostService.getLookup(site);
            Cache.write(site, result);
        }
        
        return new Result("OK", new Site({ name : site, family: result[1], ip : result[0] }));
    }

    async getDataCompleteSite(site){
        this.outLogger("getDataCompleteSite", site)

        let resultIp = Cache.read(site);

        if(resultIp === null){
            resultIp = await this.dataSiteHostService.getResolve4(site);
            Cache.write(site, resultIp);
        }
            
        let ret = []

        await Promise.all(resultIp.map(async (numIp) => {
            ret.push({
                _ip: numIp,
                _hostNames: await this.dataSiteHostService.getReverse(numIp)
            });
        }));
        
        return new Result("OK", new SiteHost({ name : site, family: 4, ip: resultIp, hosts: ret}));
    }

    outLogger(method, param){
        logger.info({
            class: 'SiteService',
            method: method,
            params: {
                param
            }
        })
    }

}