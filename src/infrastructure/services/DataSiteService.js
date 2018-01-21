import dns from 'dns'

export default class DataSiteService {
    
    async getLookup(site){
        return new Promise(function(resolve, reject){
            dns.lookup(site, (err, address, family) => {
                if(err)
                    reject(err)
                
                resolve([address, family])
            });
        });
    }
    
    async getResolve4(site){
        return new Promise(function(resolve, reject){
            dns.resolve4(site, (err, addresses) => {
                if (err) 
                    reject(err);

                resolve(addresses)                          
              });
        });
    }

    async getResolve6(site){
        return new Promise(function(resolve, reject){
            dns.resolve6(site, (err, addresses) => {
                if (err) 
                    reject(err);

                resolve(addresses)                          
              });
        });
    }
    
    async getReverse(addresses){
        return new Promise(function(resolve, reject){
            dns.reverse(addresses, (err, hostnames) => {
                if (err) {
                   reject(err);
                }
                resolve(hostnames);               
            });
        })
    }
}