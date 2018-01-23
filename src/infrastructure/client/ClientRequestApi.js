import request from 'request'

export default class ClientRequestApi {

    _RequestMethodGet(url){
        return new Promise(function(resolve, reject){
            request.get(url, function (error, response, body) {
                if(error)
                    reject(error)
                
                resolve([response, body])    
            });
        })   
    }

}