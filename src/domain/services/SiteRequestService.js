import Result from '../common/Result'
import DataSiteRequestService from '../../infrastructure/services/DataSiteRequestService'
import Header from '../models/Header'

export default class SiteRequestService {

    constructor(){
        this.dataSiteRequestService = new DataSiteRequestService()
    }

    async getDataSiteHeader(site){
        let header = await this.dataSiteRequestService.getResponseHeaderSite(site)
        
        if(header.status == "OK")
        {
            let jsonHeader = {
                date : header.value['date'],
                connection : header.value['connection'],
                contentEncoding : header.value['content-encoding'],
                contentType : header.value['content-type']
            }
            
            return new Result("OK", new Header(jsonHeader))
        }

        return new Result("ERROR");
    }

}