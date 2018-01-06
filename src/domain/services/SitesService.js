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

    async reverse(ip){
        return new Promise(function (resolve, reject) {
            dns.reverse(ip, (err, hostnames) => {
                if (err) {
                    reject(err)
                }
                resolve(hostnames)
            })
        })
    }

}