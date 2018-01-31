import DataSiteRequestService from '../../../src/infrastructure/services/DataSiteRequestService'
import { expect } from 'chai'

describe('Scrap service', function () {

    it('test method parseBlockCss return array link head', async function () {
    
        let dataSiteRequestService = new DataSiteRequestService();
        let result = await dataSiteRequestService.getResponseHeaderSite("https://www.npmjs.com");
        
        expect(result).to.not.null
        expect(result.status).to.equal("OK")
        expect(result.value).to.not.null
    })
})