import os from 'os'
import dns from 'dns'

export default class SystemService {

    async getInfoSystem(){
        let json = {
            "hostname" : os.hostname(),
            "dir" : os.homedir(),
            "platform" : os.platform(),
            "release" : os.release(),
            "type" : os.type()
        }
        return json
    }
}