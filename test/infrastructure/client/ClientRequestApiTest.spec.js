import ClientRequestApi from '../../../src/infrastructure/client/ClientRequestApi'
import { expect } from 'chai'

describe('ClientRequestApi client', function () {

    it('test method _RequestMethodGet returns response and body', async function () {
    
        let clientRequestApi = new ClientRequestApi();
        let result = await clientRequestApi._RequestMethodGet("https://www.npmjs.com");
        
        expect(result.length > 0).to.true;
        expect(result[0]).to.not.null;
        expect(result[1]).to.not.null;
    })
 
});