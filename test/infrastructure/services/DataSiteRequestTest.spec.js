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
        let result = await dataSiteRequestService.getResponseHeaderSite("www.npmjs.com");
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK")
        expect(result.value).to.not.null
    })
 
});