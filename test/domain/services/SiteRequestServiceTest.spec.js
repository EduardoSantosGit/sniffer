import SiteRequestService from '../../../src/domain/services/SiteRequestService'
import { expect } from 'chai'

describe('SiteRequestService service', function () {

    it('test method', async function () {
            
        let siteRequestService = new SiteRequestService();
        let result = await siteRequestService.getDataSiteHeader("https://www.npmjs.com")
        
        expect(result.status).to.equal("OK");
    })

});