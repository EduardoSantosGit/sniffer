import dns from 'dns'
import Result from '../common/Result'

export default class SitesService {

    async getServerInformation(site){
        let ret = await this.getServers(site)
        return new Result("OK", ret)
    }

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

    async reverse(ip) {
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