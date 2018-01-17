import DataSiteService from '../../src/domain/services/DataSiteService'
import { expect } from 'chai'



describe('DataSiteService service', function () {

    it('test method getLookup returns array items OK', async function () {
            
            let dataService = new DataSiteService();
            let retArray = await dataService.getLookup("www.google.com");

            expect(retArray[0]).to.equal("216.58.202.164");
            expect(retArray[1]).to.equal(4);
            expect(retArray.length).to.equal(2);
    })
    
    

});