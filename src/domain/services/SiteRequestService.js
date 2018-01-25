import Result from '../common/Result'
import DataSiteRequestService from '../../infrastructure/services/DataSiteRequestService'


export default class SiteRequestService {

    constructor(){
        this.dataSiteRequestService = new DataSiteRequestService()
    }

    async getDataSiteHeader(site){
        let header = this.dataSiteRequestService.getResponseHeaderSite(site)

        if(header.status == "OK")
        {
            
            

            return new Result("OK", result)
        }
    }

}