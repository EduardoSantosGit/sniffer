import SiteRequestService from '../../../src/domain/services/SiteRequestService'
import { expect } from 'chai'

describe('SiteRequestService service', function () {

    it('test method getDataSiteHeader return ok and header', async function () {
            
        let siteRequestService = new SiteRequestService();
        let result = await siteRequestService.getDataSiteHeader("https://www.npmjs.com")
        
        expect(result.status).to.equal("OK");
    })

});