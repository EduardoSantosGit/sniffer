import SiteService from '../../../src/domain/services/SiteService'
import { expect } from 'chai'

describe('SiteService service', function () {

    it('test method getDataBasicSite when site returns OK and family ip', async function () {
            
        let siteService = new SiteService();
        let result = await siteService.getDataBasicSite("www.google.com");
        
        expect(result.status).to.equal("OK");
        expect(result.value.name).to.equal("www.google.com");
        expect(result.value.family).to.equal(4);
        expect(result.value.ip).to.equal("216.58.222.100");
    })

    it('test method getDataCompleteSite when site returns array host', async function () {
            
        let siteService = new SiteService();
        let result = await siteService.getDataCompleteSite("www.google.com");
        console.log(result)
        expect(result).to.not.null
    })

});
