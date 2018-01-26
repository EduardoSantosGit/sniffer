import DataSiteRequestService from '../../../src/infrastructure/services/DataSiteRequestService'
import { expect } from 'chai'

describe('DataSiteRequestService service', function () {

    it('test method getResponseHeaderSite content protocol returns response and body', async function () {
    
        let dataSiteRequestService = new DataSiteRequestService();
        let result = await dataSiteRequestService.getResponseHeaderSite("https://www.npmjs.com");
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK")
        expect(result.value).to.not.null
    })

    it('test method getResponseHeaderSite not content protocol returns response and body', async function () {
    
        let dataSiteRequestService = new DataSiteRequestService();
        let result = await dataSiteRequestService.getResponseHeaderSite("www.npmjs.com", "https");
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK")
        expect(result.value).to.not.null
    })
    
    it('test method resolveUrlRequest protocol http returns url complete http', function () {
    
        let dataSiteRequestService = new DataSiteRequestService();
        let result = dataSiteRequestService.resolveUrlRequest("www.npmjs.com", "http");
        
        expect(result).to.not.null
        expect(result).to.equal("http://www.npmjs.com")
    })

    it('test method resolveUrlRequest protocol https returns url complete https', function () {
    
        let dataSiteRequestService = new DataSiteRequestService();
        let result = dataSiteRequestService.resolveUrlRequest("www.npmjs.com", "https");
        
        expect(result).to.not.null
        expect(result).to.equal("https://www.npmjs.com")
    })

});