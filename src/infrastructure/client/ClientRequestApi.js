import request from 'request'

export default class ClientRequestApi {

    async _RequestMethodGet(url){
        return new Promise(function(resolve, reject){
            request.get(url, function (error, response, body) {
                if(error)
                    reject(error)
                
                resolve([response, body])    
            });
        })   
    }

    async _RequestMethodPost(url, form){
        return new Promise(function(resolve, reject){
            request.post({url:url, form: form}, 
                function(err,httpResponse,body){ 
                    if(error)
                        reject(error)

                    resolve([httpResponse, body])    
                })
            })        
    }

}