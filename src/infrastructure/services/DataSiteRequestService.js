import Result from '../../domain/common/Result'
import ClientRequestApi from '../client/ClientRequestApi'

export default class DataSiteRequest{

    constructor(){
        this._client = new ClientRequestApi()
    }

    async getResponseHeaderSite(site){
        this.outLogger("getResponseHeaderSite", site)
        let siteResponse = await this._client._RequestMethodGet(site);
        let response = siteResponse[0];
        
        if(response.statusCode == 200)
            return new Result("OK", response.headers);
            
        return response
    }

    outLogger(method, param){
        logger.debug({
            class: 'DataSiteRequest',
            method: method,
            params: {
                param
            }
        })
    }

}