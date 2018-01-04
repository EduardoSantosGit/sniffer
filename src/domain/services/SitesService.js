import dns from 'dns'

export default class SitesService {

    async getServers(site) {

        return dns.resolve4(site, (err, addresses) => {
            if (err) throw err;

            addresses.forEach((a) => {
                dns.reverse(a, (err, hostnames) => {
                    if (err) {
                        throw err;
                    }
                });
            });
        });

    }

}