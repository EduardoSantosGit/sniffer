import DataSiteHostService from '../../../src/infrastructure/services/DataSiteHostService'
import { expect } from 'chai'

describe('DataSiteService service', function () {

    it('test method getLookup returns array ipv4 items OK', async function () {
            
        let dataSiteHostService = new DataSiteHostService();
        let retArray = await dataSiteHostService.getLookup("www.google.com");

        expect(retArray[0]).to.not.null;
        expect(retArray[1]).to.equal(4);
        expect(retArray.length).to.equal(2);
    })

    it('test method getLookup returns array ipv6 items OK', async function () {
            
        let dataSiteHostService = new DataSiteHostService();
        let retArray = await dataSiteHostService.getLookup("www.ipv6tf.org");

        expect(retArray[0]).to.not.null;
        expect(retArray[1]).to.equal(4);
        expect(retArray.length).to.equal(2);
    })
    
    it('test method getResolve4 returns dictionary items', async function () {
            
        let dataSiteHostService = new DataSiteHostService();
        let retArray = await dataSiteHostService.getResolve4("www.google.com");

        expect(retArray.length > 0).to.true;
        expect(retArray[0]).to.not.null;
    })

    it('test method getResolve6 returns dictionary items', async function () {
            
        let dataSiteHostService = new DataSiteHostService();
        let retArray = await dataSiteHostService.getResolve6("www.ipv6tf.org");
        
        expect(retArray.length > 0).to.true;
        expect(retArray[0]).to.not.null;
    })

    it('test method getReverse returns array items', async function () {
            
        let dataSiteHostService = new DataSiteHostService();
        let retArray = await dataSiteHostService.getReverse("216.58.202.68");
        
        expect(retArray.length > 0).to.true;
        expect(retArray[0]).to.not.null;
    })
 
});