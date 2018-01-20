import DataSiteService from '../../infrastructure/services/DataSiteService'
import Site from '../models/Site'
import Result from '../common/Result'

export default class SiteService {

    constructor(){
        this.dataSiteService = new DataSiteService()
    }

    async getDataBasicSite(site){
        let arrayAddress = await this.dataSiteService.getLookup(site);        
        return new Result("OK", new Site({ name : site, family: arrayAddress[1], ip : arrayAddress[0] }));
    }

}