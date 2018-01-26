import SiteRequestService from '../../../src/domain/services/SiteRequestService'
import { expect } from 'chai'

describe('SiteRequestService service', function () {

    it('test method getDataSiteHeader content protocol return ok and header', async function () {
            
        let siteRequestService = new SiteRequestService();
        let result = await siteRequestService.getDataSiteHeader("https://www.npmjs.com")
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK");
        expect(result.value.date).to.not.null
    })

    it('test method getDataSiteHeader not content protocol return ok and header', async function () {
            
        let siteRequestService = new SiteRequestService();
        let result = await siteRequestService.getDataSiteHeader("www.npmjs.com", "https")
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK");
        expect(result.value.date).to.not.null
    })

});