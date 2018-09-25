import HttpRequestClient from '../../../src/infrastructure/client/HttpRequestClient'
import { expect } from 'chai'

describe('HttpRequestClient client return httpresponse ok', function () {

    it('test method getAsync returns response', async function () {
    
        let client = new HttpRequestClient();
        let result = await client.getAsync("https://www.warnerbros.com/archive/spacejam/movie/jam.htm");

        expect(result.headers).to.not.null;
        expect(result.content).to.not.null;
        expect(result.statusCode).to.equal(200);
    })

});