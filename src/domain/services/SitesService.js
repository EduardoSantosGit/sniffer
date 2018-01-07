import dns from 'dns'
import Result from '../common/Result'

export default class SitesService {

    async getServers(site) {
        return new Promise(function (resolve, reject) {
            dns.lookup(site, (err, address, family) => {
                if (err) {
                    reject(new Result("ERROR", err))
                }
                resolve(new Result("OK", address))
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