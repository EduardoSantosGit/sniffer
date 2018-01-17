import dns from 'dns'
import { read } from 'fs';

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

        let hash = new Map();

        return new Promise(function(resolve, reject){
            dns.resolve4(site, (err, addresses) => {
                if (err) 
                    reject(err);

                    addresses.forEach((a) => {
                        dns.reverse(a, (err, hostnames) => {
                            if (err) {
                                reject(err);
                            }
                            hash.set(hostnames, addresses);
                        });
                    });           
              });
        });
    }   


}