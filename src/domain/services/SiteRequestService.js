import Result from '../common/Result'
import DataSiteRequestService from '../../infrastructure/services/DataSiteRequestService'
import Header from '../models/Header'

export default class SiteRequestService {

    constructor(){
        this.dataSiteRequestService = new DataSiteRequestService()
    }

    async getDataSiteHeader(site, protocol){
        let header = await this.dataSiteRequestService.getResponseHeaderSite(site, protocol)
        
        if(header.status == "OK")
        {
            let jsonHeader = {
                date : header.value['date'],
                connection : header.value['connection'],
                contentEncoding : header.value['content-encoding'],
                contentType : header.value['content-type'],
                transferEncoding : header.value['Transfer-Encoding'],
                acceptRanges : header.value['Accept-Ranges']
            }
            
            return new Result("OK", new Header(jsonHeader))
        }

        return new Result("ERROR");
    }

}