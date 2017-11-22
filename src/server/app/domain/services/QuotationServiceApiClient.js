import request from 'request-promise'

export default class QuotationEntitiesApiClient {
  
    constructor(currentUser) {
        this.currentUser = currentUser
        this._baseUrl = 'http://exame.abril.com.br'
    }

    async getQuotationExame(){
        return await this._makeRequestQuotation(this._baseUrl + '/mercados')
    }

    _makeRequestQuotation(url){
        const options = {
            method: 'GET',
            uri: url
        };
        return request(options)
        .then(function (response) {
            return response;
        })
        .catch(function (err) {
            return err;
        });

    }

}