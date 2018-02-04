import Result from '../common/Result'
import DataSiteRequestService from '../../infrastructure/services/DataSiteRequestService'
import ScrapService from '../../infrastructure/services/ScrapService'
import Header from '../models/Header'
import Cache from './CacheService'
import Head from '../models/Head'

export default class SiteRequestService {

    constructor() {
        this.dataSiteRequestService = new DataSiteRequestService()
        this.scrapService = new ScrapService()
    }

    async getDataSiteHeader(site, protocol) {

        let header = Cache.read(site);

        if(header === null){
            header = await this.dataSiteRequestService.getResponseHeaderSite(site, protocol)
            Cache.write(site, header);
        }
        
        if (header.status === "OK") {
            let jsonHeader = {
                date: header.value['date'],
                connection: header.value['connection'],
                contentEncoding: header.value['content-encoding'],
                contentType: header.value['content-type'],
                transferEncoding: header.value['Transfer-Encoding'],
                acceptRanges: header.value['Accept-Ranges']
            }

            return new Result("OK", new Header(jsonHeader))
        }

        return new Result("ERROR");
    }

    async getCssSite(site, protocol){

        let cacheSite = Cache.read(site);
        let body = await this.dataSiteRequestService.getResponseBodySite(site, protocol) 
        let css = await this.scrapService.parseBlockCss(body)
        return new Result("OK", new Head({ site : site, protocol : 4, css : css }));
    }



}