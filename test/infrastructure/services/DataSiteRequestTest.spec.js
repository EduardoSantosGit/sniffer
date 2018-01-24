import DataSiteRequestService from '../../../src/infrastructure/services/DataSiteRequestService'
import { expect } from 'chai'

describe('DataSiteRequestService service', function () {

    it('test method getResponseHeaderSite returns response and body', async function () {
    
        let dataSiteRequestService = new DataSiteRequestService();
        let result = await dataSiteRequestService.getResponseHeaderSite("https://www.npmjs.com");
        
        expect(result).to.not.null
    })
 
});