import dns from 'dns'

export default class SitesService {

    async getServers(site) {
        
        return new Promise(function (resolve, reject) {
            dns.lookup(site, (err, address, family) => {
                if (err) {
                    reject(err)
                }
                resolve(address)
            })
        })
    }

}