import SiteHostService from '../../../src/domain/services/SiteHostService'
import { expect } from 'chai'

describe('SiteService service', function () {

    it('test method getDataBasicSite when site returns OK and family ip', async function () {
            
        let siteHostService = new SiteHostService();
        let result = await siteHostService.getDataBasicSite("www.google.com");
        
        expect(result.status).to.equal("OK");
        expect(result.value.name).to.equal("www.google.com");
        expect(result.value.family).to.equal(4);
        expect(result.value.ip).to.equal("216.58.222.100");
    })

    it('test method getDataCompleteSite when site returns OK sitehost', async function () {
            
        let siteHostService = new SiteHostService();
        let result = await siteHostService.getDataCompleteSite("www.google.com");
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK")
        expect(result.value.name).to.equal("www.google.com");
        expect(result.value.family).to.equal(4);
        expect(result.value.hosts).to.not.null
    })

});
