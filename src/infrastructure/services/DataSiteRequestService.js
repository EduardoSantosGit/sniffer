import Result from '../../domain/common/Result'
import ClientRequestApi from '../client/ClientRequestApi'
import logger from '../../lib/logger'

export default class DataSiteRequestService {

    constructor(){
        this._client = new ClientRequestApi()
    }

    async getResponseHeaderSite(site, protocol){
        this.outLogger("getResponseHeaderSite", site)
        let siteResponse = await this._client._RequestMethodGet(this.resolveUrlRequest(site, protocol));
        let response = siteResponse[0];
        
        if(response.statusCode === 200)
            return new Result("OK", response.headers);
            
        return new Result("ERROR");
    }

    async getResponseBodySite(site, protocol){
        this.outLogger("getResponseBodySite", site)
        let siteResponse = await this._client._RequestMethodGet(this.resolveUrlRequest(site, protocol));
        
        if(siteResponse[0].statusCode === 200)
            return new Result("OK", siteResponse[1]);
        
        return new Result("ERROR");
    }

    resolveUrlRequest(url, protocol){
        
        if(url.toUpperCase().includes("HTTPS://") || 
            url.toUpperCase().includes("HTTP://"))
            return url
        
        if(protocol.toUpperCase() === "HTTP")
            return "http://" + url
        
        if(protocol.toUpperCase() === "HTTPS")
            return "https://" + url
    }

    outLogger(method, param){
        logger.info({
            class: 'DataSiteRequest',
            method: method,
            params: {
                param
            }
        })
    }

}